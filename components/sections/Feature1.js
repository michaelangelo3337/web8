

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-10",
        prevEl: ".prev_slider-10",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}

export default function Feature1() {
    return (
        <>

            <section className="tf-section fueture">
                <div className="container w_1320">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container_inner">
                                <div className="swiper-container slider-10" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_1.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/project-list">Potential Project</Link></h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    1
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_2.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/project-list">High Feasibility</Link></h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    2
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_3.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/project-list">Easy Withdrawal</Link></h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                            at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    3
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="next_slider-10 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-10 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="col-md-12 mt30">
                                    <p className="desc text-center mb20">
                                        At Risebot, we bring projects with great potential that bring huge profits <br className="show-destop" />
                                        auctor euismod magna etiam diam velit, ultrices vel feugiat a, varius quis felis.
                                        Integer tempor efficitur mollis
                                    </p>
                                    <div className="wrap-btn justify-content-center">
                                        <Link href="/submit-IGO-on-chain" className="tf-button style1">
                                            JOIN US
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
