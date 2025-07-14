export type ProductFilterState = {
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "date" | "price-asc" | "price-desc";
};