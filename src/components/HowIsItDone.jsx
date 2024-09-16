const HowIsItDone = () => {
  return (
    <main className="mx-auto pt-[50px] pb-[100px] px-[8px] sm:px-[15px] md:w-[754px] xl:w-[1128px] bg-white ">
      <h2 className="text-[40px] text-[#212529] font-medium font-gtwalsheimBold w-full leading-6 mb-20">
        how is it done?
      </h2>
      <div className="grid grid-cols-3  gap-10">
        <section className="space-y-[30px] hidden xl:block ">
          <div className=" p-4 rounded-lg">
            <img
              src="https://sprect.com/assets/images/search1.svg"
              alt="Search"
              className="h-[200px] w-full mx-auto"
            />
          </div>
          <div className=" p-4 rounded-lg ">
            <img
              src="https://sprect.com/assets/images/search2.svg"
              alt="Schedule"
              className="h-[200px] mx-auto"
            />
          </div>
          <div className=" p-4 rounded-lg">
            <img
              src="https://sprect.com/assets/images/search3.svg"
              alt="Connect"
              className="h-[200px] mx-auto"
            />
          </div>
        </section>
        <section className="space-y-[30px] ">
          <div className="  rounded-lg  flex justify-center items-start  xl:items-center xl:h-[232px] h-[380px] relative ">
            <div className="z-[2] h-[60px] w-[60px] font-gtwalsheimRegular rounded-full bg-[linear-gradient(90deg,#ff512f,#f09819)] flex justify-center items-center text-[30px] text-white font-normal ">
              <span>01</span>
            </div>
            
            <img src="https://sprect.com/_next/static/media/before-one.914792d2.svg" className="absolute top-[10px] xl:top-[100px] w-[44px] h-[400px] xl:h-[296px] "/>
          </div>
          <div className="  rounded-lg  flex justify-center  xl:items-center xl:h-[232px] h-[380px] relative">
            <div className="z-[2] h-[60px] w-[60px] font-gtwalsheimRegular rounded-full bg-[linear-gradient(90deg,#ff512f,#f09819)] flex justify-center items-center text-[30px] text-white font-normal">
              <span>02</span>
            </div>
            <img src="https://sprect.com/_next/static/media/before-one.914792d2.svg" className="absolute top-[10px] xl:top-[100px] w-[44px] h-[400px] xl:h-[296px] "/>
          </div>
          <div className="  rounded-lg  flex justify-center  xl:items-center h-[232px]">
            <div className="z-[2] h-[60px] w-[60px] font-gtwalsheimRegular rounded-full bg-[linear-gradient(90deg,#ff512f,#f09819)] flex justify-center items-center text-[30px] text-white font-normal">
              <span>03</span>
            </div>
          </div>
        </section>
        <section className="space-y-[30px] xl:col-span-1 col-span-2  flex flex-col justify-around ">
          <div className="bg-white  p-5 rounded-[18px]   shadow-xl max-w-[350px]">
            <div className=" items-center mb-4">
              <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold   text-[26px]">
                search
              </h3>
            </div>
            <div className="h-[200px] p-4 rounded-lg xl:hidden">
              <img
                src="https://sprect.com/assets/images/search1.svg"
                alt="Search"
                className=" mx-auto"
              />
            </div>
            <p className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px]  list-disc mb-4 ">
              find PROs by name, skills, profession, or university. filter by
              language, location and more.
            </p>
          </div>
          <div className="bg-white  p-5 rounded-[18px] shadow-xl   max-w-[350px]">
            <div className=" items-center mb-4">
              <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold   text-[26px]">
                schedule & pay
              </h3>
            </div>
            <div className=" h-[200px] p-4 rounded-lg xl:hidden">
              <img
                src="https://sprect.com/assets/images/search2.svg"
                alt="Search"
                className="h-full mx-auto"
              />
            </div>
            <p className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] list-disc mb-4 ">
              pick your preferred date/time/duration and make PROs payment.
              we'll remind you before the meeting.
            </p>
          </div>
          <div className="bg-white  p-5 rounded-[18px] shadow-xl   max-w-[350px]">
            <div className=" items-center mb-4">
              <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold   text-[26px]">
                super connect
              </h3>
            </div>
            <div className=" h-[200px] p-4 rounded-lg xl:hidden">
              <img
                src="https://sprect.com/assets/images/search3.svg"
                alt="Search"
                className=" h-full mx-auto"
              />
            </div>
            <p className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px]  list-disc mb-4 ">
              meet online at the scheduled time and video chat about anything
              you want.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HowIsItDone;
