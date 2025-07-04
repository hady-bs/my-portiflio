import type PortfolioData from "../types/types";

export default async function getData(): Promise<any> {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/657f0a361f5677401f0efbc3",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$/4ibfjlkQKUvYvXBjmuwVej7NeEpfBDXp92Tv7odYca7HtOyjdbkm",
      },
    }
  );
  const data: PortfolioData = await response.json();
  return data.record;
}
