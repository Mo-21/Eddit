import AuthWall from "../components/AuthWall";
import useAuth from "../services/store";

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) return <AuthWall />;
  return <div>Hello Profile</div>;
};

export default UserProfile;
