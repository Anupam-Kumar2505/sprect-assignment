const WhyUs = () => {
  return (
    <main className="bg-gray-100 pt-[50px] pb-[100px] w-full ">
      <div className="mx-auto px-[8px] sm:px-[15px] md:w-[754px] xl:w-[1128px] ">
        <h2 className="text-[40px] text-[#212529] font-medium font-gtwalsheimBold mb-8 w-full ">
          why us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-[350px_350px] xl:grid-cols-[350px_350px_350px] gap-[16px] sm:gap-[24px] justify-items-center">
          <section className="space-y-[30px] w-full  ">
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="/src/assets/nopayment.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold text-[17px]  sm:text-[26px]">
                  0 platform fee*
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-5 list-disc mb-4 ">
                <li className="mb-[2px]">yes you heard that right</li>
                <li className="mb-[2px]">
                  no added burden to your connections
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/directory.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  expansive directory
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] md:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">reach PROs across industries</li>
                <li className="mb-[2px]">can't find someone? let us know</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/language.svg" className="h-full" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  speak your language
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">PROs speak your native language</li>
                <li className="mb-[2px]">
                  English, Gujarati, Hindi, Tamil & more
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-0 xl:mt-[70px] space-y-[30px] w-full">
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/sheild-done.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  end-to-end encryption
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">not even sprect can hear you!</li>
                <li className="mb-[2px]">your own private room</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/iconvideo.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  flexible meets
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">10 min meet-n-greet</li>
                <li className="mb-[2px]">or pick your choice of duration</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px]">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/open_in_browser.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  meet in browser
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">meet directly in browser</li>
                <li className="mb-[2px]">no app to download</li>
              </ul>
            </div>
          </section>
          <section className="mt-0 xl:mt-[140px] xl:space-y-[30px] w-full  col-span-2 xl:col-span-1 xl:block grid gap-4 grid-cols-2 justify-items-center ">
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px] w-full">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/pro-set.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  quick dispute fixes
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">PRO payments held for 48 hours</li>
                <li className="mb-[2px]">
                  let us know if something didn't work
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px] w-full">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/securepayments.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  secure payments
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">industry standard payment security</li>
                <li className="mb-[2px]">automatic refunds on cancellations</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-[18px] shadow hover:shadow-xl min-h-[335px] sm:min-h-64 max-w-[350px] w-full">
              <div className=" items-center mb-4">
                <div className="w-10 h-10 mb-[30px] rounded-full mr-3">
                  <img src="src/assets/thumb_up_alt.svg" />
                </div>
                <h3 className="font-medium text-[#212529] mb-[15px] font-gtwalsheimBold  text-[17px]  sm:text-[26px]">
                  no commitments
                </h3>
              </div>
              <ul className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[10px] sm:text-[15px] pl-4 list-disc mb-[2px]">
                <li className="mb-[2px]">pay as you go</li>
                <li className="mb-[2px]">no lock-ins or long term contracts</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
