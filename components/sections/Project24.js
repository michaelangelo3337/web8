'use client'
import { useState } from "react"
import Link from "next/link"
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

export default function Project24() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="tf-section project_2">
                <div className="overlay" />
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
                                            <div className="swiper-container slider-3">
                                                <Swiper {...swiperOptions3}>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
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
                                            <div className="swiper-container slider-3">
                                            <Swiper {...swiperOptions3}>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
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
                                    <div className="content-inner" style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                                        <div className="container_inner">
                                            <div className="swiper-container slider-3">
                                            <Swiper {...swiperOptions3}>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">kingdom
                                                                    rush...</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_27.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Evil
                                                                    Lands</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_26.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Grid Auto
                                                                    Sport</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3"/>
                                                        <div className="project-box-style7">
                                                            <div className="image">
                                                                <img src="/assets/images/common/project_28.png" alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="heading"><Link href="/project-grid">Realm
                                                                    Defense</Link></h5>
                                                                <ul>
                                                                    <li>
                                                                        <p>Min allocation</p>
                                                                        <p>0.01</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Maximum</p>
                                                                        <p>TBA</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Access</p>
                                                                        <p>Public</p>
                                                                    </li>
                                                                </ul>
                                                                <div className="content-progress-box style2">
                                                                    <div className="progress-bar" data-percentage="89%">
                                                                        <p className="progress-title-holder">
                                                                            <span className="progress-title">
                                                                                <span className="progress_number">
                                                                                    <span className="white">Progress </span>
                                                                                    <span className="progress-number-mark">
                                                                                        <span>500.000 BUSD</span> <span className="percent" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <div className="progress-content-outter">
                                                                            <div className="progress-content" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg_style">
                                                                <div className="image_inner">
                                                                    <img src="/assets/images/backgroup/bg_project_1.png" alt="" />
                                                                    <div className="icon">
                                                                        <svg width={12} height={18} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.6686 11.2128L6.58857 17.7045C6.51931 17.7947 6.43036 17.8682 6.32841 17.9194C6.22647 17.9705 6.11418 17.998 6 17.9998V13.0757L11.2229 10.6562C11.2978 10.6208 11.3826 10.6117 11.4634 10.6303C11.5442 10.6489 11.6164 10.6941 11.668 10.7586C11.7197 10.8231 11.7479 10.9031 11.748 10.9856C11.7481 11.0681 11.7201 11.1481 11.6686 11.2128Z" fill="white" />
                                                                            <path d="M6.00091 13.0757V17.9998C5.88672 17.998 5.77444 17.9705 5.67249 17.9194C5.57055 17.8682 5.4816 17.7947 5.41234 17.7045L0.332327 11.2128C0.280814 11.1481 0.252831 11.0681 0.25293 10.9856C0.253029 10.9031 0.281205 10.8231 0.332873 10.7586C0.384541 10.6941 0.456658 10.6489 0.537488 10.6303C0.618318 10.6117 0.703103 10.6208 0.778042 10.6562L6.00091 13.0757Z" fill="white" />
                                                                            <path d="M5.99947 6.97485V11.9161C5.93001 11.918 5.8612 11.9023 5.79947 11.8706L0.26803 9.2126C0.205378 9.18093 0.150426 9.13608 0.107002 9.08115C0.0635789 9.02622 0.032729 8.96253 0.0166016 8.89454L5.99947 6.97485Z" fill="white" />
                                                                            <path d="M5.99993 8.36809e-08V6.97448L0.0170624 8.89417C-0.00103379 8.82816 -0.00478768 8.75907 0.00604991 8.6915C0.0168875 8.62393 0.0420677 8.55943 0.0799189 8.50228L5.3885 0.340773C5.45248 0.23664 5.54231 0.150604 5.64939 0.0909285C5.75646 0.0312526 5.87717 -5.90778e-05 5.99993 8.36809e-08V8.36809e-08Z" fill="white" />
                                                                            <path d="M11.9829 8.89417L6 6.97448V8.36809e-08C6.12276 -5.90778e-05 6.24347 0.0312526 6.35054 0.0909285C6.45762 0.150604 6.54745 0.23664 6.61143 0.340773L11.92 8.50228C11.9579 8.55943 11.983 8.62393 11.9939 8.6915C12.0047 8.75907 12.001 8.82816 11.9829 8.89417V8.89417Z" fill="white" />
                                                                            <path d="M11.9829 8.89454C11.9667 8.96253 11.9359 9.02622 11.8925 9.08115C11.849 9.13608 11.7941 9.18093 11.7314 9.2126L6.2 11.8706C6.13827 11.9023 6.06946 11.918 6 11.9161V6.97485L11.9829 8.89454Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
