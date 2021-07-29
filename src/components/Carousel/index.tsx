import { theme } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem } from "./CarouselItem";

export function Carousel() {
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      style={{
        width: "1240px",
        height: "450px",
        display: "flex",
        marginBottom: "40px",
        marginTop: "52px",
        justifyContent: "center",
        alignItems: "center",

        "--swiper-navigation-color": `${theme.colors.yellow[500]}`,
        "--swiper-pagination-color": `${theme.colors.yellow[500]}`,
      }}
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => {
        console.log(swiper);
      }}
      mousewheel={true}
      keyboard={true}
    >
      <SwiperSlide>
        <CarouselItem
          image="/images/sliderImage.png"
          title="Europa"
          subtitle="O continente mais antigo"
          link="europe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image="/images/banner2.jpg"
          title="Ásia"
          subtitle="É a ásia"
        />
      </SwiperSlide>
    </Swiper>
  );
}
