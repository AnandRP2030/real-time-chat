import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export const Sidebar = () => {
  return (
    <div className="tw-border-r tw-h-full tw-w-1/4  tw-border-slate-500 tw-p-4 tw-flex tw-flex-col">
      <SearchInput />
      <div className="tw-divider tw-px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
