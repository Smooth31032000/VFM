/** @format */
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import rightIcon from "~/assets/icons/rightArrow.svg";
import leftIcon from "~/assets/icons/leftArrow.svg";
import "./style.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { SwiperItemData } from "~/services/api";

export const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grid={{
          rows: 2,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperItemData.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => console.log("click", item.id)}
          >
            <img
              className="rounded-md border border-[#FE8420]  w-[38px] h-[38px] object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="text-[#4E4E4E] text-[12px] font-normal">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
        <div>
          <img
            className="swiper-button-next object-scale-down"
            src={rightIcon}
            alt="rightIcon"
          />
        </div>
        <div>
          <img
            className="swiper-button-prev object-scale-down"
            src={leftIcon}
            alt="leftIcon"
          />
        </div>
      </Swiper>
    </>
  );
};
