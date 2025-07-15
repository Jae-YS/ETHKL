import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";

const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <Box
        sx={{
          height: "calc(100dvh - 64px)",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
          overflow: "hidden",
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Discover Style with Purpose.
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 4, maxWidth: "600px", color: "text.secondary" }}
        >
          Thoughtfully crafted. Sustainably made. Curated by Lunava for those
          who care what they wear.
        </Typography>

        <Button
          component={Link}
          to="/home"
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            textTransform: "none",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "#914D2F",
            },
          }}
        >
          Explore the Collection
        </Button>
      </Box>
    </LandingLayout>
  );
};

export default LandingPage;
