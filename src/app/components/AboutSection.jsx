"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React, JavaScript, Next.js, Bootstrap, SASS, JQuery, bcrypt</li>
        <li>Node.js, Express, MongoDB, MySQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Web and Mobile Application Development</li>
        <li>Cornerstone International Community College, Vancouver, BC</li>
        <br></br>
        <li>Bachelor of British and American Studies Major</li>
        <li>Nagoya University of Foreign Studies, JAPAN</li>
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
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Me.JPG" alt="me" width={500} height={500} className="rounded-full" />
        <div>
          <h2 className="text-4xl font-bold mb-4 pt-10">About Me</h2>
          <p className="text-base md:text-lg">
            My name is Nami Miyashiro, born and raised in Japan. I'm a front-end developer based in Vancouver, Canada.<br></br>
            I like coding, designing, cats, and traveling aroud the world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}>
              {" "}Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;