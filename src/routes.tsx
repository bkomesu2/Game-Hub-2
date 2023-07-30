import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GameDetailPage from "./pages/gameDetailPage";
import GamePage from "./pages/gamePage";
import Layout from "./pages/Layout";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/home", element: <Home /> }],
  },
  {
    path: "games",
    element: <GamePage />,
    children: [{ path: ":id", element: <GameDetailPage /> }],
  },
]);

export default router;
