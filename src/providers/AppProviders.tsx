import { UIProvider } from "../context/ui/UIProvider";
import { Provider } from "react-redux";
import { store } from "../store";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <UIProvider>
    <Provider store={store}>{children}</Provider>
  </UIProvider>
);
