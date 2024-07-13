import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-bold text-center text-gray-300">
          Login
          <span className="ml-2 text-secondary">ChatApp</span>
        </h1>

        {/* form */}

        <form>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered input-primary h-10 w-full"
              placeholder="Enter Username"
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
            />
          </div>

          <Link to="/signup"
            className="text-sm text-white transition-all hover:underline   mt-2 inline-block"
          >
            Don&#39;t have an account? <strong>Register here.</strong>
          </Link>

          <div>
            <button className="btn btn-secondary btn-block btn-sm mt-4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
