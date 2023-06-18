/* eslint-disable react/prop-types */
const LineGradient = ({ width = "w-full" }) => {
  return (
    <div className={`h-0.5 ${width} dark:bg-gradient-rainblue bg-black`} />
  );
};

export default LineGradient;
