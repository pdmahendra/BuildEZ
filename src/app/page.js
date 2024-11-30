import React from "react";
import { ChevronRight } from "lucide-react";
// import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
// import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url(" + "/banner.png" + ")" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Seamless Material
            <br />
            with Components
          </h1>
          <button className="px-8 py-3 bg-white text-black rounded-md">
            Connect us
          </button>
        </div>
      </section>

      {/* creating perfect section  */}
      <div className="mt-3 animie-section">
        <ImageSlider />
        <div className="layout-container pt-3">
          <div className="article-row">
            <div className="image image-top-left"></div>
            <div className="image image-top-center"></div>
            <div className="image image-top-right"></div>
          </div>
          <div className="text-content">
            <h1>Creating perfect lines and imposing presence</h1>
            <p>
              We strive to inspire creativity in architects, designers, and
              builders by offering a diverse range of premium materials that
              embody elegance, durability, and innovation. Our products are
              carefully sourced and meticulously crafted, reflecting our
              dedication to excellence and our passion for design.
            </p>
            <button>Read About Us</button>
          </div>
          <div className="article-row pb-3">
            <div className="image image-middle-left"></div>
            <div className="image image-bottom-left"></div>
            <div className="image image-bottom-right"></div>
          </div>
        </div>
      </div>

      {/* creating perfect section  */}

      {/* Feature Products Section */}
      <div className="w-full p-3 animie-section">
        <img
          src={"/Frame 51.png"}
          alt="feature products"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Delight Services Section */}
      <section className="flex flex-col md:flex-row bg-gray-900 text-white animie-section">
        <div className="flex flex-col md:flex-row w-full">
          {/* Text Section */}
          <div className="flex items-center justify-center w-full md:w-1/2 p-8 bg-gray-800">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Delight Services</h2>
              <p className="text-lg leading-relaxed">
                We understand that choosing the right materials is crucial for
                any project. Our team of experts is available to provide
                personalized consultations and design support to help you select
                the perfect materials for your vision.
                <br />
                <br />
                Whether you need a unique finish or a specific size, we offer
                tailored solutions to meet your requirements. Collaborate with
                our designers to create custom products that align with your
                project’s aesthetic.
                <br />
                <br />
                We are dedicated to sustainable practices, from sourcing
                materials responsibly to reducing waste in our manufacturing
                processes. Learn more about our eco-friendly initiatives and how
                we contribute to a greener future.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={"/delight-services.png"}
              alt="Construction Image"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="w-full p-3 animie-section">
        <img
          src={"/details.png"}
          alt="Construction site"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      <div className="relative h-screen animie-section">
        <img
          src={"/helmet-bg.png"}
          alt="City construction scene"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={"/helmet.png"}
            alt="Hard hat"
            className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-lg rounded-md"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 animie-section">
        <h2 className="text-2xl font-medium mb-12 text-center">
          Enjoy our articles
        </h2>

        <div className="border border-gray-200">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col p-8">
              <div className="flex-grow">
                <h3 className="text-3xl font-semibold mb-6">
                  The Timeless Appeal of Natural Stone in Modern Design
                </h3>

                <div className="space-y-4 text-gray-600">
                  <p>
                    When it comes to design, the choice of building materials
                    can transform an ordinary space into an extraordinary one.
                    we specialize in high-quality materials that blend timeless
                    elegance with modern aesthetic.
                  </p>
                  <p>
                    Start by clarifying your vision. Are you drawn to classic
                    styles or contemporary designs? This will guide your
                    selections. Prioritize quality and durability; materials
                    like natural stone and premium wood not only enhance beauty
                    but also stand the test of time.
                  </p>
                  <p>
                    Explore versatile options that can be used in various
                    applications, such as decorative tiles for backsplashes or
                    feature walls. Don't forget to consider color and
                    texture—mixing smooth and rough materials can add depth and
                    interest.
                  </p>
                </div>
              </div>

              <div className="relative h-8 mt-8">
                <div className="absolute left-0 bottom-0 flex items-center transform -rotate-90 origin-left -translate-y-full -translate-x-8">
                  <div className="w-8 h-px bg-gray-300 mr-3"></div>
                  <span className="text-xs font-medium text-gray-500 tracking-widest">
                    READER STORIES
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-auto">
              <img
                src={"/article.png"}
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-center">
            <button className="group flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors py-4">
              SEE ALL ARTICLES
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="relative h-[600px] w-full overflow-hidden p-5 animie-section">
        <div className="absolute m-5 inset-0">
          <img
            src={"/high-end.png"}
            alt="City skyline with modern buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              High-end
              <br />
              <span className="block">Contractions materials</span>
            </h1>

            <div className="w-full max-w-md mx-auto mt-8">
              <div className="relative">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm rounded-lg
                         placeholder-gray-500 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-white/50
                         text-center tracking-wider"
                  style={{ caretColor: "transparent" }}
                />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
