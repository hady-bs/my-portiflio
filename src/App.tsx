import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import useGetData from "./hooks/useGetData";
import type PortfolioData from "./types/types";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";

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
    data: PortfolioData["record"] | undefined;
    isLoading: boolean;
    error: Error | null;
  } = useGetData();

  if (isLoading)
    return (
      <div className="relative h-[100dvh] w-full ">
        <div className="loader flex items-center justify-center h-full gap-3">
          <div className="md:text-4xl text-2xl animate-pulse text-white flex items-center">
            loading...
            <div className="w-10 h-10   border-x-aura border-x-2 rounded-full  animate-spin"></div>
          </div>
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
      <Routes>
        <Route
          path="/"
          element={
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
                <Experience data={data.experience} />
                <Projects data={data.projects} />
                <Skills data={data.skills} />
                <OtherSkills data={data.otherSkills} />
                <div className="grid md:grid-cols-2 ">
                  <Education data={data.Education} />
                  <Languages data={data.languages} />
                </div>
                <ContactMe />
              </Suspense>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default App;
