import React from "react";

const Button = ({ 
  value, 
  bgColor = "bg-white/80",   
  width = "w-[2.8rem] md:w-[3.2rem] ", 
  height = "h-[2.8rem] md:h-[3.2rem]", 
  textColor = "text-black",
  text = "lg:text-2xl",
  onClick
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={` ${width} ${height} ${textColor} ${text} mx-1 my-[1px]  rounded-3xl ${bgColor}`}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;

