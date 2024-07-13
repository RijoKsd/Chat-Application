import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const { signup, loading } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-bold text-center text-gray-300">
          Sign Up
          <span className="ml-2 text-secondary">ChatApp</span>
        </h1>

        {/* form */}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-1">
              <span className="text-white label-text"> Full Name</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter your full name"
              name="fullName"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <label htmlFor="username" className="label p-1">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter Username"
              name="username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <label htmlFor="password" className="label p-1">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter Password"
              name="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <label htmlFor="confirmPassword" className="label p-1">
              <span className="text-white label-text"> Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter confirm Password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* gender component */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-white transition-all hover:underline  mt-2 inline-block"
          >
            Already have an account<strong>Login here.</strong>
          </Link>

          <div>
            <button className="btn btn-secondary btn-block btn-sm mt-4">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
