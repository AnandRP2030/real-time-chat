import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";

export const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="tw-w-6 tw-h-6 tw-text-white tw-cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="tw-loading tw-loading-spinner"></span>
      )}
    </div>
  );
};