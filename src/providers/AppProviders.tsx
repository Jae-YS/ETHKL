import { AuthProvider } from "../context/auth/AuthProvider";
import { UIProvider } from "../context/loader/UIProvider";
// import { CartProvider } from "../context/cart/CartProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <UIProvider>
      {/* <CartProvider>{children}</CartProvider> */}
      {children}
    </UIProvider>
  </AuthProvider>
);
