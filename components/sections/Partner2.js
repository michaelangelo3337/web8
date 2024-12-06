

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 10,
            spaceBetween: 30,
        },
    },
}


export default function Partner2() {
    return (
        <>

            <section className="tf-section partner">
                <div className="container full">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="partner-wrapper">
                                <div className="swiper-container slider-9" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/01.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/02.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/03.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/04.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/05.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/06.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/07.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/08.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/09.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/10.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/11.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/12.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/13.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/14.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/15.png" alt="" />
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Link href="/home-03" className="image ">
                                                <img src="/assets/images/partner/16.png" alt="" />
                                            </Link>
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
