const Investor = () => {
  return (
    <main className="bg-[#F9FAFB] pt-[50px] pb-[100px] w-full ">
      <main className="mx-auto pt-[50px] pb-[100px] px-[8px] sm:px-[15px] md:w-[754px] xl:w-[1128px]  flex flex-col justify-center items-center ">
        <h2 className="text-[40px] text-[#212529] font-medium font-gtwalsheimBold w-full leading-12 mb-2">
          our investors
        </h2>
        <div className="h-[287px]">
          <img
            src="https://sprect.com/assets/images/sidd.png"
            className="mx-auto h-[300px]"
          />
          <h2 className="text-[30px] text-[#212529] font-medium font-gtwalsheimBold leading-6 mt-3">
            Siddharth Shetty
          </h2>
          <div className="text-center">
            chief business development officer
            <br />
            ServiceChannel (NYSE: FTV)
          </div>
        </div>
      </main>
    </main>
  );
};
export default Investor;
