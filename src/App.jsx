import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Connections from "./components/Connections";
import Invitations from "./components/Invitaions";
import Teammates from "./components/Teammates";
import Groups from "./components/Groups";
import Pages from "./components/Pages";
import Hashtags from "./components/Hashtags";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Dashboard />
        </>
      ),
      children: [
        {
          index: true,
          element: <Connections />,
        },
        {
          path: "invitations",
          element: <Invitations />,
        },
        {
          path: "teammates",
          element: <Teammates />,
        },
        {
          path: "groups",
          element: <Groups />,
        },
        {
          path: "pages",
          element: <Pages />,
        },
        {
          path: "hashtags",
          element: <Hashtags />,
        },
      ],
    },
  ]);

  return (
    // <div className="w-full">
    //   <Navbar />
    //   <Dashboard />
    //   <Footer />
    // </div>
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
