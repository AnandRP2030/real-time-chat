import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="tw-px-8 tw-h-20 tw-items-center tw-justify-between tw-flex tw-flex-row tw-text-xl tw-bg-gray-800 ">
        <li
          role="button"
          className="hover:tw-font-bold "
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Home{" "}
        </li>
        <li
          role="button"
          className="hover:tw-font-bold "
          onClick={() => {
            navigate("/signup");
          }}
        >
          {" "}
          Signup{" "}
        </li>
        <li
          role="button"
          className="hover:tw-font-bold"
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
