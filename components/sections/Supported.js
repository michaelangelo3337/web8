


'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        440: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        560: {
            slidesPerView: 3,
            spaceBetween: 30,
        }, 
        750: {
            slidesPerView: 4,
            spaceBetween: 30,
        },  
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 9,
            spaceBetween: 30,
        },
    },
}

export default function Supported() {
    return (
        <>

            <section className="tf-section supported">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    We are supported
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w_1710 brand_wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brand">
                                <div className="swiper-container slider-12" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_1.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_2.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_3.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_4.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_5.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_6.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_7.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_8.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_9.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_1.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_2.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="image">
                                                <img src="/assets/images/common/brand_3.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
