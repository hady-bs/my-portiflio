import { lazy } from "react";
import type { Project } from "../types/types";

const ProjectItem = lazy(() => import("./ProjectItem"));
export default function Projects({ data }: { data: Project[] }) {
  return (
    <div className="  bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10  ">
      <div className="text-4xl text-center sticky top-0 text-primary-text  z-[1] bg-primary py-10">
        Projects
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data?.map((item, itemIndex) => (
          <ProjectItem item={item} itemIndex={itemIndex} key={itemIndex} />
        ))}
      </div>
    </div>
  );
}
