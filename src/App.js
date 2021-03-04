import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <h1>aac-ecommerce</h1>
    </Provider>
  );
};
