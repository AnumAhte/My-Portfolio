'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Stylish Portfolio - Anum</title>
        <meta name="description" content="Portfolio of Anum, Front-end Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col">
        {/* Navigation Bar */}
        <header className="flex justify-between items-center p-6 bg-purple-600 text-white border-b-2 border-purple-800">
          <div className="text-2xl font-bold">Anum</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-purple-300">About</Link>
            <Link href="#skills" className="hover:text-purple-300">Skills</Link>
            <Link href="#projects" className="hover:text-purple-300">Projects</Link>
            <Link href="#contact" className="hover:text-purple-300">Contact</Link>
          </nav>

          {/* Hamburger Menu Button for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-purple-600 text-white border-b-2 border-purple-800 transition duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link href="#about" className="hover:text-purple-300" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-300" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-300" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contact" className="hover:text-purple-300" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black">
          {/* Left: Text Section */}
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-24 py-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-500">
              Hi, I&rsquo;m Anum Ahtesham <span role="img" aria-label="wave">👋</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              I design and develop experiences that make people&rsquo;s lives simpler through web and mobile apps.
            </p>
            <Link href="#contact">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500">
                Contact Me
              </button>
            </Link>
          </div>

          {/* Right: Profile Image Section */}
          <div className="flex-1 flex justify-center items-center">
  <Image
    src="/profile2.jpg"
    alt="Anum, Front-end Developer"
    className="w-full max-w-xs h-auto rounded-lg shadow-lg border-4 border-purple-600 -mt-24 opacity-0 animate-fadeIn transition-transform duration-500 ease-in-out transform hover:scale-105"
    width={300}  // set an appropriate width
    height={300} // set an appropriate height
    priority    // optional: use this if you want to prioritize loading this image
  />
</div>


        </section>

        {/* About Section */}
        <section id="about" className="py-12 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">About Me</h2>
            <p className="text-lg text-gray-400">
              I am a passionate front-end developer with experience in building responsive and interactive web applications. My goal is to create user-friendly experiences while leveraging modern technologies.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Node js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Projects</h2>
            <p className="text-lg text-gray-400 mb-4">Here are some of the projects I have worked on:</p>
            <ul className="list-disc list-inside text-gray-400">
              <li><strong>Project 1:</strong> CLI Calculator(npx 20basic_calculator )</li>
              <li><strong>Project 2:</strong> CLI Number Guessing Game(npx 20num_guessing)</li>
              <li><strong>Project 3:</strong> TODO-list(npx 20todo-list)</li>
              <li><strong>Project 4:</strong> Atm Machine(npx 20atm_coding)</li>
              <li><strong>Project 5:</strong> Currency-Converter(npx 20_currency)</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Contact Me</h2>
            <form className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" required className="w-full p-3 rounded bg-gray-700 text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" required className="w-full p-3 rounded bg-gray-700 text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea id="message" required className="w-full p-3 rounded bg-gray-700 text-white h-32" />
              </div>
              <button type="submit" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-purple-600 text-white text-center">
          <p>&copy; 2024 Anum. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
