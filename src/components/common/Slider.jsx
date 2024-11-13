import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumCard from "./AlbumCard.jsx";
import MerchandiseCard from "./MerchandiseCard.jsx";
import { Box } from "@mui/material";
import "swiper/swiper-bundle.css";

const AlbumSlider = ({ list, type }) => {
  return (
    type === "Album" ? (
      <Box style={{ maxWidth: "100%" }}>
        <Swiper
          spaceBetween={1}
          slidesPerView={7}
          slidesPerGroup={7}
          grabCursor={true}
          direction="horizontal"
          observer={true}
        >
          {list.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard album={album} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    ) : (
      <Box style={{ maxWidth: "100%" }}>
        <Swiper
          spaceBetween={1}
          slidesPerView={7}
          slidesPerGroup={7}
          grabCursor={true}
          direction="horizontal"
          observer={true}
        >
          {list.map((merchandise) => (
            <SwiperSlide key={merchandise.id}>
              <MerchandiseCard merchandise={merchandise} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    )
  );
};

export default AlbumSlider;
