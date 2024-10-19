"use client"
import { Typewriter } from 'react-simple-typewriter';

export default async function Home() {
  return (
    <>
      <main>
        <section className="home section" id="home">
          <div className="container">
            <div className="intro">
              <img
                src="/imgs/alsiam.png"
                alt="Al Siam Profile"
                className="shadow-dark"
              />
              <h1>Sikandar Tahir</h1>
              <p>
                <Typewriter
                  words={['Full-stack Developer', 'UI/UX Designer', 'Chatbot Integrator']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <div className="social-links">
                <a href="https://twitter.com/" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
                <a href="https://facebook.com/" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
                <a href="https://github.com/" target="_blank">
                  <i className="fa fa-github" />
                </a>
                <a href="https://instagram.com/" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
