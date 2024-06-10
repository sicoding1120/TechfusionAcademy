import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const BtnNext = ({ reverse, onclick }: { reverse: boolean; onclick:any}) => {
  return (
      <button className={`button flex ${reverse === true ? "flex-row-reverse" : "flex-row"} border-[3px] border-transparent`} onClick={onclick}>
          <span className="text md:text-xl font-semibold capitalize">
          {/* <span className='w-full h-full absolute top-full bottom-0 bg-color-c1'></span> */}
              {reverse === true ? "previous" : "next"}
          </span> 
          {reverse === false ? <FaArrowRightLong className='arrow' /> : <FaArrowLeftLong className="arrow"/>}
    </button>
  );
}

export default BtnNext