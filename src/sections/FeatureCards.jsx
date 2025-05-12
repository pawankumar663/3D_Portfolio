import React from 'react'
import {abilities} from "../constants/index.js";

const FeatureCards = () => {
    return (
        // <div className={"w-full padding-x-lg"}>
        //     <div className={"mx-auto grid-3-cols"}>
                <div className={"md:my-20 my-10 relative"}>
                    <div className={"gradient-edge"}/>
                    <div className={"gradient-edge"}/>
                    <div className={"marquee h-52"}>
                        <div className={"marquee-box md:gap-12  gap-5"}>
                {abilities.map(({imgPath,title,desc}) => (
                    <div key={title} className={"card-border rounded-xl p-8 flex flex-col gap-4"}>
                        <div className={"size-14 flex items-center justify-center"}>
                            <img src={imgPath} alt={title}/>
                        </div>
                        <h3 className={"text-white text-2xl font-semibold"}>{title}</h3>
                        <p className={"text-white-50 text-lg"}>{desc}</p>
                    </div>
                ))}
                            </div>
                    </div>
            </div>
        // </div>
    )
}
export default FeatureCards
