import getData from "../api/getData";
import { useQuery } from "@tanstack/react-query";
import type PortfolioData from "../types/types";
export default function useGetData(): {
  data: PortfolioData | undefined;
  isLoading: boolean;
  error: Error | null;
} {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => getData(),
    select: (response) => response,
  });
  return { data, isLoading, error };
}
