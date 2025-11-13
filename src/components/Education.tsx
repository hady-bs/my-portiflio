import { motion } from "framer-motion";
import type { EducationItem } from "../types/types";
export default function Education({ data }: { data: EducationItem[] }) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 w-full md:px-10 mx-auto flex flex-col gap-10 sticky top-0 bg-gradient-to-t from-primary from-95% to-transparent backdrop-blur-2xl"
    >
      <h2 className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-aura  bg-clip-text text-transparent">
        Education
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-5">
        {data?.map((item, indexItem) => (
          <div
            key={indexItem}
            className={` ${
              item.done ? "bg-white " : "bg-accent-color"
            } py-5 px-7 flex flex-col md:w-full w-[90%] mx-auto rounded-3xl gap-2`}
          >
            <div>{item.date}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
