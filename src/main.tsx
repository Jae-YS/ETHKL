import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./utils/Auth0Provider";
import { AppProviders } from "./providers/AppProviders.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Auth0ProviderWithNavigate>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Auth0ProviderWithNavigate>
        </BrowserRouter>
      </ThemeProvider>
    </AppProviders>
  </StrictMode>
);
