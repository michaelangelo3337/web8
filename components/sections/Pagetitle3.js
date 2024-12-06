'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "../elements/CounterUp"

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

export default function Pagetitle3() {
    return (
        <>

            <section className="page-title st3">
                <div className="overlay">
                </div>
                <div className="swiper-container slider-main">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-st3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">Gamifying of the
                                                        metaverse</h1>
                                                    <p className="sub-title">NFTs and the metaverse are the future, but
                                                        investing in the space isn’t easy. We make it simple.</p>
                                                    <div className="wrap-btn">
                                                        <Link href="/project-list" className="tf-button style2">
                                                            LEARN MORE
                                                        </Link>
                                                    </div>
                                                    <div className="flat-box">
                                                        <div className="box-couter">
                                                            <p>Potential project</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2"><CounterUp count={700} time={1} />+</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Market cap</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">$<CounterUp count={570} time={1} /> M</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Investors</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2"><CounterUp count={7} time={1} /></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="img_main" src="assets/images/common/img_slider3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-st3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">Gamifying of the
                                                        metaverse</h1>
                                                    <p className="sub-title">NFTs and the metaverse are the future, but
                                                        investing in the space isn’t easy. We make it simple.</p>
                                                    <div className="wrap-btn">
                                                        <Link href="/project-list" className="tf-button style2">
                                                            LEARN MORE
                                                        </Link>
                                                    </div>
                                                    <div className="flat-box">
                                                        <div className="box-couter">
                                                            <p>Potential project</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">700+</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Market cap</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">$570.24 M</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Investors</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">6.297</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="img_main" src="assets/images/common/img_slider3.png" alt="" />
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
