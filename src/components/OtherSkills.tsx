import { motion } from "framer-motion";
export default function OtherSkills({ data }: { data: string[] }) {
  return (
    <div className="bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10 sticky top-0">
      <div className="text-4xl text-center  text-primary-text animate-pulse">
        Other Skills
      </div>
      <div className="md:w-full w-[90%] mx-auto flex gap-3 flex-wrap md:justify-center">
        {data?.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            className="px-3 py-2 text-black shadow-[0px_0px_10px_var(--color-aura)] rounded-xl  backdrop-blur-[100px] bg-aura"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (itemIndex + 1) * 0.09 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
