import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">HMS /</span> Software Developer
          </p>
          <p className="text-gray-300">SEP 2022 - PRESENT / BUENOS AIRES</p>
        </div>
        <p className="text-gray-300 pt-5">
          At HMS, we are dedicated to providing comprehensive solutions for the efficient management of healthcare expenses, collaborating with Social Works and Prepaid Medicine. Our focus revolves around connectivity as a key facilitator, achieved through the development of a dynamic and flexible authorization center that manages health and administrative rules, seamlessly integrating with the entire industry's productive chain.
          <br />
          <br />
          In my professional role, I lead the design and development of customized dashboards for health insurance clients at HMS. My role involves creating an application aimed at facilitating immediate access to credentials and communication with healthcare providers. This application integrates notifications, access to the medical directory, and more, enhancing the overall customer experience. I oversee the development of these dashboards, ensuring they align with the specific needs of insurance companies and their affiliates.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Angular
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Ionic
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
      <br /> <br />
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">SIMPLESHOW /</span> Frontend Developer
          </p>
          <p className="text-gray-300">SEP 2022 - FEB 2023 / MIAMI</p>
        </div>
        <p className="text-gray-300 pt-5">
        Simpleshow is a company specialized in creating animated explainer videos. They offer services ranging from scriptwriting to producing animated videos to explain complex concepts in a simple and easily understandable way. Their videos are often used in educational, business, and marketing contexts to communicate ideas clearly and effectively.
          <br />
          <br />
          In my professional role, I have developed interactive online courses for renowned clients such as Mercedes and Philip Morris. I have collaborated closely with clients to thoroughly understand their project requirements and objectives. My ability to adapt and be flexible has been demonstrated in the successful execution of a variety of projects for different clients, allowing me to gain exposure to diverse industries and challenges. I worked closely with a team of developers to ensure high quality and timely delivery of online courses.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          {/* <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
