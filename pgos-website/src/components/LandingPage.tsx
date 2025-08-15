import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';


interface School {
  id: string;
  name: string;
  logo: string;
  url: string;
  buttonText: string;
}

interface Slide {
  id: string;
  src: string;
  alt: string;
}

const LandingPage: React.FC = () => {
  // Slider images - using placeholder images for testing
  const slides: Slide[] = [
    { id: "slider1", src: "/pgosslider1.webp", alt: "School Campus 1" },
    { id: "slider2", src: "/pgosslider2.webp", alt: "School Campus 2" },
    { id: "slider3", src: "/pgosslider3.webp", alt: "School Campus 3" },
    { id: "slider4", src: "/pgosslider4.webp", alt: "School Campus 4" },
    { id: "slider5", src: "/pgosslider5.webp", alt: "School Campus 5" },
    { id: "slider6", src: "/pgosslider6.webp", alt: "School Campus 6" },
  ];

  // Schools data
  const schools: School[] = [
    {
      id: 'st-paul',
      name: 'St Paul Thomas Academy',
      logo: '/stplogo.webp',
      url: 'https://www.stpaulthomasacademy.co.ke/',
      buttonText: 'Explore St Paul Thomas Academy'
    },
    {
      id: 'pioneer-girls-junior',
      name: 'Pioneer Girls Junior Academy',
      logo: '/pgjalogo.webp',
      url: 'https://www.pioneergirlsjunioracademy.co.ke/',
      buttonText: 'Explore Pioneer Girls Junior academy'
    },
    {
      id: 'pioneer-junior',
      name: 'Pioneer Junior Academy',
      logo: '/pjslogo.webp',
      url: 'https://www.pioneerjunioracademy.co.ke/',
      buttonText: 'Explore Pioneer Junior Academy'
    },
    {
      id: 'pioneer-girls',
      name: 'Pioneer Girls School',
      logo: '/pgslogo.webp',
      url: 'https://www.pioneergirlsschool.co.ke/',
      buttonText: 'Explore Pioneer Girls School'
    },
    {
      id: 'pioneer',
      name: 'Pioneer School',
      logo: '/pslogo.webp',
      url: 'https://www.pioneerschools.ac.ke/',
      buttonText: 'Explore Pioneer School'
    }
  ];

  const handleSchoolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#083056] font-serif">
      {/* Hero Carousel Section */}
      <section className="relative w-full">
        <div className="container-fluid py-1">
          {/* Swiper Carousel */}
          <div className="relative w-full lg:h-[500px] overflow-hidden rounded-b-3xl shadow-2xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
              }}
              className="h-full swiper-container"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="flex items-center justify-center">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-contain"
                    />
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-10 sm:py-12 lg:py-14 px-4">
        <div className="w-full">
          {/* Schools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-5  gap-6 lg:gap-8">
            {schools.map((school) => (
              <div
                key={school.id}
                className="group bg-[#083056] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                {/* School Logo */}
                <div className="flex justify-center mb-4">
                  <div className="w-auto h-32 overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={school.logo}
                      alt={`${school.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* School Name */}
                <h3 className="text-center text-[#f4a025] font-semibold text-lg sm:text-md mb-4 min-h-[3rem] flex items-center justify-center">
                  {school.name}
                </h3>

                {/* Enter Button */}
                <button
                  onClick={() => handleSchoolClick(school.url)}
                  className="w-full bg-transparent border border-[#f4a025] hover:from-orange-500 hover:to-orange-600 text-white leading-compact font-light py-3 px-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-md sm:text-base whitespace-nowrap"
                >
                  {school.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#083056] text-white py-2 bottom-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-light">
            <span>
               &copy; {new Date().getFullYear()} Pioneer Educational Network. All rights reserved
            </span>
          </p>
        </div>
      </footer>

      {/* Custom Swiper Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .swiper-pagination-bullet {
            background: #f4a025 !important;
            opacity: 0.7;
          }
          
          .swiper-pagination-bullet-active {
            background: #f4a025 !important;
            opacity: 1;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            color: #f4a025 !important;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px !important;
          }
          
          .swiper-pagination {
            bottom: 20px !important;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            background: rgba(8, 48, 86, 0.8);
            width: 40px;
            height: 40px;
            margin-top: -20px;
            border-radius: 50%;
          }
        `
      }} />
    </div>
  );
};

export default LandingPage;