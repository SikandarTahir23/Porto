import type { NextPage } from "next";
import { FaCode, FaPencilRuler, FaRobot, FaLink, FaPlug, FaCloudUploadAlt } from "react-icons/fa";

const Service: NextPage = () => {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>My Services</h2>
          </div>
        </div>
        <div className="row">

          {/* Full-Stack Web Development */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaCode size={40} className="text-blue-500" />
              </div>
              <h4>Full-Stack Web Development</h4>
              <p>Building fast, responsive, and scalable websites & apps using Next.js, React, Tailwind CSS, and modern backend technologies.</p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaPencilRuler size={40} className="text-pink-500" />
              </div>
              <h4>UI/UX Design</h4>
              <p>Designing clean, user-friendly interfaces with a focus on intuitive navigation and engaging user experiences.</p>
            </div>
          </div>

          {/* AI Chatbot Integration */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaRobot size={40} className="text-green-500" />
              </div>
              <h4>AI Chatbot Integration</h4>
              <p>Developing and integrating intelligent chatbots using Dialogflow, Flowise, OpenAI, and Gemini to enhance customer interaction.</p>
            </div>
          </div>

          {/* Web3 & Blockchain Integration */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaLink size={40} className="text-purple-500" />
              </div>
              <h4>Web3 & Blockchain Integration</h4>
              <p>Implementing blockchain-based features and Web3-enabled forms to connect users securely and efficiently.</p>
            </div>
          </div>

          {/* API Development & Integration */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaPlug size={40} className="text-yellow-500" />
              </div>
              <h4>API Development & Integration</h4>
              <p>Creating and integrating REST APIs, third-party services, and automation workflows for enhanced functionality.</p>
            </div>
          </div>

          {/* Deployment & Optimization */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <FaCloudUploadAlt size={40} className="text-cyan-500" />
              </div>
              <h4>Deployment & Performance Optimization</h4>
              <p>Deploying websites and apps on Vercel, Netlify, and Render with optimized performance and SEO.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
