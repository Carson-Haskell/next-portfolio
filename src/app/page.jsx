import AnimatedHero from "@/components/AnimatedHero";
import GradientText from "@/components/GradientText";
import AnimationProvider from "@/components/AnimationProvider";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
      {/* IMAGE CONTAINER  */}
      <AnimatedHero animationVariant="default" />
      {/* TEXT CONTAINER  */}

      <AnimationProvider
        className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* TITLE  */}
        <h1 className="text-4xl font-bold md:text-6xl text-slate-600">
          Brilliant & Elegant Slogan, Will Really Capture Attention.
        </h1>
        {/* DESCRIPTION  */}
        <p className="md:text-xl">
          Hi, I&apos;m <GradientText>Carson</GradientText>, a passionate and
          dedicated software developer with a strong foundation in front-end
          frameworks such as <GradientText>React</GradientText>,{" "}
          <GradientText> Nextjs </GradientText>,{" "}
          <GradientText> Svelte </GradientText>, and{" "}
          <GradientText> SvelteKit </GradientText>. I&apos;m a quick learner
          with a keen eye for detail and a collaborative mindset to contribute
          effectively to innovative projects.
        </p>
        {/* BUTTONS  */}
        <div className="flex w-full gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-4 text-white transition duration-300 bg-black rounded-md shadow-lg ring-1 ring-black hover:scale-95 active:scale-90 shadow-blue-300 hover:shadow-none"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-4 transition duration-300 rounded-md shadow-lg ring-1 ring-black hover:scale-95 active:scale-90 shadow-blue-300 hover:shadow-none"
          >
            Contact Me
          </Link>
        </div>
      </AnimationProvider>
    </div>
  );
};

export default Homepage;
