import { useQuery } from "@tanstack/react-query";
import type { Category } from "../types/Category"; 


export default function useCategoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      return data.filter((cat: Category) =>
        ["Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous"].includes(cat.name)
      );
    },
    staleTime: 5 * 60 * 1000,
  });
}