import AnimationProvider from "@/components/AnimationProvider";
import ScrollSvg from "./ScrollSvg";
import { SKILLS } from "./constants";

const About = () => {
  return (
    <AnimationProvider
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* CONTAINER  */}
      <div className="h-full overflow-scroll">
        {/* TEXT CONTAINER  */}
        <div className="flex flex-col gap-24 custom-container md:gap-32 lg:gap-48 xl:gap-64">
          <Biography />

          <Skills />

          <Experience />
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden"></div>
      </div>
    </AnimationProvider>
  );
};

const Biography = () => {
  return (
    <div className="flex flex-col justify-center gap-12">
      <h1 className="text-2xl font-bold">BIOGRAPHY</h1>

      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
        quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis
        numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel
        doloremque numquam quam nihil.
      </p>

      <span className="italic text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>

      <ScrollSvg />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col justify-center gap-12">
      <h1 className="text-2xl font-bold">SKILLS</h1>

      <div className="flex flex-wrap gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="p-2 text-white transition-all duration-200 rounded-md cursor-pointer text-md bg-slate-600 ac active:rotate-6 hover:-translate-y-1 hover:shadow-xl"
          >
            {skill.title}
          </div>
        ))}
      </div>

      <ScrollSvg />
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col justify-center gap-12 pb-48">
      <h1 className="text-2xl font-bold">EXPERIENCE</h1>
      <div>
        {/* LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3">
            <div className="p-5 font-semibold text-white rounded-b-lg bg-slate-600 rounded-s-lg">
              Lead Front-end Engineer
            </div>
            <div className="p-3 text-sm italic">
              I built things with code, and managed things.
            </div>
            <div className="p-3 text-sm font-semibold text-blue-400">
              2023 - Present
            </div>
            <div className="p-2 ml-3 text-sm font-semibold rounded bg-slate-600/10 w-fit">
              Synesis
            </div>
          </div>
          {/* CENTER */}
          <div className="flex justify-center w-1/6">
            {/* LINE */}
            <div className="relative w-1 h-full bg-gray-600 rounded">
              {/* CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full bg-slate-600 ring-4 ring-blue-400 -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3"></div>
        </div>
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3"></div>
          {/* CENTER */}
          <div className="flex justify-center w-1/6">
            {/* LINE */}
            <div className="relative w-1 h-full bg-gray-600 rounded">
              {/* CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full bg-slate-600 ring-4 ring-blue-400 -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3">
            {" "}
            <div className="p-5 font-semibold text-white rounded-b-lg bg-slate-600 rounded-s-lg">
              Software Engineer | Co-founder
            </div>
            <div className="p-3 text-sm italic">I built things with code</div>
            <div className="p-3 text-sm font-semibold text-blue-400">
              2023 - Present
            </div>
            <div className="p-2 ml-3 text-sm font-semibold rounded bg-slate-600/10 w-fit">
              TurboMiles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
