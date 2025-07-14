import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          minHeight: "calc(100dvh - 64px)",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ flex: 1 }}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;
