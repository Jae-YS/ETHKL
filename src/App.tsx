import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationGuard from "./guards/AuthenticationGuard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import CallbackPage from "./pages/CallBackPage";
// import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />

        {/* <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />

          */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
