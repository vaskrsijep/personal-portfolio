"use client";
import Image from "next/image";

export default function ReviewCards() {
    return (
        <div className="w-full lg:h-[100vh] h-[150vh] pb-20 bg-fixed flex lg:flex-row flex-col items-center lg:px-24 py-10 gap-4">
      <div className="card-container h-[55vh] lg:w-1/2 w-full px-5">
        <div className="card items-center justify-center rounded-xl w-full h-full bg-primary relative">
          <div className="lg:h-[15vw] w-[15vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] relative">
            <Image
              className="object-contain"
              src="/images/jss.png"
              alt="js logo"
              fill
              sizes="15vw"
            />
          </div>
          <div className="absolute bottom-[5%] left-[5%] rounded-2xl px-4 py-1 tracking-tight text-accent  outline outline-1 outline-accent">
            ©2015-2024
          </div>
        </div>
      </div>
      <div className="card-container flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full lg:h-[55vh] h-[90vh] px-5">
        <div className="card rounded-xl lg:w-1/2 w-full h-full bg-accent relative">
          <div className="lg:h-[3vw] lg:w-[3vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] relative">
            <Image
              className="object-contain"
              src="/images/univerzitet-singidunum-red.png"
              alt="singidunum logo"
              fill
              sizes="3vw"
            />
          </div>
          <div className="absolute bottom-[6%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-black   uppercase outline outline-1 outline-black">
            2020-2024
          </div>
          <div className="absolute md:bottom-[15%] bottom-[17%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-black font-medium  uppercase outline outline-1 outline-black">
            Software Engineer
          </div>
        </div>
        <div className="card relative rounded-xl lg:w-1/2 w-full h-full bg-accent">
          <div className="lg:h-[3vw] lg:w-[3vw] h-16 w-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] relative">
            <Image
              className="object-contain"
              src="/images/itacademy.png"
              alt="itacademy logo"
              fill
              sizes="(max-width: 768px) 64px, 3vw"
            />
          </div>
          <div className="absolute md:bottom-[15%] bottom-[17%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-black font-medium  uppercase outline outline-1 outline-black">
            PHP Developer
          </div>
          <div className="absolute bottom-[6%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-black  uppercase outline outline-1 outline-black">
            2017
          </div>
        </div>
      </div>
    </div>
    )
}