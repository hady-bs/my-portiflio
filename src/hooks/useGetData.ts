import getData from "../api/getData";
import { useQuery } from "@tanstack/react-query";
export default function useGetData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => getData(),
    select: (response) => response.record,
  });
  return { data, isLoading, error };
}
