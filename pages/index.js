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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juwan's SWE Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-navybl px-10 ">
        <section className="  min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <a
              className="bg-yellow-400 text-white px-4 py-2 rounded-md ml-8 font-lato"
              href="#"
            >
              Spark Social
            </a>

            <ul className=" flex items-center">
              <li className="text-white">
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-yellow-400 text-white px-4 py-2 rounded-md ml-8 font-lato"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-white font-libre medium mt-[-50px] ">
              Juwan Hollingsworth
            </h2>
            <div className="relative mx-auto mt-[-50px] ">
              <Image src={avatar} />
            </div>
            <h3 className="text-2xl py-2 text-white font-lato mt-[-25px]">
              Developer and Designer.
            </h3>
            <p className="text-white font-lato">Atlanta, GA 📍</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
        {/* About Section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 font-lato text-white">
              Meet the developer 👋🏾,
            </h3>
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

        <section>
          <div>
            <div class="portfolio-2 py-6 md:py-12">
              <div class="container px-4 mx-auto">
                <div class="md:flex md:justify-center">
                  <div class="md:w-10/12 xl:w-8/12 text-center">
                    <h1 class="text-3xl md:text-4xl mb-4 text-white">
                      Projects I've worked on 👾
                    </h1>
                    <p class="text-xl font-lato text-white">
                      A collection of impactful projects that I have worked on
                      throughout my software engineering journey. From
                      innovative web applications to robust software solutions,
                      this portfolio showcases my expertise and the value I
                      bring to the table.
                    </p>
                    <div class="mt-6">
                      <button class="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-yellow-500 hover:border-indigo-700 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
                        View Portfolio
                      </button>
                      <button class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </div>

                <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6">
                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
                    <div class="portfolio-item mx-auto max-w-sm">
                      <div class="portfolio-img relative overflow-hidden cursor-pointer">
                        <Image
                          src={spark}
                          className="max-w-full h-auto rounded-lg"
                        />
                        <div class="portfolio-hover"></div>
                      </div>
                      <div class="px-1 py-4">
                        <h5 class="font-semibold text-xl text-yellow-400 uppercase">
                          Duda Agency Site
                        </h5>
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
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
                        <p class="text-gray-600">
                          HTML,CSS,JavaScript,React,Next.js
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center shadow-lg p-10 rounded-xl mt-10 mx-auto">
            <div className="flex items-center justify-center">
              <Image
                src={code}
                width={100}
                height={100}
                style={{ display: "inline" }}
              />
              <h1 className="text-8xl text-white">+ 👨🏾‍💻</h1>
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 text-white">
              Looking for a full stack engineer?
            </h3>
            <p className="py-2 text-white">Snag a copy of my resume 😉 </p>
            <button class="border-2 border-solid border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
              View Resume
            </button>
          </div>
        </section>
        <section>
          <div>
            <div className="flex items-center justify-center mt-8 font-lato text-white">
              <h2>Let's Connect 📶</h2>
            </div>
            <div>
              {" "}
              <p className="text-white border-2 border-white rounded-lg px-10 py-5 my-5">
                Email 📩
              </p>
              <p className="text-white border-2 border-white rounded-lg py-5 my-5">
                LinkedIn 👨🏾‍💻
              </p>
              <p className="text-white border-2 border-white rounded-lg py-5 my-5">
                Github 👾
              </p>
              <p className="text-white border-2 border-white rounded-lg py-5 mt-5">
                Spark ⚡️
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
