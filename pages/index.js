import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/avatar.png";
import spark from "../public/spark.png";
import gpt3 from "../public/gpt3.png";
import bank from "../public/hsfinancial.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import metrix from "..//public/metrix.png";
import game from "..//public/game.png";
import cloth from "..//public/cloth.png";
import pfp from "..//public/juwan.jpg";
import Modal from "../components/modal/Modal";
import crowdfunding from "..//public/crowdfunding.png";
import mt4 from "..//public/mt4.png";

import { useState } from "react";
import projectData from "../components/modal/ProjData";
import finance from "../public/finance-dash.png";

/** TODO:
 
 * Ensure UI is compatible on all viewports
 * Shorten descriptions and fix btn spacing (portfolio)
 * Add modal to portfolio section - dynamic content
 * Update live link to Spark Social
 */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <Head id="top">
        <title>Juwan's SWE Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-navybl px-10 overflow-x-hidden">
        <section className="  min-h-screen">
          <nav className="py-10 mb-12 flex justify-between mt-[-20px] desktop:mt-[-20px]">
            <a
              className="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-white px-4 py-2 rounded-md md:ml-8 desktop:ml-8 font-latoBold"
              href="https://www.sparksocial.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spark Social
            </a>

            <ul className=" flex items-center">
              <li className="text-white">
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-white px-4 py-2 rounded-md ml-8 font-latoBold "
                  href="#resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <div className="flex justify-center">
              <div className="sm:pt-2 pb-10">
                <h2 className="text-5xl py-2  text-white font-libre medium -mt-20  text-center desktop:-mt-32">
                  Juwan Hollingsworth
                </h2>
              </div>
            </div>
            <div className="relative mx-auto -mt-16 desktop:-mt-40 ">
              <Image
                src={avatar}
                className=" w-full h-auto max-h-[600px] object-contain "
              />
            </div>
            <h3 className="text-2xl py-2 text-white font-lato  md:-mt-16 desktop:-mt-10 font-latoBold ">
              Developer and Designer.
            </h3>
            <p className="text-white text-md font-lato">Atlanta, GA 📍</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300 mt-[-30px]">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
        {/* About Section */}
        <section className="py-10 pt-40 max-w-[1150px] mx-auto">
          <div>
            <h1 class="text-3xl mb-16 text-white text-center font-latoBold">
              Meet the developer 👋🏾,
            </h1>
            <div class="grid grid-cols-2 gap-0 iphone:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 laptop:gap-4 desktop:grid-cols-2">
              <div class="">
                <div className="">
                  <Image
                    src={pfp}
                    className="rounded-lg w-[600px] mx-auto iphone:w-[75%] tablet:w-[75%] laptop:w-[475px] "
                  />
                </div>
              </div>
              <div class="flex-grow">
                <p className="text-[24px] py-2 leading-8 text-white font-lato w-[600px] my-auto iphone:mx-auto iphone:text-[16px] iphone:w-[85%] iphone:pt-8 tablet:text-[16px] tablet:w-[75%] tablet:mx-auto tablet:pt-8 laptop:w-[100%] laptop:pt-0 desktop:text-[18px] desktop:w-[475px]">
                  Hi there, I'm Juwan, a{" "}
                  <span className="text-yellow-400">software engineer</span> and
                  college graduate with a bachelor's in{" "}
                  <span className="text-yellow-400">Computer Science</span>.{" "}
                  <br />
                  <br className="tablet:hidden" /> I'm passionate about{" "}
                  <span className="text-yellow-400">
                    creating things that live on the web
                  </span>
                  , and I've had some pretty cool experiences along the way. My
                  journey began back in high school when{" "}
                  <span className="text-yellow-400">
                    I ran an online sneaker business
                  </span>{" "}
                  and discovered first hand how digital implementation can
                  transform a business. <br />
                  <br className="tablet:hidden" /> From there,{" "}
                  <span className="text-yellow-400">
                    I taught myself Dreamweaver and continued to build my coding
                    skills.
                  </span>{" "}
                  While studying{" "}
                  <span className="text-yellow-400">
                    biology and computer science at Clayton State University
                  </span>{" "}
                  I've been fortunate enough to work with some big names in
                  Atlanta such as COX Automotive, MailChimp, and Spark Social.
                  <br />
                  <br className="tablet:hidden" />
                  These days, my primary focus is on{" "}
                  <span className="text-yellow-400">
                    creating digital experiences
                  </span>{" "}
                  and products that are accessible and inclusive for a wide
                  range of clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio section */}
        <section className="py-10 pt-10">
          <div>
            <div class="portfolio-2 py-6 md:py-12">
              <div class="container px-4 mx-auto">
                <div class="md:flex md:justify-center">
                  <div class="md:w-10/12 xl:w-8/12 text-center">
                    <h1 class="text-3xl md:text-4xl mb-4 text-white font-latoBold">
                      Projects I've worked on 👾
                    </h1>
                    <p class="text-md font-lato text-white">
                      A collection of impactful projects that I have worked on
                      throughout my software engineering journey. From
                      innovative web applications to robust software solutions,
                      this portfolio showcases my expertise and the value I
                      bring to the table.
                    </p>
                    <div class="mt-6">
                      <button class="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-latoBold">
                        <a href="#portfolio">View Portfolio</a>
                      </button>
                      <button class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-latoBold">
                        <a href="#contact">Get in Touch</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className=" pt-8 desktop:grid desktop:grid-cols-3 desktop:gap-4 laptop:grid laptop:grid-cols-3 laptop:gap-4 tablet:grid tablet:grid-cols-1 tablet:gap-0  iphone:grid iphone:grid-cols-1 iphone:gap-0 "
                  id="port-row1"
                >
                  <div id="spark" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          id="portfolio"
                          src={spark}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4 flex flex-col items-center">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Marketing Agency Site
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4 justify-center "
                          >
                            <li className="flex items-center py-2">
                              <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                                <span className="text-gray-600 font-semibold text-sm ">
                                  UX/UI DESIGN + IMPLEMENT
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <p class=" text-md text-white font-lato pb-4 text-center ">
                          Modern website redesign for Spark Social, showcasing
                          my expertise in user experience design and my
                          ability...
                        </p>

                        <div>
                          {/* Button for project with id: 1 */}
                          <div className=" flex justify-center items-center">
                            <button
                              className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              id="portfolio_btns"
                              onClick={() =>
                                handleOpenModal(
                                  projectData.find((p) => p.id === 1)
                                )
                              }
                            >
                              View Project Details
                            </button>
                          </div>

                          {selectedProject && (
                            <Modal
                              title={selectedProject.title}
                              description={selectedProject.description}
                              skills={selectedProject.skills}
                              projectLink={selectedProject.projectLink}
                              githubRepo={selectedProject.ghRepo}
                              projectPic={selectedProject.projectPic}
                              onClose={handleCloseModal}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="gpt3" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={gpt3}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4 flex flex-col items-center ">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Responsive GPT3 Site
                        </h5>

                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center justify-center py-2">
                            <div className=" bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FRONT-END
                              </span>
                            </div>
                          </li>
                        </ul>

                        <p class=" text-md text-white font-lato text-center pb-4">
                          Captivating web application demonstrating the seamless
                          integration of JavaScript, React, and CSS to create...
                        </p>

                        <div></div>

                        {/* Button for project with id: 2 */}
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 2)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bank" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={bank}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Banking Application
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FULL-STACK
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class=" text-md text-white font-lato pb-4 text-center">
                          Fully functional web application developed with
                          JavaScript, React, HTML, and CSS, offering secure
                          login and...
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 3)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=" pt-8 desktop:grid desktop:grid-cols-3 desktop:gap-4 laptop:grid laptop:grid-cols-3 laptop:gap-4 tablet:grid tablet:grid-cols-1 tablet:gap-0  iphone:grid iphone:grid-cols-1 iphone:gap-0 "
                  id="port-row2"
                >
                  <div id="metrix" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={metrix}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Social Media Metrics
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FULL-STACK
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center py-1">
                            <div className="flex items-center justify-center bg-yellow-400 rounded-md p-2">
                              <span className="text-white font-semibold">
                                WIP 🚨
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class="text-md text-white font-lato pb-4 text-center">
                          Data-driven, user-friendly software engineering
                          project providing comprehensive analytics and
                          real-time insights to optimize...
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 5)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="game" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={game}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          In-Browser Game
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FRONT-END
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class=" text-md text-white font-lato pb-4 text-center">
                          In-browser interactive web application using React,
                          JavaScript, and Node.js, utilizing front-end
                          technologies to...
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 6)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="web3" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={crowdfunding}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Web3 Crowdfunding Platform
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FULL-STACK
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class=" text-md text-white font-lato pb-4 text-center">
                          Beautifully designed platform that seamlessly
                          integrates with blockchain, Metamask pairing, and
                          smart contract interaction...
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 7)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className=" pt-8 desktop:grid desktop:grid-cols-3 desktop:gap-4 laptop:grid laptop:grid-cols-3 laptop:gap-4 tablet:grid tablet:grid-cols-1 tablet:gap-0  iphone:grid iphone:grid-cols-1 iphone:gap-0 "
                  id="port-row3"
                >
                  <div id="trading" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={mt4}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Algorithmic Trading Bot
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FULL-STACK
                              </span>
                            </div>{" "}
                          </li>
                          <li className="flex items-center py-2">
                            {" "}
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                AWS CLOUD
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class=" text-md text-white font-lato pb-4 text-center">
                          This project harnesses the power of MetaTrader,
                          Telegram, and Amazon Web Services to create an
                          advanced automated...
                          {/* It seamlessly
                          analyzes real-time data and efficiently executes
                          trades using an AWS instance, ensuring scalability and
                          reliability. Additionally, the system provides trade
                          alerts and enables users to inquire about trade status
                          and account information through Telegram integration. */}
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 6)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="findashb" class="">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={finance}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase text-center">
                          Financial Dashboard
                        </h5>{" "}
                        <ul
                          id="portfolio_skills"
                          className="list-none flex flex-wrap gap-4 justify-center "
                        >
                          <li className="flex items-center py-2">
                            <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                              <span className="text-gray-600 font-semibold text-sm ">
                                FRONT-END
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class=" text-md text-white font-lato pb-4 text-center">
                          In-browser interactive web application using React,
                          JavaScript, and Node.js, utilizing front-end
                          technologies to deliver...
                        </p>
                        <div className=" flex justify-center items-center">
                          <button
                            className="bg-yellow-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            id="portfolio_btns"
                            onClick={() =>
                              handleOpenModal(
                                projectData.find((p) => p.id === 6)
                              )
                            }
                          >
                            View Project Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Resume  section*/}
        <section id="resume">
          <div className="text-center shadow-lg p-10 rounded-xl mt-10 mx-auto">
            <div className="flex items-center justify-center">
              <Image
                src={code}
                width={100}
                height={100}
                style={{ display: "inline" }}
              />
              <h1 className="tablet:text-8xl laptop:text-8xl iphone:text-6xl text-white">
                + 👨🏾‍💻
              </h1>
            </div>
            <h3 className="text-lg pt-8 pb-2 text-white font-latoBold">
              Looking for a full stack engineer?
            </h3>
            <p className="py-2 text-white text-md font-lato">
              Snag a copy of my resume 😉{" "}
            </p>
            <div className="py-8">
              <a
                class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-lato"
                href="https://portfolio-resume-bucket.s3.amazonaws.com/Juwan_Resume203.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>
        {/* contact section */}
        <section className="py-10 pt-10" id="contact">
          <div>
            <div className="flex items-center justify-center mt-8 font-lato text-white">
              <h3 className="text-3xl py-1 font-latoBold text-white">
                Let's Connect 📶
              </h3>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              <a
                href="mailto:jhollingsworth5@student.clayton.edu"
                target="_blank"
                rel="noopener noreferrer"
                class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold"
              >
                Email 📩
              </a>
              <a
                href="https://www.linkedin.com/in/juwan-hollingsworth-8a8b48a5/"
                target="_blank"
                rel="noopener noreferrer"
                class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold"
              >
                LinkedIn 👨🏾‍💻
              </a>
              <a
                href="https://github.com/Juwan-Hollingsworth"
                target="_blank"
                rel="noopener noreferrer"
                class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold"
              >
                Github 👾
              </a>
              <a
                href="https://www.sparksocial.agency/"
                target="_blank"
                rel="noopener noreferrer"
                class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 my-2 mt-6 text-3xl font-latoBold"
              >
                Spark ⚡️
              </a>
            </div>
          </div>
        </section>
        {/* footer section */}
        <section>
          <div className="py-10">
            <div>
              <ul className="text-white text-center text-md font-lato ">
                <a href="#top" className="cursor-pointer">
                  Back to the top
                </a>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
