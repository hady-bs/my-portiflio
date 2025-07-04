import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="flex flex-col justify-center gap-24 my-32 sticky top-0">
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          className=" relative z-[100] mx-auto md:w-64 w-32 aspect-square bg-gradient-to-b from-primary via-gray-500 to-secondry-text rounded-full shadow-[0px_2px_100px_var(--color-accent-color)] before:content-[''] before:absolute before:w-2 before:aspect-square before:rounded-full before:bg-gradient-to-l before:from-primary before:via-gray-500 before:to-white before:shadow-[0px_0px_10px_white] before:right-10"
        ></motion.div>

        {[...Array(100)].map((star, starIndex) => (
          <div
            key={starIndex}
            className="absolute w-[2px] aspect-square rotate-90 bg-accent-color animate-pulse shadow-[0px_0px_1px_var(--color-white)]"
            style={{
              left: Math.floor(Math.random() * 100) + "%",
              top: Math.floor(Math.random() * 100) + "%",
            }}
          ></div>
        ))}
      </div>
      <motion.div className="text-center lg:text-8xl md:text-7xl text-4xl text-primary-text">
        {"Abd Alhady Alboshy".split("").map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            initial={{ textShadow: "0" }}
            animate={{ textShadow: "0px 0px 10px white" }}
            transition={{
              duration: 1,
              delay: 0.05 * (letterIndex + 1),
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="px-1"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <div className="text-3xl text-secondry-text text-center">
        {"front-end developer".split("").map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.04 * (letterIndex + 1),
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
