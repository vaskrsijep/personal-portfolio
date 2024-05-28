export default function ReviewCards() {
    return (
        <div className="w-full lg:h-[100vh] h-[150vh] pb-20 bg-fixed bg-zinc-100 flex lg:flex-row flex-col items-center lg:px-24 py-10 gap-4">
      <div className="card-container h-[55vh] lg:w-1/2 w-full px-5">
        <div className="card items-center justify-center rounded-xl w-full h-full bg-primary relative">
          <img
            className="lg:h-[4vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src="/images/flag-of-serbia.svg"
            alt="ochi_logo"
          />
          <div className="absolute bottom-[5%] left-[5%] rounded-2xl px-4 py-1 tracking-tight text-accent  outline outline-1 outline-accent">
            ©️2019-2022
          </div>
        </div>
      </div>
      <div className="card-container flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full lg:h-[55vh] h-[90vh] px-5">
        <div className="card rounded-xl lg:w-1/2 w-full h-full bg-[#192826] relative">
          <img
            className="lg:h-[5vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src="/images/flag-of-serbia.svg"
            alt="clutch logo"
          />
          <div className="absolute bottom-[6%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-white  uppercase outline outline-1 outline-white">
            Rating 5.0 on Clutch
          </div>
        </div>
        <div className="card relative rounded-xl lg:w-1/2 w-full h-full bg-[#192826]">
          <img
            className="lg:h-[5vw] h-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src="/images/flag-of-serbia.svg"
            alt="futur logo"
          />
          <div className="absolute bottom-[6%] lg:left-[10%] left-[5%] rounded-2xl px-4 py-1 lg:text-[1vw] tracking-tight text-white  uppercase outline outline-1 outline-white">
            Business Alumni
          </div>
        </div>
      </div>
    </div>
    )
}