import { lazy } from "react";
import type { Project } from "../types/types";

const ProjectItem = lazy(() => import("./ProjectItem"));
export default function Projects({ data }: { data: Project[] }) {
  return (
    <div className="  bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10  ">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aura  bg-clip-text text-transparent">
        Projects
      </h2>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data?.map((item, itemIndex) => (
          <ProjectItem
            item={item}
            itemIndex={itemIndex}
            key={itemIndex * Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
