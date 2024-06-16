import { Sidebar } from "../sidebar/Sidebar";
import MessageContainer from "../messages/MessageContainer";

export function Home() {
  return (
    <>
      <div className="tw-flex tw-h-screen tw-flex-row">
        <Sidebar />
        <MessageContainer />
      </div>
    </>
  );
}
