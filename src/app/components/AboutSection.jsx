"use client"
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>React</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Southern Alberta Institute of Technology, Calgary</li>
                <li>Meiji Gakuin University, Tokyo, Japan</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return <section className="text-[#2c2319]">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <div className="bg-white p-5">
                <Image src="/images/about-me.png" alt="image of man" width={500} height={500} />
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-[#2c2319] mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                    Over 2 years of study, I learned software development both theoretically and 
                    practically, with a special focus on building web-based applications using JavaScript 
                    and React. In addition, I have academic experience in Python, Java, SQL, Node.js, and 
                    GitHub. I am a constant learner and a team player, always finding potential for 
                    growth. Check out the Project section below, I will keep adding personal projects further. 
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>    
                    <TabButton
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>

    </section>;
};

export default AboutSection;