import ActionsBar from "./ActionsBar";
import Feed from "./Feed";
import RightBar from "./RightBar";
import UserActions from "./components/UserActions";
import useAuth from "./services/store";
import "./styles/App.css";
import AuthWall from "./components/AuthWall";

function App() {
  const { user } = useAuth();

  if (!user) return <AuthWall />;
  return (
    <div className="flex justify-center h-screen w-scree">
      <div className="flex-grow flex max-w-6xl h-full">
        <div
          style={{ borderRightWidth: "1px" }}
          className="flex items-center justify-between flex-grow h-full card rounded-box border-gray-700"
        >
          <ActionsBar />
          <UserActions />
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between h-full grow-[3] card rounded-box">
          <Feed />
        </div>
        <div className="divider"></div>
        <div
          style={{ borderLeftWidth: "1px" }}
          className="flex items-center justify-between flex-grow h-full card rounded-box border-gray-700"
        >
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
