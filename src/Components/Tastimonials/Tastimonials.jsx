import React from "react";
import "./Tastimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Tastimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero a deleniti atque esse eaque accusantium possimus ex. Fuga excepturi, mollitia voluptatibus libero earum esse maiores magnam ut reprehenderit voluptatum!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero a deleniti atque esse eaque accusantium possimus ex. Fuga excepturi, mollitia voluptatibus libero earum esse maiores magnam ut reprehenderit voluptatum!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero a deleniti atque esse eaque accusantium possimus ex. Fuga excepturi, mollitia voluptatibus libero earum esse maiores magnam ut reprehenderit voluptatum!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero a deleniti atque esse eaque accusantium possimus ex. Fuga excepturi, mollitia voluptatibus libero earum esse maiores magnam ut reprehenderit voluptatum!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testmonials">
      <div className="t-heading">
        <span>Clints always get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tastimonials;
