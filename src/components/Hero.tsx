import { motion } from "framer-motion";
import { useMemo, type JSX } from "react";
export default function Hero() {
  const stars: JSX.Element[] = useMemo(() => {
    return [...Array(100)].map((star: undefined, starIndex: number) => (
      <motion.div
        key={starIndex}
        className="absolute w-[2px] aspect-square  rotate-45 bg-white animate-pulse shadow-[0px_0px_1px_var(--color-aura)]"
        initial={{
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
        }}
        animate={{
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
          duration: 10,
        }}
      >
        {star && ""}
      </motion.div>
    ));
  }, []);
  return (
    <div className="flex flex-col justify-evenly h-screen   sticky top-0 overflow-hidden">
      <div className="">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1.2 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className=" relative z-[100] mx-auto md:w-64 w-32 aspect-square bg-gradient-to-b from-aura via-gray-500 to-secondry-text rounded-full shadow-[0px_2px_100px_var(--color-aura)] before:content-[''] before:absolute before:w-2 before:aspect-square before:rounded-full before:bg-gradient-to-l before:from-white via-50% before:to-aura before:shadow-[0px_0px_10px_var(--color-aura),0px_0px_1px_var(--color-aura)]  before:right-0 before:top-11/12"
        ></motion.div>
        {stars}
      </div>
      <motion.div className="text-center lg:text-8xl md:text-7xl text-4xl text-primary-text">
        {"Abd Alhady Alboshy".split("").map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            initial={{ textShadow: "0" }}
            whileInView={{ color: "var(--color-aura)" }}
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
      <div className="text-3xl text-aura text-center">
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
      <div className="text-xl text-center text-white">
        {"full-stack developer".split("").map((letter, letterIndex) => (
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
