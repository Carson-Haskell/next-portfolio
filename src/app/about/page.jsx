import AnimationProvider from "@/components/AnimationProvider";

const About = () => {
  return (
    <AnimationProvider
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* CONTAINER  */}
      <div className="">
        {/* TEXT CONTAINER  */}
        <div className="custom-container">
          {/* BIOGRAPHY  */}
          <div></div>

          {/* SKILLS  */}
          <div></div>

          {/* EXPERIENCE  */}
          <div></div>
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden"></div>
      </div>
    </AnimationProvider>
  );
};

export default About;
