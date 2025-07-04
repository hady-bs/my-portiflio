import Education from "./components/Education";
import Hero from "./components/Hero";
import Languages from "./components/languages";
import OtherSkills from "./components/OtherSkills";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import useGetData from "./hooks/useGetData";
import type PortfolioData from "./types/types";

function App() {
  const {
    data,
    isLoading,
    error,
  }: {
    data: PortfolioData | undefined;
    isLoading: boolean;
    error: Error | null;
  } = useGetData();
  console.log(data);
  if (isLoading)
    return (
      <div className="relative h-[100dvh] w-full ">
        <div className="loader flex items-center justify-center h-full gap-3">
          {[...Array(3)].map((item, indexItem) => (
            <div
              className="w-10 aspect-square rounded-full bg-gradient-to-r from-primary via-gray-500 to-secondry-text animate-spin"
              key={item + indexItem}
            ></div>
          ))}
        </div>
      </div>
    );
  if (data)
    return (
      <div className="flex flex-col  container mx-auto">
        <Hero />
        <Projects data={data.record.projects} />
        <Skills data={data.record.skills} />
        <OtherSkills data={data.record.otherSkills} />
        <div className="grid md:grid-cols-2 ">
          <Education data={data.record.Education} />
          <Languages data={data.record.languages} />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center flex-col gap-5 justify-center w-screen h-screen">
        <div className="text-white text-5xl animate-pulse">{error?.name}</div>
        <div className="text-secondry-text text-3xl animate-pulse">
          {error?.message}
        </div>
      </div>
    );
}

export default App;
