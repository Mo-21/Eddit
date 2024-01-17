import { Link } from "react-router-dom";

const UnauthorizedWall = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <h1>
        Looks like you haven't signed in.{" "}
        <h3>
          <Link to="/auth">You can sign in from here</Link>
        </h3>
      </h1>
    </div>
  );
};

export default UnauthorizedWall;
