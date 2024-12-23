import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import Image from "next/image";
import mpin from '../public/mpin.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import doktorpc from '../public/doktorpc.png';
import hermanos from '../public/hermanoss.png';
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Arvin Hendro Portfolio</title>
        </Head>
        <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="flex justify-between py-10 mb-12">
              <h1 className="text-xl font-burtons dark:text-teal-400">Welcome to Arvin Portfolio</h1>
              <ul className="flex items-center">
                <div className="p-4">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="text-2xl cursor-pointer dark:text-white"></BsFillMoonStarsFill>
                  </li>
                </div>
                <li>
                  <a
                    className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-400"
                    target="_blank" href="https://drive.google.com/file/d/1fj8DqtcSENrW0Gyga4zY8ivlhbLURhwL/view?usp=sharing"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="p-10 text-center">
              <h2 className="text-5xl font-medium text-teal-600 md:text-6xl dark:text-teal-400">Arvin Hendro</h2>
              <h3 className="py-2 text-2xl md:text-3xl dark:text-white">Web And App Developer</h3>

            </div>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-300">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arvin-hendro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500"
              >
                <AiFillLinkedin />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/arvinhendro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <AiFillInstagram />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/arvinhendro45"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96">
              <Image src={mpin} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
            <div>
              <h3 className="py-1 text-3xl dark:text-white">Hello!</h3>
              <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-300">
                My name is Arvin Hendro. I am a Junior Programmer and undergraduate of Information Technology at Brawijaya University. I am passionate about designing and developing functional, visually appealing digital solutions while continuously learning and growing in this ever-evolving field. I enjoy exploring new knowledge and technologies to stay ahead in my profession. Additionally, I thrive in collaborative environments, adapt easily to new challenges, and enjoy contributing as a team player.
              </p>

            </div>
            <div className="gap-10 lg:flex">
              <div className="justify-center p-5 my-5 text-center shadow-lg rounded-xl dark:bg-gray-800">
                <h3 className="pb-2 text-lg font-medium dark:text-white">My Code Language</h3>
                <p className="py-2 dark:text-gray-300">
                  I have been learning these programming languages and tools throughout my two years of college. During this time, I have gained foundational knowledge and hands-on experience in web and application development.
                </p>
                <h4 className="py-2 text-teal-600 dark:text-teal-400">Programming Language</h4>
                <div className="justify-center gap-3 text-center lg:flex">
                  <p className="py-1 text-gray-800 dark:text-gray-300">Java</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">PHP</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">HTML</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">CSS</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">MySQL</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">Android Studio</p>
                  <p className="py-1 text-gray-800 dark:text-gray-300">Javascript</p>

                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col items-center text-center">
              <h3 className="py-4 text-3xl dark:text-white">Projects</h3>
              <div className="flex flex-wrap justify-center gap-4 py-2">
                <div className="justify-center p-5 my-5 text-center shadow-lg rounded-xl dark:bg-gray-800">
                  <Image className="py-1" src={hermanos} height={400} width={400} />
                  <a
                    className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-400"
                    target="_blank" href="https://github.com/FiqriAulia/project-papb-2024"
                  >
                    Github
                  </a>
                </div>
                <div className="justify-center p-5 my-5 text-center shadow-lg rounded-xl dark:bg-gray-800">
                  <Image className="py-1 " src={doktorpc} height={400} width={400}/>
                  <a
                    className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-400"
                    target="_blank" href="https://github.com/NaufalArsa/DoctorPC"
                  >
                    Github
                  </a>
                </div>

              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col items-center text-center">
              <h3 className="py-4 text-3xl text-gray-800 dark:text-white">Contact Me</h3>
              <div className="flex flex-wrap justify-center gap-4 py-2">
                <div className="flex flex-col items-center p-5 my-5 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800 sm:flex-row sm:justify-center">
                  <div className="flex items-center gap-2">
                    <CiMail className="text-4xl text-gray-800 dark:text-white" />
                    <p className="text-gray-600 dark:text-gray-300">arvin.hendro145@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-4">
                    <FaWhatsapp className="text-4xl text-gray-800 dark:text-white" />
                    <p className="text-gray-600 dark:text-gray-300">082114582355</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
