import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthenticationPage from "../pages/AuthenticationPage";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth", element: <AuthenticationPage /> },
  { path: "/profile", element: <UserProfile /> },
]);

export default router;
