import { motion } from "framer-motion";
export default function OtherSkills({ data }: { data: string[] }) {
  return (
    <div className="bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10 sticky top-0">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aura  bg-clip-text text-transparent">
        Other Skills
      </h2>
      <div className="md:w-full w-[90%] mx-auto flex gap-3 flex-wrap md:justify-center">
        {data?.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            className="px-3 py-2 text-black shadow-[0px_0px_10px_var(--color-aura)] rounded-xl font-bold  backdrop-blur-[100px] bg-aura"
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
