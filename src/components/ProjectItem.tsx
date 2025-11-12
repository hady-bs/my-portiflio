import type { Project } from "../types/types";
import { motion } from "framer-motion";
export default function ProjectItem({
  item,
  itemIndex,
}: {
  item: Project;
  itemIndex: number;
}) {
  return (
    <motion.div
      key={itemIndex}
      className="text-primary-text border-2 border-aura p-4 rounded-xl  flex-col flex min-h-[450px] justify-between"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-white aspect-video overflow-hidden rounded-xl">
        {item.img ? (
          <img
            src={item.img}
            className="aspect-video object-contain"
            loading="lazy"
          />
        ) : (
          <div className="aspect-video bg-white flex items-center justify-center">
            <div className="text-primary text-xl">No Image For View</div>
          </div>
        )}
      </div>
      <div className="text-2xl text-center text-aura">{item.name}</div>
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
      <div className="flex flex-row justify-end">
        <a
          href={item.link}
          className="text-black font-bold px-5 py-1 rounded-full bg-aura w-fit duration-300 hover:translate-y-[-2px] hover:shadow-[0px_0px_10px_var(--color-aura)]"
          target="_blank"
        >
          view
        </a>
      </div>
    </motion.div>
  );
}
