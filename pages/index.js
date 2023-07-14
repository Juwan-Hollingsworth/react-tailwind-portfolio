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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juwan's SWE Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-navybl px-10 overflow-x-hidden">
        <section className="  min-h-screen">
          <nav className="py-10 mb-12 flex justify-between mt-[-20px] lg:mt-[-20px]">
            <a
              className="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-white px-4 py-2 rounded-md md:ml-8 lg:ml-8 font-latoBold"
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
                <h2 className="text-5xl py-2  text-white font-libre medium -mt-20  text-center lg:-mt-32">
                  Juwan Hollingsworth
                </h2>
              </div>
            </div>
            <div className="relative mx-auto -mt-16 lg:-mt-40 ">
              <Image
                src={avatar}
                className=" w-full h-auto sm:max-h-[600px] md:max-h-[600px] object-contain "
              />
            </div>
            <h3 className="text-2xl py-2 text-white font-lato  md:-mt-16 lg:-mt-10 font-latoBold ">
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
        <section className="py-10 pt-40">
          <h1 class="text-3xl md:text-4xl mb-4 text-white text-center font-latoBold">
            Meet the developer 👋🏾,
          </h1>
          <div className="flex flex-col md:flex-row justify-center">
            <span className="mr-4 py-3">
              <Image src={pfp} className="rounded-lg " />
            </span>

            <p className="text-md py-2 leading-8 text-white font-lato">
              Hi there, I'm Juwan, a{" "}
              <span className="text-yellow-400">software engineer</span> and
              college graduate with a bachelor's in{" "}
              <span className="text-yellow-400">Computer Science</span>. I'm
              passionate about{" "}
              <span className="text-yellow-400">
                creating things that live on the web
              </span>
              , and I've had some pretty cool experiences along the way. My
              journey began back in high school when I ran a sneaker business
              and discovered firsthand how digital implementation can transform
              a business. From there, I taught myself Dreamweaver and continued
              to build my coding skills. While studying biology and computer
              science at Clayton State University, I've been fortunate enough to
              work with some big names in Atlanta such as COX Automotive,
              MailChimp, and Spark Social. These days, my primary focus is on
              creating digital experiences and products that are accessible and
              inclusive for a wide range of clients.
            </p>
          </div>
          <div></div>
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
                      <button class="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-lato">
                        <a href="#portfolio">View Portfolio</a>
                      </button>
                      <button class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-lato">
                        <a href="#contact">Get in Touch</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6">
                  <div id="spark" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          id="portfolio"
                          src={spark}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Duda Agency Site
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <p class=" text-sm text-gray-600 text-white font-lato">
                          Spark Social's redesign is a visually stunning website
                          project showcasing my expertise in user experience
                          design and implementation. Leveraging the Duda
                          platform, I crafted a seamless and intuitive user
                          interface, prioritizing functionality and aesthetics
                          to deliver an engaging user experience. This project
                          demonstrates my versatility in working with different
                          platforms and highlights my ability to create
                          impactful designs that elevate a brand's online
                          presence.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="gpt3" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={gpt3}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Responsive GPT3 Site
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p class=" text-sm text-gray-600 text-white font-lato">
                          Responsive GPT3 Site is a dynamic web application I
                          built as part of my Software Engineering portfolio.
                          Leveraging the power of JavaScript, React, and CSS,
                          this project showcases the capabilities of OpenAI's
                          GPT-3.5 language model by creating an interactive and
                          adaptive website. Users can engage in natural language
                          conversations with the site, receiving intelligent
                          responses generated by GPT-3.5, while the responsive
                          design ensures an optimal viewing experience across
                          various devices.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="bank" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={bank}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Banking Application
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p class=" text-sm text-gray-600 text-white font-lato">
                          The Banking App project is a fully functional web
                          application developed using JavaScript, React, HTML,
                          and CSS. It offers a secure login system to store user
                          credentials and provides a user-friendly interface for
                          performing basic banking operations such as balance
                          inquiries, fund transfers, and transaction history
                          tracking. This project showcases my skills in
                          front-end development and demonstrates my ability to
                          create robust and interactive applications.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="metrix" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={metrix}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Social Media Metrics
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p class=" text-sm text-gray-600 text-white font-lato">
                          The Social Media Metrics App is a powerful tool
                          designed to provide users with comprehensive analytics
                          and insights into their social media performance. With
                          real-time data tracking and visualizations, it offers
                          a user-friendly interface for monitoring key metrics
                          such as engagement, follower growth, and post reach
                          across multiple platforms. This project showcases my
                          ability to develop data-driven applications that
                          empower individuals and businesses to optimize their
                          social media strategies for maximum impact.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="game" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={game}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          In-Browser Game
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p class=" text-sm text-gray-600 text-white font-lato">
                          The In-Browser Game is a dynamic web application built
                          with React, JavaScript, and Node.js, aimed at
                          providing an interactive gaming experience. Leveraging
                          the DOM, the game effectively manipulates data and
                          implements game logic to create an engaging user
                          experience. The application showcases my skills in
                          front-end development, utilizing React for building
                          responsive user interfaces, while the back-end powered
                          by Node.js handles the game logic and data management.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id="cloth" class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={cloth}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          email landing page
                        </h5>
                        <div className="flex">
                          {" "}
                          <ul
                            id="portfolio_skills"
                            className="list-none flex flex-wrap gap-4"
                          >
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">HTML</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">CSS</span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">
                                  UI/UX DESIGN
                                </span>
                              </div>
                            </li>
                            <li className="flex items-center py-1">
                              <div className="flex items-center justify-center bg-white rounded-sm p-1">
                                <span className="text-gray-500">Analytics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p class=" text-sm text-gray-600 text-white font-lato">
                          CRUD Email Submission is a dynamic web application
                          designed to streamline the process of collecting and
                          managing user emails. With a user-friendly interface,
                          it allows visitors to submit their email addresses,
                          which are then securely stored in a database. The
                          application also provides administrators with the
                          ability to perform CRUD operations, enabling efficient
                          management of the submitted emails for future
                          communication or analysis.
                        </p>
                        <button className="text-white float-right">
                          View Live Site
                        </button>
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
              <h1 className="md:text-8xl lg:text-8xl xsm:text-6xl text-white">
                + 👨🏾‍💻
              </h1>
            </div>
            <h3 className="text-lg pt-8 pb-2 text-white font-latoBold">
              Looking for a full stack engineer?
            </h3>
            <p className="py-2 text-white text-md font-lato">
              Snag a copy of my resume 😉{" "}
            </p>
            <button class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 font-lato">
              View Resume
            </button>
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
              <button class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold">
                Email 📩
              </button>
              <button class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold">
                LinkedIn 👨🏾‍💻
              </button>
              <button class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-6 text-3xl font-latoBold">
                Github 👾
              </button>
              <button class="border-2 border-solid border-white text-white hover:border-yellow-400 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 my-2 mt-6 text-3xl font-latoBold">
                Spark ⚡️
              </button>
            </div>
          </div>
        </section>
        {/* footer section */}
        <section>
          <div className="py-10">
            <div>
              <ul className="text-white text-center text-md font-lato ">
                <li className="cursor-pointer">Back to the top</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
