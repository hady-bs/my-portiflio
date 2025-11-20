import getData from "../api/getData";
import { useQuery } from "@tanstack/react-query";
import type PortfolioData from "../types/types";

export default function useGetData(): {
  data: PortfolioData["record"] | undefined;
  isLoading: boolean;
  error: Error | null;
} {
  const { data, isLoading, error } = useQuery<PortfolioData["record"], Error>({
    queryKey: ["data"],
    queryFn: () => getData(),
  });

  return { data, isLoading, error: error ?? null };
}
