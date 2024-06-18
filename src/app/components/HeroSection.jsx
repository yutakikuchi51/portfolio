"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {

    const DownloadPDF = () => {
        fetch("/assets/Yuta Kikuchi-resume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);

                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "Yuta-Kikuchi-resume.pdf";
                    alink.click();
            });
        });
    }
    return (
        <section>
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-12">
                <div className="place-self-center text-center sm:text-left  col-span-12 sm:col-span-6 sm:order-1 order-2">
                    <h1 className="text-[#2c2319] mb-4 text-4xl sm:text-5x; lg:text-6xl font-extrabold mt-5">
                        <span className="bg-clip-text text-[#95a293]">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Yuta Kikuchi",
                                1000,
                                "Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#2c2319] text-base sm:text-lg mb-3 lg:text-xl">
                        A recent graduate of Software Development program at Southern Alberta Institute of Technology, seeking a real-world experience to utilize my skills and knowledge.
                    </p>
                    <div>
                        {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#95a293] hover:bg-slate-200 text-white">
                            Hire me
                        </button> */}
                        <button onClick={DownloadPDF} className="px-1 py-1 w-full sm:w-fit rounded-full bg-wood-texture hover:bg-slate-800 text-white  mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </button>
                    </div>
                </div>
                
                <div className="place-self-center ml-3 mt-4 lg:mt-0  col-span-12 sm:col-span-6 sm:order-2 order-1">
                    <div className="rounded-full bg-wood-texture w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            width={400}
                            height={400}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;