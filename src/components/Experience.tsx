import type { experience } from "../types/types";

interface ExperienceProps {
  data: experience[];
}

function Experience({ data }: ExperienceProps) {
  return (
    <section className="py-16 px-4 w-full mx-auto bg-primary z-[0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aura  bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-9.5 top-2 bottom-0 w-0.5 bg-gradient-to-b from-aura  hidden md:block" />

          <div className="space-y-8">
            {data.map((exp, index) => (
              <div
                key={index}
                className="group relative flex flex-col md:flex-row md:items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-2 w-4 h-4 bg-aura rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform z-10" />

                {/* Card */}
                <div className="ml-0 md:ml-16 flex-1">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group-hover:border-purple-200">
                    {/* Company & Date */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-aura transition-colors">
                          {exp.company}
                        </h3>
                        {exp.done && (
                          <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                            ✓ Completed
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-lg whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    {/* Details */}
                    <ul className="space-y-3">
                      {exp.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-aura md:mr-3 md:mt-0.5 -translate-x-1/2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
