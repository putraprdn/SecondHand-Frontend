/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductCarousal = ({ isProduct }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        loop={true}
        modules={[ Pagination, Navigation]}
        className='swiper-container'
      >
        {isProduct.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={item.image} alt="product-img" className="box"/>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ProductCarousal