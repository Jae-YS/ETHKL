import { Box, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate(`/category/${product.category.id}/${product.slug}`);
      }}
      sx={{
        cursor: "pointer",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 280,
          overflow: "hidden",
          "&:hover .view": {
            transform: "translateY(0)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.images[0]}
          alt={product.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "background.default",
          }}
        />

        <Box
          className="view"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            fontWeight: 500,
            textTransform: "uppercase",
            transform: "translateY(100%)",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
        >
          View
        </Box>
      </Box>

      <Box sx={{ px: 0.5 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "0.95rem",
            color: "text.primary",
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "error.main",
            mt: 0.5,
          }}
        >
          ${product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
