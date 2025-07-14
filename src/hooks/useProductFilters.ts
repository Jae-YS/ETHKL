import { useMemo } from "react";
import type { Product } from "../types/Product";
import type { ProductFilterState } from "../types/ProductFilterState";

export const useFilteredProducts = (
  products: Product[],
  category: string | undefined,
  filters: ProductFilterState | null
) => {
  return useMemo(() => {
    let result = [...products];
    if (category && category !== "All Products") {
      result = result.filter((p) => String(p.category.name) === category);
    }

    if (
      filters?.minPrice !== undefined &&
      filters?.maxPrice !== undefined &&
      filters.minPrice !== null &&
      filters.maxPrice !== null
    ) {
      result = result.filter(
        (p) => p.price >= filters.minPrice! && p.price <= filters.maxPrice!
      );
    }

    if (filters?.sortBy === "date") {
      result.sort(
        (a, b) =>
          new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()
      );
    } else if (filters?.sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters?.sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [products, category, filters]);
};
