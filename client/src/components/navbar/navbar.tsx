import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="tw-px-8 tw-h-20 tw-items-center tw-justify-between tw-flex tw-flex-row tw-text-xl tw-bg-red-900 ">
        <li
          role="button"
          className="hover:tw-bg-sky-700"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Home{" "}
        </li>
        <li
          role="button"
          className="hover:tw-bg-sky-700"
          onClick={() => {
            navigate("/signup");
          }}
        >
          {" "}
          Signup{" "}
        </li>
        <li
          role="button"
          className="hover:tw-bg-sky-700"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Login{" "}
        </li>
      </ul>
    </div>
  );
};
