import type { Language } from "../types/types";

export default function Languages({ data }: { data: Language[] }) {
  return (
    <div className=" md:px-10  bg-gradient-to-t from-primary from-90% to-transparent backdrop-blur-lg flex flex-col gap-10 py-10  sticky top-0">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aura  bg-clip-text text-transparent">
        Languages
      </h2>
      {data?.map((item, itemIndex) => (
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
