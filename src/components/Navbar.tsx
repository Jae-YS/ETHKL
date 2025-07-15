import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";
import NavLinkButton from "./NavLinkButton";
import { STATIC_CATEGORIES } from "../constants/Categories";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { removeFromSessionStorage } from "../utils/sessionStorage";

type NavbarProps = {
  onCartClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (count: number, item: { quantity: number }) => count + item.quantity,
      0
    )
  );
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: "/home" },
      authorizationParams: { prompt: "login" },
    });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        height: "64px",

        justifyContent: "center",
        borderBottom: `1px solid rgba(0, 0, 0, 0.3)`,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "64px",
          px: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "0.05em",
              cursor: "pointer",
              mr: 3,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              LUNAVA
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              flexShrink: 1,
            }}
          >
            {STATIC_CATEGORIES.map((cat) => (
              <NavLinkButton
                key={cat.id}
                to={`/category/${cat.id}`}
                label={cat.name}
              />
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 2 }}>
            <IconButton onClick={onCartClick} aria-label="cart">
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isAuthenticated ? (
              <>
                <IconButton component={Link} to="/profile">
                  <AccountCircleIcon />
                </IconButton>
                <Button
                  onClick={() => {
                    if (user?.email) {
                      removeFromSessionStorage(`cart:${user.email}`);
                    }
                    dispatch(clearCart());
                    logout();
                  }}
                  sx={{ textTransform: "none" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#914D2F",
                  },
                }}
              >
                Log In
              </Button>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
