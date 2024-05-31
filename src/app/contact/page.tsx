"use client";
import Magnetic from "@/components/Magnetic/Magnetic";
import RoundedButton from "@/components/button/Button";
import Link from "next/link";
import {motion} from 'framer-motion'
import Contact from "@/components/contact/Contact";
import { useState } from "react";

export default function Contactt() {
  const [success, setSuccess] = useState(false);
  const [formValidate, setFormValidate] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();

      setSuccess(true);

      event.target.reset();
    } catch (err) {
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {
        success ? <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black text-white z-50 opacity-100">
        <span className="absolute top-10 right-10 cursor-pointer rounded-[50%] border py-5 px-7 text-white text-6xl m-0 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setSuccess(false)} >&times;</span>
        <div className="flex items-center justify-center w-full h-full flex-col gap-10">
          <h1 className="md:text-9xl text-5xl font-medium">Thank you!</h1>
          <p className="opacity-50 text-xl">I will get back to you shortly.</p>
        </div>
      </div> : 
      <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black text-white -z-50 opacity-0">
      <span className="absolute top-10 right-10 cursor-pointer rounded-[50%] border py-5 px-7 text-white text-6xl m-0 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setSuccess(false)} >&times;</span>
      <div className="flex items-center justify-center w-full h-full flex-col gap-10">
        <h1 className="md:text-9xl text-5xl font-medium">Thank you!</h1>
        <p className="opacity-50 text-xl">I will get back to you shortly.</p>
      </div>
    </div>
      }
      <div className="w-full md:py-40 pt-40">
        <div className="flex items-start justify-between gap-10 w-full h-full md:px-10 md:py-40 py-0 px-5 md:flex-row flex-col">
          <div className="flex items-center md:justify-start justify-center w-full h-full md:gap-0">
            <h1 className="md:text-9xl text-5xl font-medium">Contact</h1>
          </div>
          <div className="w-full h-full flex items-center justify-center md:gap-0 gap-10">
            <p className="text-2xl font-thin w-80">
              Fill out the form below or send us an email at{" "}
              <a
                href="mailto:panicvaskrsije@gmail.com"
                className="text-primary font-medium"
              >
                panicvaskrsije@gmail.com{" "}
              </a>
              to set up an introductory call. Let&apos;s discuss how I can help bring
              your ideas to life.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:py-0 py-10">
          <h2 className="md:text-9xl text-5xl font-normal">
            Let&apos;s get started...
          </h2>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
                    <h1 className="text-5xl md:px-10 px-5 md:pb-20 pb-10">
                        Introduce yourself
                    </h1>
                </div>
      <div className="flex items-start justify-start gap-10 md:w-[70%] w-full mx-auto h-full pb-20 px-2">
        
        <div className="flex items-start justify-center w-full h-full gap-10 md:flex-row flex-col">
            
          <div className="w-full h-full mx-auto flex items-start justify-start rounded-3xl gap-10 px-5">

            <form onSubmit={handleSubmit} className="w-full h-full relative">
              <div className="w-full flex md:flex-row gap-5 justify-between items-start">
                <div className="w-full flex flex-col">
                  <div className="w-full border-t border-b py-5 px-5">
                    <label htmlFor="form-name">Full name* </label>
                    <input
                      id="form-name"
                      autoComplete="name"
                      maxLength={50}
                      name="name"
                      placeholder="John Doe"
                      className="text-black"
                    />
                  </div>
                  <div className="w-full border-t border-b py-5 px-5">
                    <label htmlFor="form-email"> Email*</label>
                    <input
                      id="form-email"
                      required
                      autoComplete="email"
                      maxLength={80}
                      name="email"
                      placeholder="youremail@example.com"
                      type="email"
                      className="text-black"
                    />
                  </div>
                  <div className="w-full border-t border-b py-5 px-5">
                    <label htmlFor="form-company"> Company*</label>
                    <input
                      id="form-company"
                      required
                      autoComplete="company"
                      maxLength={80}
                      name="company"
                      placeholder="Company Name"
                      type="text"
                      className="text-black"
                    />
                  </div>
                  <div className="w-full border-t border-b py-5 px-5">
                    <label htmlFor="form-message"> Message: </label>
                    <textarea
                      id="form-message"
                      required
                      name="message"
                      className="text-black"
                      placeholder="Write your message here"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="absolute bottom-10 right-10">
                <RoundedButton>
                  <p className="text-2xl relative">Send it!</p>
                </RoundedButton>
              </button>
            </form>
          </div>
          <div className="w-[40%] flex items-start justify-end flex-col gap-10 rounded-3xl md:px-0 px-10">
            <div className="flex items-start justify-start flex-col gap-1 text-2xl">
              <h2 className="text-lg opacity-50 uppercase font-normal ">
                Contact details
              </h2>
              <Magnetic>
                <a href="mailto:panicvaskrsije@gmailcom">
                  panicvaskrsije@gmailcom
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+381 63 73 60 728">+381 63 73 60 728</a>
              </Magnetic>
            </div>
            <div className="flex items-start justify-start flex-col gap-1 text-2xl">
              <h2 className="text-lg opacity-50 uppercase font-normal">
                Socials
              </h2>
              <Magnetic>
                <a target="_blank" href="www.instagram.com/v.panic_">Instagram</a>
              </Magnetic>
              <Magnetic>
                <a target="_blank" href="https://www.linkedin.com/in/vaskezdes/">Linkedin</a>
              </Magnetic>
              <Magnetic>
                <a target="_blank" href="https://www.facebook.com/vaskrsija.panic.5/">Facebook</a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
      <Contact/>
      </div>
    </div>
  );
}
