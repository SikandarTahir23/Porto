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
                src="/imgs/my.png"
                alt="Al Siam Profile"
                className="shadow-dark"
              />
              <h1>Sikandar Tahir</h1>
              <p>
                <Typewriter
                  words={['Full-Stack Developer', 'UI/UX Designer', 'Chatbot Integrator' , 'LLM AI Specialist']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/Arain.Boyz380?mibextid=ZbWKwL" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
                <a href="https://github.com/SikandarTahir23" target="_blank">
                  <i className="fa fa-github" />
                </a>
                <a href="https://www.instagram.com/mrr_sikki?igsh=MTBzMnVhMjB0MmZiMg==" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/sikandar-tahir-356a56273/" target="_blank">
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
