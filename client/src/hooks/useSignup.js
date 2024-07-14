import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      }
      console.log(data, "data from signup");
      // local storage
      localStorage.setItem("authUser", JSON.stringify(data));
      // context
      setAuthUser(data);
     
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return { signup, loading };
}

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  return true;
}
