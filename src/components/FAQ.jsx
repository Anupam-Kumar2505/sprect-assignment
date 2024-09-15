const FAQ = () => {
  return (
    <main className="bg-gray-100 pt-[50px] pb-[100px] w-full ">
      <div className="mx-auto px-[8px] sm:px-[15px] md:w-[754px] xl:w-[1128px] ">
        <div className="mb-12">
          <h2 className="text-[40px] text-[#212529] font-medium font-gtwalsheimBold mb-2 w-full ">
            FAQs
          </h2>
          <p className="text-sm text-[#507689] font-gtwalsheimRegular font-normal text-[15px]">
            find answers to frequently asked questions
          </p>
        </div>
        <h1 className="text-[28px] text-[#212529] font-medium font-gtwalsheimBold mb-[30px] w-full">
          general
        </h1>
        <section>
          <details className="collapse bg-white mb-5">
            <summary className="collapse-title text-xl text-black font-gtwalsheimMedium font-medium">
              how can sprect help me?
            </summary>
            <div className="collapse-content text-[#3c4349] mb-4 font-gtwalsheimRegular font-normal">
              <p>
                sprect is short for super connect. we enable you to directly
                connect with anyone for a one-on-one secure and private video
                interaction, to get the knowledge and inspiration you need to
                get ahead.
                <br />
                <br />
                whether you are a student seeking career guidance or a startup
                founder looking for advice (and everything in between), sprect
                will make it easy and quick for you to directly talk to the
                right person who may be outside your social/professional circle.
                <br />
                <br />
                no more cold emails, InMails,begging for introductions and
                countless hours of waiting.
              </p>
            </div>
          </details>
          <details className="collapse bg-white mb-5 ">
            <summary className="collapse-title text-xl text-black font-gtwalsheimMedium font-medium">
              how does it work?
            </summary>
            <div className="collapse-content mb-4 text-[#3c4349]  font-gtwalsheimRegular font-normal">
              <p>
                it’s super easy. search for a PRO by name, skills, profession,
                expertise, or university. if you like, filter results by
                language, location, and more. check out PROs profiles and pick a
                date/time on their calendar. pay PRO’s fees and you are set.
                we’ll send you a reminder before the meeting with a private link
                for the call. join the call and voilà!
              </p>
            </div>
          </details>
          <details className="collapse bg-white mb-5">
            <summary className="collapse-title text-xl text-black font-gtwalsheimMedium font-medium">
              how can I find the right PRO on sprect?
            </summary>
            <div className="collapse-content text-[#3c4349] mb-4 font-gtwalsheimRegular font-normal">
              <p>
                once you search, you will see a number of results that match
                your criteria. you can filter results to narrow them down to who
                you like. open each PRO’s profile that interests you and read
                their area of expertise and accomplishments.
              </p>
            </div>
          </details>
          <details className="collapse bg-white mb-5">
            <summary className="collapse-title text-xl text-black font-gtwalsheimMedium font-medium">
              can I send questions to a PRO before the call?
            </summary>
            <div className="collapse-content text-[#3c4349] mb-4 font-gtwalsheimRegular font-normal">
              <p>
                yes. when you pick a call time, you will be able to share your
                requirements and questions with the PRO. If the PRO believes
                that s/he is qualified to help you, they will accept your call.
                If they are unable to help, they will reject your call request.
              </p>
            </div>
          </details>
          <details className="collapse bg-white mb-5">
            <summary className="collapse-title text-xl text-black font-gtwalsheimMedium font-medium">
              what is sprect's refund policy?
            </summary>
            <div className="collapse-content text-[#3c4349] mb-4 font-gtwalsheimRegular font-normal">
              <p>
                you can cancel a call before a PRO accepts it, to automatically
                receive a refund. your refund, minus any payment gateway fees,
                if applicable, will be returned to you using the same payment
                method.
                <br />
                <br />
                in the unfortunate event that a PRO is unable to make it for the
                call, you will automatically receive a full refund.
              </p>
            </div>
          </details>
        </section>
        <a
          href="https://sprect.com/s/faq/"
          className="underline w-full  ml-auto float-right text-right text-lg text-black"
        >
          read more FAQs
        </a>
      </div>
    </main>
  );
};

export default FAQ;
