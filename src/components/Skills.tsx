import { motion } from "framer-motion";
import type { Skill } from "../types/types";
export default function Skills({ data }: { data: Skill[] }) {
  return (
    <div className="overflow-hidden bg-gradient-to-t from-primary from-90%  to-transparent backdrop-blur-lg flex flex-col gap-10 py-10 sticky top-0">
      <div className="text-4xl text-center  text-primary-text animate-pulse">
        My Skills
      </div>
      <div className="sticky top-0 md:gap-10 gap-5 w-full lg:grid-cols-5  grid-cols-2 grid md:overflow-y-visible  py-10">
        {data?.map((item, index) => (
          <motion.div
            key={index * Math.random()}
            whileInView={{ translateX: 0, opacity: 1 }}
            initial={{
              translateX:
                window.innerWidth < 800
                  ? index % 2 == 0
                    ? "-100%"
                    : "100%"
                  : 0,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-[0px_0px_10px_white] md:w-full overflow-hidden relative w-[90%] mx-auto py-2 rounded-full flex items-center justify-center  bg-white text-primary"
          >
            <div className="relative z-[100] text-white">{item.name}</div>
            <motion.div
              transition={{
                delay: (index + 1) * 0.01,
                duration: 0.5,
                type: "spring",
              }}
              initial={{ width: "0%" }}
              whileInView={{ width: item.rank }}
              className="progress absolute bg-aura h-full left-0"
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
