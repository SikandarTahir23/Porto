import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Sikandar Tahir a <span>Full-Stack Web Developer | UI/UX Designer | AI Chatbot Specialist.</span>
                  </h2>
                  <p>
                    I’m a Full-Stack Developer, UI/UX Designer, and AI Chatbot Specialist with 1+ year of hands-on experience building scalable, responsive, and user-focused applications. I excel at transforming ideas into high-performance digital solutions — from concept and design to development and deployment. My expertise spans modern web frameworks, clean UI/UX design, and intelligent chatbot integrations, ensuring every project is functional, visually appealing, and impactful.  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.folio.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>sikandar.tahir.04@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BS Computer-Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+92316-2063441</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Karachi</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href=""
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TailwindCSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript/Typescript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Nextjs/Reactjs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Chatbot Integration</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            University of Karachi
                          </h4>
                          <p className="timeline-text">
                            Pursuing a Bachelor&apos;s degree in Computer Science with a focus on software development, algorithms, and modern web technologies.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Governor Sindh Initiative (GIAIC)
                          </h4>
                          <p className="timeline-text">
                           Learning cutting-edge technologies including Generative AI, blockchain-based Web 3.0, and immersive Metaverse development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />Aug 2024 – Jan 2025
                          </h6>
                          <h4 className="timeline-title">
                            Saylani Mass IT Training (SMIT)
                          </h4>
                          <p className="timeline-text">
                            Completed a specialized program in developing and integrating intelligent chatbots to create seamless, interactive user experiences.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">Backend Developer</h4>
                          <p className="timeline-text">
                            Developed and maintained efficient, scalable server-side applications using JavaScript/TypeScript.

                            Built REST APIs and integrated them with multiple frontend platforms.

                            Optimized backend processes to improve performance and reduce response time.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 to Present
                          </h6>
                          <h4 className="timeline-title">Frontend Developer</h4>
                          <p className="timeline-text">
                            Designed responsive, user-friendly interfaces using HTML, CSS, and Tailwind CSS.

                            Implemented interactive features and animations to enhance user experience.

                            Collaborated with designers to ensure pixel-perfect UI implementation.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 to Present
                          </h6>
                          <h4 className="timeline-title">Chatbot Integartion</h4>
                          <p className="timeline-text">
                            Integrated Dialogflow, Flowise, OpenAI, and Gemini AI into websites and apps.

                            Created intelligent, conversational chatbots with voice and web-based support.

                            Automated customer engagement and support processes, improving efficiency.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
