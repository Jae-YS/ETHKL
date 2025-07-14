import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useCategoriesQuery from "../hooks/useCategoriesQuery";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";
import type { Category } from "../types/Category";

const Navbar = () => {
  const theme = useTheme();

  const { data: categories = [], isLoading, isError } = useCategoriesQuery();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: "/shop" },
      authorizationParams: { prompt: "login" },
    });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "64px",
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          minHeight: "64px",
          px: { xs: 2, md: 4 },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            ETHKL
          </Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button component={Link} to="/shop" color="inherit" sx={{ mr: 2 }}>
            Shop
          </Button>

          {!isLoading &&
            !isError &&
            categories.map((cat: Category) => (
              <Button
                key={cat.id}
                component={Link}
                to={`/category/${cat.id}`}
                color="inherit"
                sx={{ textTransform: "none", mr: 2 }}
              >
                {cat.name}
              </Button>
            ))}
        </Box>

        {/* RIGHT: Cart + Auth */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} to="/cart" sx={{ mr: 2 }}>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {isAuthenticated ? (
            <>
              <IconButton component={Link} to="/profile" sx={{ mr: 1 }}>
                <AccountCircleIcon />
              </IconButton>
              <Button onClick={() => logout()} sx={{ textTransform: "none" }}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: "#914D2F",
                },
              }}
            >
              Log In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
