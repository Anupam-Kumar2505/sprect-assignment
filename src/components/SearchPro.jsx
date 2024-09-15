const SearchPro = () => {
  return (
    <main className="mx-auto py-[100px] px-[8px] sm:px-[15px] md:w-[754px] xl:w-[1128px] bg-white ">
      <section className="xl:h-[190px] bg-[linear-gradient(90deg,#ff512f,#f09819)] rounded-2xl flex flex-col md:flex-row  px-[30px] py-[45px]">
        <div className="bg-[linear-gradient(86.51deg,#16222a,#3a6073)] rounded-full h-[100px] w-[100px] flex justify-center items-center mr-5 ">
          <img src="https://sprect.com/assets/images/sp_img.svg" />
        </div>
        <div>
          <div>
            <p className="font-gtwalsheimMedium text-white text-[30px]">
              ready to sprect? find your PRO today.
            </p>
          </div>
          <button className=" bg-white border-none px-10 py-[14px] text-black text-4 font-gtwalsheimRegular rounded-lg">
            search for PROs
          </button>
        </div>
      </section>
    </main>
  );
};
export default SearchPro;
