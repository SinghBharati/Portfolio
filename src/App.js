import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import {Provider} from "react-redux";
import store from "./utils/store";
function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <AboutMe/>
        },
        {
          path: "/contact",
          element: <ContactMe/>
        },
      ]
    },

  ])

  return (
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <div>
            <Body/>
          </div>
        </RouterProvider>
      </Provider>
  );
}

export default App;
