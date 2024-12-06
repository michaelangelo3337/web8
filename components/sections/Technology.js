

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 10,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
        }
    },
    pagination: {
        el: ".pagination_slider-6",
        clickable: true,
    },
}
export default function Technology() {
    return (
        <>

            <section className="tf-section technology">
                <div className="container w_1490">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-title" data-aos="fade-right" data-aos-duration={800}>
                                <div className="img_technology">
                                    <img src="/assets/images/common/img_technology1.png" alt="" />
                                    <img className="coin coin_1" src="/assets/images/common/coin1.png" alt="" />
                                    <img className="coin coin_2" src="/assets/images/common/coin2.png" alt="" />
                                    <img className="coin coin_3" src="/assets/images/common/coin3.png" alt="" />
                                    <img className="coin coin_4" src="/assets/images/common/coin4.png" alt="" />
                                    <img className="coin coin_5" src="/assets/images/common/coin5.png" alt="" />
                                    <img className="coin coin_6" src="/assets/images/common/coin6.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="content_technology" data-aos="fade-up" data-aos-duration={800}>
                                <div className="tf-title left">
                                    <h2 className="title mb20">
                                        Our technology supports multiple platforms
                                    </h2>
                                </div>
                                <p className="sub_technology">Cras molestie ullamcorper augue nec pulvinar. Ut suscipit
                                    tempor justo,
                                    sed aliquet eros ultricies eu. Nam mollis sapien ut sapien gravida sollicitudin.
                                    Mauris vel nisl quis dolor accumsan luctus.
                                </p>
                                <div className="swiper-container slider-6">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <img src="/assets/images/common/logo_tech_1.png" alt="" />
                                            <img src="/assets/images/common/logo_tech_3.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/common/logo_tech_2.png" alt="" />
                                            <img src="/assets/images/common/logo_tech_2.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/common/logo_tech_3.png" alt="" />
                                            <img src="/assets/images/common/logo_tech_1.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/common/logo_tech_4.png" alt="" />
                                            <img src="/assets/images/common/logo_tech_6.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-pagination pagination_slider-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
