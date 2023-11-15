'use client'
import React from 'react'
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log('Message sent');
    }
  }

  return (
    <section className="my-12 md:my-12 py-24 gap-4" id="contact">
      {/* use for the section later:   grid md:grid-cols-1 */}
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10 mx-auto">
        <h5 className="text-xl font-bold my-2 text-center">Let's connect</h5>
        <p className="text-[#ADB7BE] text-center">
        {/* use for p later:   max-w-md */}
          Feel free to reach out if you're interested in working together or playing online games! 
        </p>
        <p className="text-center mx-auto my-4"><a href="mailto:sunset.libra73@gmail.com">sunset.libra73@gmail.com</a></p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/maxin73?tab=repositories">
            <Image src={GithubIcon} alt="github" width={30} height={30}/>
          </Link>
          <Link href="https://www.linkedin.com/in/nami-miyashiro-901720247/">
            <Image src={LinkedinIcon} alt="linkedin" width={30} height={30}/>
          </Link>
        </div>
      </div>
      {/* <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 font-medium">Your email</label>
            <input 
              name="email"
              type="email" 
              id="email" 
              required 
              className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
              placeholder="sample@gmail.com"
          />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 font-medium">Subject</label>
            <input 
              name="subject"
              type="text" 
              id="subject" 
              required 
              className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              required 
              className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button type="submit" className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  )
}

export default EmailSection