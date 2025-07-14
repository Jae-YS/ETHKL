import { Box, Button, Typography, CardMedia } from "@mui/material";
import { useEffect, useRef } from "react";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import { useFetchProductBySlug } from "../hooks/useFetchProductBySlug";
import { useUIContext } from "../context/loader/useUIContext";

const ProductDetailPage = () => {
  const productSlug = useParams<{ slug: string }>().slug ?? "";
  const { data: product, isLoading } = useFetchProductBySlug(productSlug);
  const { setIsAppLoading } = useUIContext();
  const prev = useRef<boolean | null>(null);

  useEffect(() => {
    if (prev.current === null || prev.current !== isLoading) {
      prev.current = isLoading;
      setIsAppLoading(isLoading);
    }
  }, [isLoading, setIsAppLoading]);

  if (isLoading || !product) {
    return null;
  }

  return (
    <MainLayout>
      <Box sx={{ px: 2, py: 3, backgroundColor: "background.default" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
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
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {product.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mt: 1, color: "text.secondary" }}
            >
              {product.category.name}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, color: "error.main" }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
              {product.description}
            </Typography>

            <Box
              sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 500,
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "#914D2F",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ProductDetailPage;
