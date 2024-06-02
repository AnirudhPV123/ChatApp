import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
import SendInput from "./SendInput";
import { useSelector } from "react-redux";

function MessageContainer() {
  const { selectedUser, selectedGroup, authUser } = useSelector(
    (store) => store.user
  );

  if (!selectedUser && !selectedGroup) {
    return (
      <div className="w-2/3 h-[100vh] flex flex-col justify-center">
        <h1 className="text-4xl font-semibold text-center mb-2">
          Hi, {authUser?.userName}{" "}
        </h1>
        <h1 className="text-xl text-center">Let's start your conversation</h1>
      </div>
    );
  }

  return (
    <div className=" w-2/3  h-[100vh]">
      <ChatHeader />
      <Messages />
      <SendInput />
    </div>
  );
}

export default MessageContainer;