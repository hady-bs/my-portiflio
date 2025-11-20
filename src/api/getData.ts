import type PortfolioData from "../types/types";

export default async function getData(): Promise<PortfolioData["record"]> {
  // Fetch from local JSON instead of API
  const response = await fetch("/data.json");
  const data: PortfolioData = await response.json();
  return data.record;
}
