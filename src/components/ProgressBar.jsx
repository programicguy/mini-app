// Main Progress Bar Component
export const ProgressBar = ({
  progress = 70,
  gradientFrom = "#01A6FDB2",
  gradientTo = "#015ACEB2",
  width = "full", 
  height = "6", 
  currentLevel = 7,
}) => {
  return (
    <div
      className={`relative bg-[#D9D9D940] rounded-full w-${width} h-${height}`}
    >
      <div
        className="bg-gradient-to-r rounded-full h-full transition-all duration-500"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <span
        className="absolute -top-2 text-sm font-medium text-white bg-[#D9D9D940] px-5 py-3 rounded-full transition-all duration-500"
        style={{
          left: `${progress}%`,
          transform: "translateX(-50%)",
        }}
      >
        {currentLevel}
      </span>
    </div>
  );
};
