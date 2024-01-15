import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthenticationPage from "../pages/AuthenticationPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth", element: <AuthenticationPage /> },
]);

export default router;
