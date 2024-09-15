const Footer = () => {
  return (
    <main className="bg-[linear-gradient(86.51deg,#16222a,#3a6073)] h-full w-full ">
      <main className="mx-auto pt-[50px]  px-[15px] md:w-[754px]  xl:w-[1128px] ">
        <div className="mb-[50px]">
          <img
            src="https://sprect.com/assets/images/logo_home.svg"
            className="mb-[26px] -ml-[6px]"
          />
          <p className="font-gtwalsheimRegular text-base text-white text-justify max-w-[500px]">
            sprect is building a global community of people to connect you with
            everyone quickly, easily and privately. join us in our mission to
            super connect the world.
          </p>
        </div>
        <section className="flex flex-col lg:flex-row ">
          <div className="px-[15px] mb-[60px] lg:mb-[24px]">
            <p className="text-[30px] font-gtwalsheimBold text-white mb-6 ">
              stay updated. no spam.
            </p>
            <form className="relative">
              <input
                className="bg-transparent border-[1px] pl-4 pb-1 border-[#507689] w-full h-11 rounded-lg "
                placeholder="enter email address"
              />
              <div className="absolute text-white bg-[linear-gradient(90deg,#ff512f,#f09819)] py-[6px] px-[15px] rounded-lg right-1 top-1">
                Submit
              </div>
            </form>
          </div>
          <ul className="px-[15px] lg:px-0 lg:pl-[126px] text-white">
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">about</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                get to know us
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">careers</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                grow with us
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">blog</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                our opinion on stuff
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">contact</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                what's on your mind?
              </span>
            </li>
          </ul>
          <ul className="px-[15px] lg:px-0 lg:pl-[91px] text-white">
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">press</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                what are we upto
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">news</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                we got covered
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">terms</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                long but important
              </span>
            </li>
            <li className="pb-5">
              <span className="font-gtwalsheimMedium mr-[13px]">privacy</span>
              <span className="font-gtwalsheimRegular text-[#c1ccd1]">
                privatest (ok,most private)
              </span>
            </li>
          </ul>
        </section>
        <footer className="flex flex-col lg:flex-row justify-between pt-5 pb-[30px] border-t-[1px] border-[#507689]">
          <p className="text-[#c1ccd1] mb-[15px]">© sprect</p>
          <p className="flex mb-[15px]">
            made with
            <span>
              <img
                alt="heart icon"
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                src="https://sprect.com/assets/images/heart.svg"
                className="text-transparent pt-[1px] mx-1"
              />
            </span>
            in India, for the world.
          </p>
          <div className="flex space-x-3 text-[#c1ccd1] ">
            <a
              className="ml-0 text-transparent"
              href="https://www.linkedin.com/company/sprectdotcom/ "
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                alt="LinkedIn Icon"
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                src="https://sprect.com/assets/images/linkedin.svg"
                className=" text-transparent"
              />
            </a>
            <a
              href="https://www.facebook.com/sprectdotcom"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                alt="Facebook icon"
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                src="https://sprect.com/assets/images/facebook.svg"
                className="text-transparent"
              />
            </a>
            <a
              href="https://x.com/sprectdotcom"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                alt="twitter icon"
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                src="https://sprect.com/assets/images/twitter.svg"
                className="text-transparent"
              />
            </a>
            <a
              href="https://www.instagram.com/sprectdotcom/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                alt=""
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                data-nimg="1"
                src="https://sprect.com/assets/images/instagram.svg"
                className="text-transparent"
              />
            </a>
          </div>
        </footer>
      </main>
    </main>
  );
};
export default Footer;
