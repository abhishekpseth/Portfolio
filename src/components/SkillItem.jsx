import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const SkillItem = ({ skill, rating }) => {
  return (
    <div className="flex gap-[8px]">
      <FaCircleCheck className="text-textLight"/>
      <div className="flex flex-col">
        <h5 className="font-bold h-[16px] flex items-center">{skill}</h5>
        <h6 className="">{rating}</h6>
      </div>
    </div>
  );
};

export default SkillItem;
