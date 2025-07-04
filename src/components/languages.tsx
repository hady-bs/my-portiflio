import type { Language } from "../types/types";

export default function Languages({ data }: { data: Language[] }) {
  return (
    <div className=" md:px-10  bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10  sticky top-0">
      <div className="text-4xl text-center  text-primary-text animate-pulse">
        Languages
      </div>
      {data.map((item, itemIndex) => (
        <div
          className="relative rounded-3xl overflow-hidden py-5 md:w-full w-[90%] mx-auto  bg-secondry-text"
          key={itemIndex}
        >
          <div className="relative z-[1] text-center">{item.name}</div>
          <div
            className=" h-full absolute bg-white top-0"
            style={{ width: item.score }}
          ></div>
        </div>
      ))}
    </div>
  );
}
