import { motion } from "framer-motion";
export default function Education({ data }) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 w-full md:px-10 mx-auto flex flex-col gap-10 sticky top-0 bg-gradient-to-t from-primary from-95% to-transparent backdrop-blur-2xl"
    >
      <div className="text-4xl text-center  text-primary-text animate-pulse">
        Education
      </div>
      <div className="flex flex-col  md:flex-row mx-auto gap-5">
        {data.map((item, indexItem) => (
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
