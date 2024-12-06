

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-8",
        prevEl: ".prev_slider-8",
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
}

export default function Project23() {
    return (
        <>

            <section className="tf-section project2">
                <div className="container w_1280">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Completed Project
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="container_inner">
                                <div className="swiper-container slider-8" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project-box-style5">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img className="mask" src="/assets/images/common/project_21.png" alt="" />
                                                        <div className="shape">
                                                            <img src="/assets/images/common/shape.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-grid">Garena Free Fire
                                                            MAX</Link></h5>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Praesent varius risus sed pellentesque</p>
                                                    </div>
                                                </div>
                                                <div className="content-inner">
                                                    <div className="total">
                                                        <h6>Total raise</h6>
                                                        <p className="price">332497.30 BUSD</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <p className="text">Maximum</p>
                                                            <p className="price">2889.18 BUSD</p>
                                                        </li>
                                                        <li>
                                                            <p className="text">Access</p>
                                                            <p className="price">23M</p>
                                                        </li>
                                                    </ul>
                                                    <div className="content-progress-box style2">
                                                        <div className="progress-bar" data-percentage="100%">
                                                            <p className="progress-title-holder">
                                                                <span className="progress-title">
                                                                    <span className="white">Progress</span>
                                                                    <span>Max Participants <span className="white">4472</span></span>
                                                                </span>
                                                            </p>
                                                            <div className="progress-content-outter">
                                                                <div className="progress-content" />
                                                            </div>
                                                            <span className="progress-number-wrapper">
                                                                <span className="progress-number-mark">
                                                                    <span className="white percent" />
                                                                </span>
                                                                <span className="total">6649945.92/6650000 BVC</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style5">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img className="mask" src="/assets/images/common/project_1.png" alt="" />
                                                        <div className="shape">
                                                            <img src="/assets/images/common/shape.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Praesent varius risus sed pellentesque</p>
                                                    </div>
                                                </div>
                                                <div className="content-inner">
                                                    <div className="total">
                                                        <h6>Total raise</h6>
                                                        <p className="price">332497.30 BUSD</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <p className="text">Maximum</p>
                                                            <p className="price">2889.18 BUSD</p>
                                                        </li>
                                                        <li>
                                                            <p className="text">Access</p>
                                                            <p className="price">23M</p>
                                                        </li>
                                                    </ul>
                                                    <div className="content-progress-box style2">
                                                        <div className="progress-bar" data-percentage="100%">
                                                            <p className="progress-title-holder">
                                                                <span className="progress-title">
                                                                    <span className="white">Progress</span>
                                                                    <span>Max Participants <span className="white">4472</span></span>
                                                                </span>
                                                            </p>
                                                            <div className="progress-content-outter">
                                                                <div className="progress-content" />
                                                            </div>
                                                            <span className="progress-number-wrapper">
                                                                <span className="progress-number-mark">
                                                                    <span className="white percent" />
                                                                </span>
                                                                <span className="total">6649945.92/6650000 BVC</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style5">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img className="mask" src="/assets/images/common/project_21.png" alt="" />
                                                        <div className="shape">
                                                            <img src="/assets/images/common/shape.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-grid">Garena Free Fire
                                                            MAX</Link></h5>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Praesent varius risus sed pellentesque</p>
                                                    </div>
                                                </div>
                                                <div className="content-inner">
                                                    <div className="total">
                                                        <h6>Total raise</h6>
                                                        <p className="price">332497.30 BUSD</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <p className="text">Maximum</p>
                                                            <p className="price">2889.18 BUSD</p>
                                                        </li>
                                                        <li>
                                                            <p className="text">Access</p>
                                                            <p className="price">23M</p>
                                                        </li>
                                                    </ul>
                                                    <div className="content-progress-box style2">
                                                        <div className="progress-bar" data-percentage="100%">
                                                            <p className="progress-title-holder">
                                                                <span className="progress-title">
                                                                    <span className="white">Progress</span>
                                                                    <span>Max Participants <span className="white">4472</span></span>
                                                                </span>
                                                            </p>
                                                            <div className="progress-content-outter">
                                                                <div className="progress-content" />
                                                            </div>
                                                            <span className="progress-number-wrapper">
                                                                <span className="progress-number-mark">
                                                                    <span className="white percent" />
                                                                </span>
                                                                <span className="total">6649945.92/6650000 BVC</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style5">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img className="mask" src="/assets/images/common/project_1.png" alt="" />
                                                        <div className="shape">
                                                            <img src="/assets/images/common/shape.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Praesent varius risus sed pellentesque</p>
                                                    </div>
                                                </div>
                                                <div className="content-inner">
                                                    <div className="total">
                                                        <h6>Total raise</h6>
                                                        <p className="price">332497.30 BUSD</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <p className="text">Maximum</p>
                                                            <p className="price">2889.18 BUSD</p>
                                                        </li>
                                                        <li>
                                                            <p className="text">Access</p>
                                                            <p className="price">23M</p>
                                                        </li>
                                                    </ul>
                                                    <div className="content-progress-box style2">
                                                        <div className="progress-bar" data-percentage="100%">
                                                            <p className="progress-title-holder">
                                                                <span className="progress-title">
                                                                    <span className="white">Progress</span>
                                                                    <span>Max Participants <span className="white">4472</span></span>
                                                                </span>
                                                            </p>
                                                            <div className="progress-content-outter">
                                                                <div className="progress-content" />
                                                            </div>
                                                            <span className="progress-number-wrapper">
                                                                <span className="progress-number-mark">
                                                                    <span className="white percent" />
                                                                </span>
                                                                <span className="total">6649945.92/6650000 BVC</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="next_slider-8 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-8 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
