import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { login, loading } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-bold text-center text-gray-300">
          Login
          <span className="ml-2 text-secondary">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-white transition-all hover:underline   mt-2 inline-block"
          >
            Don&#39;t have an account? <strong>Register here.</strong>
          </Link>

          <div>
            <button
              className="btn btn-secondary btn-block btn-sm mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
