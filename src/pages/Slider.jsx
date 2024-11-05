import React from "react";
import image from "../assets/2d35b83df65a5b188eed0847f0cabdc5.jpg"

// const featuredProducts = [
//      "/assets/smartphone-screen-spending-categories_1108533-71374.jpg",
//     "/assets/713a2f0c10b357e06b85162bdbb9d783.jpg",
//     "/assets/e02b030a7c301e43ca000ef677270de2.jpg",
//    "/assets/portrait-happy-young-woman_23-2149309308.avif"
// ];

// export default function Slider() {
//     return (
//         <div className='w-[50%] select-none relative h-full bg-blue-200'>
//         <img src={featuredProducts[0]} alt=""/>
//         <div className="absolute "></div>
//     </div>
//     )
// }

const Slider = () => {
    return(
        <div className='w-[50%] select-none relative h-[100svh] bg-blue-200 tablet:hidden'>
             <img src={image} className="w-full h-full "/>
        </div>
    )
}
export default Slider;