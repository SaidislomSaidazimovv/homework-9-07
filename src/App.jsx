import store from "./components/store";
import Router from "./router/router";


import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
