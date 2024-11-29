import React from "react";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="font-normal mt-[80px] text-[40px] leading-[100%] text-white align-cap">
      {text}
    </h1>
  );
};

export default Title;
