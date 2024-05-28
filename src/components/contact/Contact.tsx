"use client"
import { Facebook, GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative bg-primary text-muted">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-primary blur-[200px] opacity-15 -z-0"></div> */}
        <motion.div initial={{opacity: 0}}  whileInView={{opacity: 1}} transition={{duration: 1, delay: 1}} className="absolute top-[50%] left-[0px] translate-x-[0%] translate-y-[-50%] bg-accent text-accent-foreground rounded-r-3xl shadow-secondary shadow-[1px_1px_5px_rgba(0,0,0,0.1)] z-0 cursor-pointer">
          <div>
            <div className="flex items-center justify-center gap-3 flex-col px-3 py-3">
              <a target="_blank" href="https://www.linkedin.com/in/vaskezdes">
              <LinkedinIcon className="w-6 h-6" />
              </a>
              <a target="_blank" href="https://github.com/vaskrsijep">
              <GithubIcon className="w-6 h-6" />
              </a>
              {/* <Twitter className="w-6 h-6" /> */}
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center flex-col gap-10 relative z-10">
          <h1 className="md:text-9xl text-5xl">
            Let<span className="text-accent">&#39;</span>s work together
          </h1>
          <span className="w-full h-[1px] bg-secondary"></span>
          <div className="flex items-center justify-center gap-5 text-2xl font-thin md:flex-row flex-col">
            <a
              href="mailto:panicvaskrsije@gmailcom"
              className="py-5 px-10 rounded-full border relative border-accent text-accent hover:border-muted"
            >
              panicvaskrsije@gmail.com
            </a>
            <a
              href="tel:+381637360728"
              className="py-5 px-10 rounded-full border border-accent text-accent relative hover:border-muted"
            >
              +381 63 73 60 728
            </a>
            <a
              href="/contact"
              className="py-5 px-10 rounded-full border border-accent text-accent relative hover:border-muted"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex items-start justify-start gap-1 flex-col font-thin p-[10px]">
        <p>
            Version
        </p>
        <p>
            5/2024
        </p>
      </div> */}
    </div>
  );
}
