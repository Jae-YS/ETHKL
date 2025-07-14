import React from "react";
import { Route, Routes } from "react-router-dom";
// import AuthenticationGuard from "./guards/AuthenticationGuard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import CallbackPage from "./pages/CallBackPage";
// import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import { useUIContext } from "./context/loader/useUIContext";
import { Box } from "@mui/material";
import DotLoader from "react-spinners/DotLoader";
import ProductsPage from "./pages/ProductPage";
import ProductView from "./pages/ProductView";

const GlobalLoaderOverlay = () => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      bgcolor: "rgba(255, 255, 255, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
    }}
  >
    <DotLoader size={80} color="primary.main" />
  </Box>
);

const App: React.FC = () => {
  const { isAppLoading } = useUIContext();

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />

      {isAppLoading && <GlobalLoaderOverlay />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/category/:id" element={<ProductsPage />} />
        <Route path="/category/:categoryId/:slug" element={<ProductView />} />
        {/* <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
