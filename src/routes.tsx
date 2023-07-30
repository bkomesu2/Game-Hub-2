import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/gameDetailPage";
import GamePage from "./pages/gamePage";
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
