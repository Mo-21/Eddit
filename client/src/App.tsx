import ActionsBar from "./ActionsBar";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex-grow flex max-w-6xl h-full">
          <div className="flex items-center justify-between h-full card rounded-box">
            <ActionsBar />
          </div>
          <div className="divider"></div>
          <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
