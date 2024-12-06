
'use client'
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions3 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-3",
        prevEl: ".prev_slider-3",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}
const swiperOptions4 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-4",
        prevEl: ".prev_slider-4",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}
const swiperOptions5 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-5",
        prevEl: ".prev_slider-5",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}

export default function Project22() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="tf-section project">
                <div className="container w_1280">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title mb20" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    projects we recommend
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-tabs" data-aos="fade-up" data-aos-duration={1000}>
                                <ul className="menu-tab">
                                    <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}><span>oncoming</span></li>
                                    <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Upcoming</span></li>
                                    <li className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>ended</span></li>
                                </ul>
                                <div className="content-tab">
                                    <div className="content-inner" style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                        <div className="container_inner">
                                            <div className="swiper-container slider-3" data-aos="fade-in" data-aos-duration={1000}>
                                                <Swiper {...swiperOptions3} className="swiper-wrapper">
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="next_slider-3 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                            <div className="prev_slider-3 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                        <div className="container_inner">
                                            <div className="swiper-container slider-4" data-aos="fade-in" data-aos-duration={1000}>
                                                <Swiper {...swiperOptions4} className="swiper-wrapper">
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="next_slider-4 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                            <div className="prev_slider-4 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-inner" style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                                        <div className="container_inner">
                                            <div className="swiper-container slider-5" data-aos="fade-in" data-aos-duration={1000}>
                                                <Swiper {...swiperOptions5} className="swiper-wrapper">
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_16.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Dead
                                                                    Trigger 2</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_13.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Oddmar</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">$Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_14.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Fruit
                                                                    Ninja</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-3" />
                                                        <div className="project-box-style4">
                                                            <div className="image">
                                                                <div className="img_inner">
                                                                    <img src="/assets/images/common/project_15.png" alt="" />
                                                                    <img className="shape" src="/assets/images/common/shap.png" alt="" />
                                                                </div>
                                                                <div className="label">
                                                                    1ST Phase
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Shadowgun Legends</Link>
                                                                </h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit.
                                                                    Praesent varius risus sed pellentesque</p>
                                                                <ul>
                                                                    <li>
                                                                        <p className="text">Min allocation</p>
                                                                        <p className="price">0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Maximum</p>
                                                                        <p className="price">TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text">Access</p>
                                                                        <p className="price">Public</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="next_slider-5 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                            <div className="prev_slider-5 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                        </div>
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
