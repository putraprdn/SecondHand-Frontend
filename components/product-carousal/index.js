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
        navigation={true}
        modules={[Pagination, Navigation]}
        className='swiper-container'
      >
        <SwiperSlide>
          <div className="box">
            slide1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            slide2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            slide3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            slide4
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductCarousal