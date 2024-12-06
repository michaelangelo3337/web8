'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-next-main",
        prevEl: ".btn-prev-main",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
}

export default function Pagetitle2() {
    return (
        <>

            <section className="page-title">
                <div className="swiper-container slider-main">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-st2">
                                <img className="icon icon_1" src="/assets/images/common/icon1_slider_2.png" alt="" />
                                <img className="icon icon_2" src="/assets/images/common/icon2_slider_2.png" alt="" />
                                <img className="icon icon_3" src="/assets/images/common/icon3_slider_2.png" alt="" />
                                <div className="overlay">
                                    <img src="/assets/images//backgroup/bg-slider2.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">Become an early investor in the top Blockchain Games,
                                                        NFTs and Metaverses</h1>
                                                    <p className="sub-title">Risebot is the leading blockchain gaming launchpad
                                                        with over 50 projects launched and the <br className="show-destop" />
                                                        highest average ROI in the industry</p>
                                                    <div className="wrap-btn">
                                                        <Link href="/faq" className="tf-button style2">
                                                            HOW TO START
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-st2">
                                <div className="overlay">
                                    <img src="/assets/images//backgroup/bg-slider2.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">Become an early investor in the top Blockchain Games,
                                                        NFTs and Metaverses</h1>
                                                    <p className="sub-title">Risebot is the leading blockchain gaming launchpad
                                                        with over 50 projects launched and the highest average ROI in the
                                                        industry</p>
                                                    <div className="wrap-btn">
                                                        <Link href="#" className="tf-button style2">
                                                            HOW TO START
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="btn-next-main"><i className="far fa-angle-right" /></div>
                    <div className="btn-prev-main"><i className="far fa-angle-left" /></div>
                    <div className="swiper-pagination" />
                </div>
            </section>
        </>
    )
}
