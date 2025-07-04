import type { Project } from "../types/types";

export default function ProjectItem({
  item,
  itemIndex,
}: {
  item: Project;
  itemIndex: number;
}) {
  return (
    <div
      key={itemIndex}
      className="text-primary-text border-2 border-secondry-text p-4 rounded-xl  flex-col flex gap-2"
    >
      <div className="bg-white aspect-video overflow-hidden rounded-xl">
        {item.img ? (
          <img
            src={item.img}
            className="aspect-video object-cover"
            loading="lazy"
          />
        ) : (
          <div className="aspect-video bg-white flex items-center justify-center">
            <div className="text-primary text-xl">No Image For View</div>
          </div>
        )}
      </div>
      <div className="text-2xl text-center text-white">{item.name}</div>
      <div className="px-1">{item.description}</div>
      <div className="flex flex-row flex-wrap gap-1">
        {item?.languages?.map((item2, item2Index) => (
          <div
            key={item2Index}
            className="px-2 py-1   border-primary-text border-b-2 hover:text-secondry-text hover:border-secondry-text duration-300 cursor-pointer"
          >
            {item2}
          </div>
        ))}
      </div>
      <a
        href={item.link}
        className="text-primary-text text-end"
        target="_blank"
      >
        view
      </a>
    </div>
  );
}
