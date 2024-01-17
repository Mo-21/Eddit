import { Link } from "react-router-dom";

const AuthWall = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="prose">
        <h1>Looks like you are not signed in. </h1>
        <h3>
          You can sign in from{" "}
          <Link className="link" to="/auth">
            here
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default AuthWall;
