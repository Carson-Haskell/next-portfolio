import AnimationProvider from "@/components/AnimationProvider";

const Portfolio = () => {
  return (
    <AnimationProvider
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1>Contact</h1>
      </div>
    </AnimationProvider>
  );
};

export default Portfolio;
