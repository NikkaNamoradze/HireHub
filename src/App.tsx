import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import Cookies from "js-cookie";
import { login } from "./store/userSlice";
import { useLocation } from 'react-router-dom';

function AppWrapper() {
  const uid = Cookies.get("uid");
  const location = useLocation();
  const currentPath = location.pathname;


  if (uid !== undefined || uid !== "") {
    store.dispatch(login(uid));

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

  function App() {
    return (
      <>
      {
        currentPath==="/login" || currentPath === "/registration" ? null :<Header />
      }

        <Outlet />
      </>
    )
  }
}

export default AppWrapper;
