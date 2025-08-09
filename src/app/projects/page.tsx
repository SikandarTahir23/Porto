import type { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                Some of Best Projects
              </button>
            </div>
          </div>
          <div className="row">

            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/flight.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Flight Booking Web</h4>
                  <p>Creating responsive and visually appealing web interfaces Flight Booking
                    Website with Chatbot Integration.</p>
                  <div className="icon">
                    <a href="https://flight-booking-ai-assistant.vercel.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="graphics-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/ecomo.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>E-Commerce Website</h4>
                  <p>Creating responsive and visually appealing web interfaces Fake E-commerce
                    by API fetching
                  </p>
                  <div className="icon">
                    <a href="https://milestone3-fake-store.vercel.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}

            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/Hekto.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Hekto Store</h4>
                  <p>A responsive e-commerce platform replicating the features and functionality of Hekto.</p>

                  <div className="icon">
                    <a href="https://uf-hekto.vercel.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/aw.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Agentis World</h4>
                  <p> A modern, responsive website showcasing Agentis World’s vision, services, and innovations, built for a seamless and engaging user experience.</p>

                  <div className="icon">
                    <a href="https://st-agentia-world.vercel.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/aic.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4> AI Assistant Chatbot</h4>
                  <p>An advanced AI assistant chatbot developed using Python and Agentic SDK, integrated into a Streamlit application for a smooth, interactive web experience</p>

                  <div className="icon">
                    <a href="https://uf-hekto.vercel.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/Medical AI.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>AI-Powered Medical Assistant</h4>
                  <p>I developed an AI Medical Assistant using Python, Streamlit, and the Agentic SDK, capable of providing intelligent, conversational medical support with a user-friendly interface.</p>

                  <div className="icon">
                    <a href="https://st-medical-assistant.streamlit.app/" className="live-preview">
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
          <div className="row">
            <div className="see-more padd-15">
              <a href="https://github.com/SikandarTahir23" className="btn">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
