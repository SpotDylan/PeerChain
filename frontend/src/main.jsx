import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CardPage from "./pages/CardPage.jsx";
import Navigation from "./components/Navbar.jsx";
import Papers from "./pages/papers.jsx";
import Review from "./pages/Review.jsx";
import { MoralisProvider } from "react-moralis";
import { useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "card_page/:cardId",
    element: <CardPage />,
  },
  {
    path: "papers/",
    element: <Papers />,
  },
  {
    path: "review/",
    element: <Review />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoralisProvider initializeOnMount={false}>
      {/* <App /> */}
      <Navigation />
      <RouterProvider router={router} />
    </MoralisProvider>
  </React.StrictMode>
);
