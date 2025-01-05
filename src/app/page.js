"use client";

import React, { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import getAllProducts from "../services/getAllProductsApi";
import Link from "next/link";
import ProductCard from "../components/product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./styles.css";
import { Alata } from "next/font/google";
const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  const [products, setProducts] = useState([]);

  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={`${alata.className} font-sans text-gray-900 pb-[50px]`}>
      {/* Header */}
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div className="h-[88vh]">
        <Swiper
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <section
              className="relative w-full h-screen bg-cover bg-center text-white"
              style={{ backgroundImage: "url(" + "/banner.png" + ")" }}
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative flex flex-col items-center justify-center h-full z-10 space-y-12">
                <h1 className="text-4xl md:text-5xl mb-4 text-center">
                  Seamless Material
                  <br />
                  with Components
                </h1>
                <Link
                  href={"/contact"}
                  className="px-12 py-3 bg-white text-[#323334] text-xl font-medium  tracking-widest rounded-lg"
                >
                  Contact us
                </Link>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <section
              className="relative w-full h-screen bg-cover bg-center text-white"
              style={{
                backgroundImage:
                  "url(" +
                  "https://static.vecteezy.com/system/resources/thumbnails/049/931/117/small/modern-keys-in-sharp-focus-with-a-beautifully-blurred-interior-background-photo.jpeg" +
                  ")",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative flex flex-col items-center justify-center h-full z-10 space-y-12">
                <h1 className="text-4xl md:text-5xl mb-4 text-center">
                  Know more
                  <br />
                  about us
                </h1>
                <Link
                  href={"/company-profile"}
                  className="px-12 py-3 bg-white text-[#323334] text-xl font-medium  tracking-widest rounded-lg"
                >
                  About us
                </Link>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <section
              className="relative w-full h-screen bg-cover bg-center text-white"
              style={{
                backgroundImage:
                  "url(" +
                  "https://static.wixstatic.com/media/ebff0f_b92785833d3d46d6a668cf8064dceff7~mv2.jpg/v1/fill/w_528,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Safes%20Vaults%20Calgary%20Lock%20and%20Safe.jpg" +
                  ")",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative flex flex-col items-center justify-center h-full z-10 space-y-12">
                <h1 className="text-4xl md:text-5xl mb-4 text-center">
                  Explore various Products
                  <br />
                  and Categories
                </h1>
                <Link
                  href={"/products"}
                  className="px-12 py-3 bg-white text-[#323334] text-xl font-medium  tracking-widest rounded-lg"
                >
                  Explore
                </Link>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative h-full md:h-[400px] w-full overflow-hidden p-5 animie-section mt-16 max-w-7xl mx-auto place-items-center gap-8">
        <div className="col-span-1">
          <img src="./partner.jpeg" />
        </div>
        <div className="col-span-1 text-2xl max-md:px-8 ">
          Specified or approved by all the major hospitality brands, you can
          trust BuildEZto deliver quality shower walls, pans, and doors to your
          next project. Take a look at some of our recent hospitality and
          multifamily projects.
        </div>
      </div>

      {/* <section
        className="relative w-full h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url(" + "/banner.png" + ")" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative flex flex-col items-center justify-center h-full z-10 space-y-12">
          <h1 className="text-4xl md:text-8xl mb-4 text-center">
            Seamless Material
            <br />
            with Components
          </h1>
          <Link
            href={"/contact"}
            className="px-12 py-3 bg-white text-[#323334] text-xl font-medium  tracking-widest rounded-lg"
          >
            Contact us
          </Link>
        </div>
      </section> */}

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
            <h1 className="text-3xl md:text-7xl">
              Creating perfect lines and imposing presence
            </h1>
            <p className="md:pl-10 md:w-[600px] pt-10">
              We strive to inspire creativity in architects, designers, and
              builders by offering a diverse range of premium materials that
              embody elegance, durability, and innovation. Our products are
              carefully sourced and meticulously crafted, reflecting our
              dedication to excellence and our passion for design.
            </p>
            <Link
              href={"/company-profile"}
              className="border-2 text-xs px-10 py-2 rounded-xl tracking-widest"
            >
              READ ABOUT US
            </Link>
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
      <div className="mt-12 mb-8 animie-section">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6 text-[#323334]`}
        >
          Enjoy our feature products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
          {products &&
            products?.map((p) => (
              <ProductCard
                alata={alata}
                key={p.id}
                id={p.id}
                image={p.images[0]}
                name={p.productName}
              />
            ))}
        </div>
      </div>

      {/* Delight Services Section */}
      <div className="md:grid md:grid-cols-2 animie-section">
        <div className="bg-[#384353] text-[#FFFFFF] flex flex-col justify-center items-center p-8">
          <div className="max-w-lg space-y-12">
            <h3 className="text-start text-4xl">Delight Services</h3>
            <div className="text-base space-y-4">
              <p>
                We understand that choosing the right materials is crucial for
                any project. Our team of experts is available to provide
                personalized consultations and design support to help you select
                the perfect materials for your vision.{" "}
              </p>{" "}
              <p>
                {" "}
                Whether you need a unique finish or a specific size, we offer
                tailored solutions to meet your requirements. Collaborate with
                our designers to create custom products that align with your
                project’s aesthetic.{" "}
              </p>{" "}
              <p>
                {" "}
                We are dedicated to sustainable practices, from sourcing
                materials responsibly to reducing waste in our manufacturing
                processes. Learn more about our eco-friendly initiatives and how
                we contribute to a greener future
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/companyProfileImg2.jpg"
            alt="image"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full p-3 animie-section">
        <img
          src={"/details.png"}
          alt="Construction site"
          className="w-full h-full object-cover rounded-md shadow-lg"
          loading="lazy"
        />
      </div>

      <div className="relative h-screen animie-section">
        <img
          src={"/helmet-bg.png"}
          alt="City construction scene"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={"/helmet.png"}
            alt="Hard hat"
            className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-lg rounded-md"
            loading="lazy"
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
                <h3 className="text-5xl mb-6 text-[#323334]">
                  The Timeless Appeal of Natural Stone in Modern Design
                </h3>

                <div className="space-y-4 text-gray-600 text-[#384353]">
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
                  <span className="text-lg font-medium text-gray-500 tracking-widest">
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
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-center">
            <button className="group flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors py-4">
              SEE ALL ARTICLES
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="border-t border-gray-200"></div>
        </div> */}
      </div>

      <div className="relative h-[600px] w-full overflow-hidden p-5 animie-section">
        <div className="absolute m-5 inset-0">
          <img
            src={"/high-end.png"}
            alt="City skyline with modern buildings"
            className="w-full h-full object-cover"
            loading="lazy"
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
