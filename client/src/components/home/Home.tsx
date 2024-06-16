import { Sidebar } from "../sidebar/Sidebar";
import MessageContainer from "../messages/MessageContainer";
import {useAuthContext} from "../../context/AuthContext";
export function Home() {
  const {authUser} = useAuthContext()
  console.log("au",authUser)
  return (
    <>
      <div className="tw-flex tw-h-screen tw-flex-row">
        <Sidebar />
        <MessageContainer />
      </div>
    </>
  );
}
