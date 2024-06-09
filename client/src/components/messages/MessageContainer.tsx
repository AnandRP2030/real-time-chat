import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const isChatSelected = true;
  return (
    <div className="tw-w-3/4 tw-flex tw-flex-col tw-overflow-auto">
      <>
        {/* Header */}
        <div className="tw-bg-slate-500 tw-z-10 tw-px-4 tw-fixed tw-w-full tw-py-2 tw-mb-2">
          <span className="tw-label-text">To:</span>{" "}
          <span className="tw-text-gray-900 tw-font-bold">John doe</span>
        </div>

        {isChatSelected ? (
          <div>
            <Messages />
            <MessageInput />
          </div>
        ) : (
          <NoChatSelected />
        )}
      </>
    </div>
  );
};
export default MessageContainer;
const NoChatSelected = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full">
      <div className="tw-px-4 tw-text-center tw-sm:text-lg tw-md:text-xl tw-text-gray-200 tw-font-semibold tw-flex tw-flex-col tw-items-center tw-gap-2">
        <p>Welcome 👋 John ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="tw-text-3xl tw-md:text-6xl tw-text-center" />
      </div>
    </div>
  );
};
