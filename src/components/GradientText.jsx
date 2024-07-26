const GradientText = ({ children }) => {
  return (
    <span className="inline-block font-bold text-transparent transition duration-300 cursor-default bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text hover:scale-x-105">
      {children}
    </span>
  );
};

export default GradientText;
