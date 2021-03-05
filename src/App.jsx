import { Provider } from "react-redux";
import { AppRouter } from "./routers/app.routes.jsx";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
