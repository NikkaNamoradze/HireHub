import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import Cookies from "js-cookie";
import { login } from "./store/userSlice";

function AppWrapper() {
  const uid = Cookies.get("uid");

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
        <Header />
        <Outlet />
      </>
    )
  }
}

export default AppWrapper;
