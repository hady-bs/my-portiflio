import { lazy, Suspense } from "react";
import useGetData from "./hooks/useGetData";
import type PortfolioData from "./types/types";
import Experience from "./components/Experience";

const Education = lazy(() => import("./components/Education"));
const Hero = lazy(() => import("./components/Hero"));
const Languages = lazy(() => import("./components/languages"));
const OtherSkills = lazy(() => import("./components/OtherSkills"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const ContactMe = lazy(() => import("./components/ContactMe"));

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

  if (isLoading)
    return (
      <div className="relative h-[100dvh] w-full ">
        <div className="loader flex items-center justify-center h-full gap-3">
          {[...Array(3)].map((_, index) => (
            <div
              className="w-10 aspect-square rounded-full bg-gradient-to-r from-primary via-gray-500 to-secondry-text animate-spin"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center flex-col gap-5 justify-center w-screen h-screen">
        <div className="text-white text-5xl animate-pulse">{error.name}</div>
        <div className="text-secondry-text text-3xl animate-pulse">
          {error.message}
        </div>
      </div>
    );

  if (data)
    return (
      <div className="flex flex-col container mx-auto ">
        <meta name={"keywords"} content={data.toString()} />
        <Hero />

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="loader text-3xl text-white">
                loading <span className="animate-pulse">...</span>
              </div>
            </div>
          }
        >
          <Experience data={data.record.experience} />
          <Projects data={data.record.projects} />
          <Skills data={data.record.skills} />
          <OtherSkills data={data.record.otherSkills} />
          <div className="grid md:grid-cols-2 ">
            <Education data={data.record.Education} />
            <Languages data={data.record.languages} />
          </div>
          <ContactMe />
        </Suspense>
      </div>
    );
}

export default App;
