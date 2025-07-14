import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { Alert, Box, Container, Typography } from "@mui/material";

const CallbackPage: React.FC = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="sm">
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Oops... something went wrong!
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {error.message}
            </Typography>
          </Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DotLoader size={80} color="#A85E3B" />
    </Box>
  );
};

export default CallbackPage;
