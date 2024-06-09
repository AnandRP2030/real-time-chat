import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className='tw-w-3/4 tw-flex tw-flex-col'>
      <>
        {/* Header */}
        <div className='tw-bg-slate-500 tw-px-4 tw-py-2 tw-mb-2'>
          <span className='tw-label-text'>To:</span> <span className='tw-text-gray-900 tw-font-bold'>John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  );
};
export default MessageContainer;
