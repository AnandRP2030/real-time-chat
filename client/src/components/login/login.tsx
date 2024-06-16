import { Link } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import React, { useState } from "react";
import { LoginCredentials } from "../../types/userTypes";
import { useLogin } from "../../hooks/useLogin";
export const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    userName: "steve1",
    password: "12341234",
  });
  const { login } = useLogin();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(credentials);
  };
  return (
    <>
      <Navbar />
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-w-96 tw-mx-auto">
        <div className="tw-w-full tw-p-6 tw-rounded-lg tw-shadow-md tw-bg-gray-400 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-lg tw-bg-opacity-0">
          <h1 className="tw-text-3xl tw-font-semibold tw-text-center tw-text-gray-300">
            Login
            <span className="tw-text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="tw-label tw-p-2">
                <span className="tw-text-base tw-label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                name="userName"
                value={credentials.userName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="tw-label">
                <span className="tw-text-base tw-label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <Link
              to="/signup"
              className="tw-text-sm tw-font-medium  tw-hover:underline tw-hover:text-blue-600 tw-my-5 tw-text-orange-color tw-inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button
                className="tw-btn tw-btn-block tw-btn-sm tw-mt-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
