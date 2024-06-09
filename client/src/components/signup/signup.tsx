// STARTER CODE FOR THE SIGNUP COMPONENT
import { GenderCheckbox } from "./genderCheckbox";

export const SignUp = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-w-96 tw-mx-auto">
      <div className="tw-w-full tw-p-6 tw-rounded-lg tw-shadow-md tw-bg-gray-400 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-lg tw-bg-opacity-0">
        <h1 className="tw-text-3xl tw-font-semibold tw-text-center tw-text-gray-300">
          Sign Up <span className="tw-text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="tw-label tw-p-2">
              <span className="tw-text-base tw-label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="tw-w-full tw-input tw-input-bordered tw-h-10"
            />
          </div>

          <div>
            <label className="tw-label tw-p-2">
              <span className="tw-text-base tw-label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="tw-w-full tw-input tw-input-bordered tw-h-10"
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
            />
          </div>

          <div>
            <label className="tw-label">
              <span className="tw-text-base tw-label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="tw-w-full tw-input tw-input-bordered tw-h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            className="tw-text-sm tw-hover:underline tw-hover:text-blue-600 tw-mt-2 tw-inline-block"
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button className="tw-btn tw-btn-block tw-btn-sm tw-mt-2 tw-border tw-border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
