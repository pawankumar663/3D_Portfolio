import React from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
    return (
        <div id={"counter"} className={"padding-x-lg xl:mt-0 mt-32"}>
            <div className={"md:px-20 mx-auto grid-3-cols"}>
                {counterItems.map((item) => (
                    <div key={item.label} className={"bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"}>
                        <div  className={"counter-number text-white text-8xl font-bold mb-0"}>
                            <CountUp suffix={item.suffix} end={item.value}/>
                        </div>
                        <div className={"text-white-50 text-lg"}>
                            {item.label}
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
export default AnimatedCounter
