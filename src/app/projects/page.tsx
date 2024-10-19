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
                  <img src="/imgs/projects/pro1.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Github Search App</h4>
                  <p>Creating responsive and visually appealing web interfaces.
                    Search your Github Repo by username
                  </p>
                  <div className="icon">
                    <a href="https://search-git-hub-profile.vercel.app/" className="live-preview">
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
                  <img src="/imgs/projects/bike.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Bike E-shop</h4>
                  <p>Creating responsive and visually appealing Bike E-shop with 
                    Chatbot Inetgartion.</p>
                  <div className="icon">
                    <a href="https://bikes-shop-one.vercel.app/" className="live-preview">
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
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/projects/img.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Image Search App</h4>
                  <p>Creating responsive and visually appealing web interfaces Image Search App
                  by API fetching</p>
                  <div className="icon">
                    <a href="https://image-search-five-lemon.vercel.app/" className="live-preview">
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
                  <img src="/imgs/projects/daraz.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Daraz Store (Clone)</h4>
                  <p> A responsive e-commerce platform replicating the features and functionality of Daraz.</p>
                  <div className="icon">
                    <a href="https://sikandar-daraz-clone.vercel.app/" className="live-preview">
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
