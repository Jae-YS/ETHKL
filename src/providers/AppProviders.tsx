import { AuthProvider } from "../context/auth/AuthProvider";
// import { CartProvider } from "../context/cart/CartProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    {/* <CartProvider>{children}</CartProvider> */}
    {children}
  </AuthProvider>
);
