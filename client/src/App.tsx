import ActionsBar from "./ActionsBar";
import Feed from "./Feed";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex-grow flex max-w-6xl h-full">
          <div className="flex items-center justify-between flex-grow h-full card rounded-box">
            <ActionsBar />
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-between h-full grow-[2] card rounded-box">
            <Feed />
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-between flex-grow h-full card rounded-box">
            content
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
