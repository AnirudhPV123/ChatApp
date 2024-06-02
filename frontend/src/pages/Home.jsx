import MessageContainer from "../components/MessageContainer/MessageContainer";
import SideBar from "../components/SideBar/SideBar";
import useGetOnlineUsers from "../hooks/useGetOnlineUsers";

function Home() {
  useGetOnlineUsers();

  return (
    <div className="home-container flex">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Home;