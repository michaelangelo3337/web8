'use client'
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

import Link from "next/link"

export default function Pagetitle1() {
    return (
        <>

            <section className="page-title">
                <div className="icon_bg">
                    <img src="/assets/images/backgroup/bg_inner_slider.png" alt="" />
                </div>
                <div className="swiper-container slider-main">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-st1">
                                <div className="overlay">
                                    <img src="/assets/images//backgroup/bg-slider.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">The leading father of Blockchain Memecoins.</h1>
                                                    <p className="sub-title">Revolutionizing the meme coin space with a focus on utility and innovation.</p>
                                                    <div className="wrap-btn">
                                                        <Link href="/presale" className="tf-button style2">
                                                            JOIN PRESALE
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="img_main" src="assets/images/slider/Furore.png" alt="" />
                                                    <div className="icon icon1">
                                                        <img src="/assets//images//slider/icon_1.png" alt="" />
                                                    </div>
                                                    <div className="icon icon2">
                                                        <img src="/assets//images//slider/icon_2.png" alt="" />
                                                    </div>
                                                    <div className="icon icon3">
                                                        <img src="/assets//images//slider/icon_3.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-st1">
                                <div className="overlay">
                                    <img src="/assets/images//backgroup/bg-slider.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">Enter the gateway of Blockchain Gaming</h1>
                                                    <p className="sub-title">Visually and spatially connecting games in a
                                                        seamless metaverse experience</p>
                                                    <div className="wrap-btn">
                                                        <Link href="#" className="tf-button style2">
                                                            EXPLORE IGO
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="img_main" src="assets/images/slider/Furore.png" alt="" />
                                                    <div className="icon icon1">
                                                        <img src="/assets//images//slider/icon_1.png" alt="" />
                                                    </div>
                                                    <div className="icon icon2">
                                                        <img src="/assets//images//slider/icon_2.png" alt="" />
                                                    </div>
                                                    <div className="icon icon3">
                                                        <img src="/assets//images//slider/icon_3.png" alt="" />
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
