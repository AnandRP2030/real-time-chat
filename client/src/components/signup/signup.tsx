import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { GenderCheckbox } from "./genderCheckbox";
import { useState } from "react";
import { SignupUserDetails } from "../../types/userTypes";
import { useSignup } from "../../hooks/useSignup";
export const SignUp = () => {
  const [userData, setUserData] = useState<SignupUserDetails>({
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
  });

  const {loading, signup} = useSignup();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleGenderChange = (gender: string) => {
    setUserData({ ...userData, gender });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(userData)
    
  };
  return (
    <>
      <Navbar />
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-w-96 tw-mx-auto">
        <div className="tw-w-full tw-p-6 tw-rounded-lg tw-shadow-md tw-bg-gray-400 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-lg tw-bg-opacity-0">
          <h1 className="tw-text-3xl tw-font-semibold tw-text-center tw-text-gray-300">
            Sign Up <span className="tw-text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="tw-label tw-p-2">
                <span className="tw-text-base tw-label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                name="fullName"
                value={userData.fullName}
                onChange={handleChanges}
                autoComplete="name"
              />
            </div>

            <div>
              <label className="tw-label tw-p-2">
                <span className="tw-text-base tw-label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                name="username"
                value={userData.username}
                onChange={handleChanges}
                autoComplete="additional-name"
              />
            </div>

            <div>
              <label className="tw-label">
                <span className="tw-text-base tw-label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="new-password"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                name="password"
                value={userData.password}
                onChange={handleChanges}
              />
            </div>

            <div>
              <label className="tw-label">
                <span className="tw-text-base tw-label-text">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="tw-w-full tw-input tw-input-bordered tw-h-10"
                autoComplete="new-password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChanges}
              />
            </div>

            <GenderCheckbox
              handleGenderChange={handleGenderChange}
              activeGender={userData.gender}
            />

            <Link
              className="tw-font-medium tw-mb-5 tw-text-sm tw-hover:underline tw-hover:text-blue-600 tw-mt-2 tw-inline-block"
              to="/login"
            >
              Already have an account?
            </Link>

            <div>
              <button
                type="submit"
                className="tw-btn tw-btn-block tw-btn-sm tw-mt-2 tw-border tw-border-slate-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
