

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-11",
        prevEl: ".prev_slider-11",
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

import Link from "next/link"
import CountDownTime from "../elements/CountDownTime"

export default function Project32() {
    return (
        <>

            <section className="tf-section project">
                <div className="container w_1280">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Our featured projects
                                </h2>
                                <div className="featured-countdown style2">
                                    <p className="featured_title">Sale end in</p>
                                    <span className="slogan" />
                                    <CountDownTime />
                                    <ul className="desc">
                                        <li>day</li>
                                        <li>hou</li>
                                        <li>min</li>
                                        <li>sec</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="container_inner">
                                <div className="swiper-container slider-11" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project-box-style6">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img src="/assets/images/common/project_22.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="img-box">
                                                            <div className="image_inner">
                                                                <img className="mask" src="/assets/images/common/project_24.png" alt="" />
                                                                <div className="shape">
                                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="content-inner">
                                                                <h5 className="heading"><Link href="/project-grid">Modern
                                                                    Combat Versus</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Praesent varius risus sed pellentesque
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="content-bottom">
                                                            <div className="content-progress-box style2">
                                                                <div className="progress-bar" data-percentage="95%">
                                                                    <p className="progress-title-holder">
                                                                        <span className="progress-title">
                                                                            <span className="progress_number">
                                                                                <span className="white">Total Raised: </span>
                                                                                <span className="progress-number-mark">
                                                                                    <span className="percent" />
                                                                                </span>
                                                                            </span>
                                                                            <span>$450,000 / $500,000</span>
                                                                        </span>
                                                                    </p>
                                                                    <div className="progress-content-outter">
                                                                        <div className="progress-content" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="sub-content">
                                                                <li>
                                                                    <p>Valuation</p>
                                                                    <p>278K</p>
                                                                </li>
                                                                <li>
                                                                    <p>Access</p>
                                                                    <p>Public Access</p>
                                                                </li>
                                                                <li>
                                                                    <p>Base allo</p>
                                                                    <p>$0</p>
                                                                </li>
                                                            </ul>
                                                            <ul className="social">
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_207)">
                                                                                <path d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z" fill="#798DA3" />
                                                                                <path d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_217)">
                                                                                <path d="M11 1.46655C8.16933 1.46655 5.86667 3.76922 5.86667 6.59989V15.3999C5.86667 15.8032 5.53813 16.1332 5.13333 16.1332C4.72853 16.1332 4.4 15.8032 4.4 15.3999V11.7332H0V15.3999C0 18.2306 2.30267 20.5332 5.13333 20.5332C7.964 20.5332 10.2667 18.2306 10.2667 15.3999V6.59989C10.2667 6.19509 10.5952 5.86655 11 5.86655C11.4048 5.86655 11.7333 6.19509 11.7333 6.59989V9.38509L13.9333 10.8518L16.1333 9.38509V6.59989C16.1333 3.76922 13.8307 1.46655 11 1.46655Z" fill="#798DA3" />
                                                                                <path d="M17.6001 11.7331V15.3998C17.6001 15.8031 17.2701 16.1331 16.8667 16.1331C16.4634 16.1331 16.1334 15.8031 16.1334 15.3998V11.1479L14.3397 12.3433C14.2165 12.4254 14.0757 12.4665 13.9334 12.4665C13.7911 12.4665 13.6503 12.4254 13.5271 12.3433L11.7334 11.1479V15.3998C11.7334 18.2305 14.0361 20.5331 16.8667 20.5331C19.6974 20.5331 22.0001 18.2305 22.0001 15.3998V11.7331H17.6001Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M13.913 6.12039C13.913 4.56668 14.5094 3.75813 15.3516 3.75813C16.1537 3.75813 16.688 4.48388 16.688 5.95479C16.688 6.79181 16.4654 7.70902 16.3011 8.25108C16.3024 8.25237 17.1006 9.65601 19.2844 9.22522C19.7475 8.18769 19.9998 6.84355 19.9998 5.66501C19.9998 2.4942 18.3956 0.649414 15.4564 0.649414C12.433 0.649414 10.6659 2.99227 10.6659 6.08028C10.6659 9.13983 12.085 11.7673 14.424 12.964C13.4408 14.9472 12.1885 16.6949 10.8832 18.0119C8.51578 15.1244 6.37474 11.2744 5.49503 3.75942H1.99951C3.61402 16.2758 8.42522 20.2603 9.69691 21.0262C10.4162 21.4621 11.0372 21.4414 11.6943 21.0676C12.7267 20.4751 15.8289 17.3495 17.547 13.6871C18.2675 13.6845 19.1343 13.6017 19.9985 13.4038V10.9393C19.4694 11.0622 18.9584 11.1166 18.4978 11.1166C15.9066 11.1166 13.913 9.29249 13.913 6.12039Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={14} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4378 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1813 3.26 19.2651 3.28337 19.3325 3.24625L20.7144 2.51337C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56062 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14088 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7482 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60288 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40437 10.7731 5.08188L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style6">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img src="/assets/images/common/project_23.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="img-box">
                                                            <div className="image_inner">
                                                                <img className="mask" src="/assets/images/common/project_25.png" alt="" />
                                                                <div className="shape">
                                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="content-inner">
                                                                <h5 className="heading"><Link href="/project-grid">Mini World:
                                                                    CREATA</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Praesent varius risus sed pellentesque
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="content-bottom">
                                                            <div className="content-progress-box style2">
                                                                <div className="progress-bar" data-percentage="95%">
                                                                    <p className="progress-title-holder">
                                                                        <span className="progress-title">
                                                                            <span className="progress_number">
                                                                                <span className="white">Total Raised: </span>
                                                                                <span className="progress-number-mark">
                                                                                    <span className="percent" />
                                                                                </span>
                                                                            </span>
                                                                            <span>$450,000 / $500,000</span>
                                                                        </span>
                                                                    </p>
                                                                    <div className="progress-content-outter">
                                                                        <div className="progress-content" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="sub-content">
                                                                <li>
                                                                    <p>Valuation</p>
                                                                    <p>278K</p>
                                                                </li>
                                                                <li>
                                                                    <p>Access</p>
                                                                    <p>Public Access</p>
                                                                </li>
                                                                <li>
                                                                    <p>Base allo</p>
                                                                    <p>$0</p>
                                                                </li>
                                                            </ul>
                                                            <ul className="social">
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_207)">
                                                                                <path d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z" fill="#798DA3" />
                                                                                <path d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_217)">
                                                                                <path d="M11 1.46655C8.16933 1.46655 5.86667 3.76922 5.86667 6.59989V15.3999C5.86667 15.8032 5.53813 16.1332 5.13333 16.1332C4.72853 16.1332 4.4 15.8032 4.4 15.3999V11.7332H0V15.3999C0 18.2306 2.30267 20.5332 5.13333 20.5332C7.964 20.5332 10.2667 18.2306 10.2667 15.3999V6.59989C10.2667 6.19509 10.5952 5.86655 11 5.86655C11.4048 5.86655 11.7333 6.19509 11.7333 6.59989V9.38509L13.9333 10.8518L16.1333 9.38509V6.59989C16.1333 3.76922 13.8307 1.46655 11 1.46655Z" fill="#798DA3" />
                                                                                <path d="M17.6001 11.7331V15.3998C17.6001 15.8031 17.2701 16.1331 16.8667 16.1331C16.4634 16.1331 16.1334 15.8031 16.1334 15.3998V11.1479L14.3397 12.3433C14.2165 12.4254 14.0757 12.4665 13.9334 12.4665C13.7911 12.4665 13.6503 12.4254 13.5271 12.3433L11.7334 11.1479V15.3998C11.7334 18.2305 14.0361 20.5331 16.8667 20.5331C19.6974 20.5331 22.0001 18.2305 22.0001 15.3998V11.7331H17.6001Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M13.913 6.12039C13.913 4.56668 14.5094 3.75813 15.3516 3.75813C16.1537 3.75813 16.688 4.48388 16.688 5.95479C16.688 6.79181 16.4654 7.70902 16.3011 8.25108C16.3024 8.25237 17.1006 9.65601 19.2844 9.22522C19.7475 8.18769 19.9998 6.84355 19.9998 5.66501C19.9998 2.4942 18.3956 0.649414 15.4564 0.649414C12.433 0.649414 10.6659 2.99227 10.6659 6.08028C10.6659 9.13983 12.085 11.7673 14.424 12.964C13.4408 14.9472 12.1885 16.6949 10.8832 18.0119C8.51578 15.1244 6.37474 11.2744 5.49503 3.75942H1.99951C3.61402 16.2758 8.42522 20.2603 9.69691 21.0262C10.4162 21.4621 11.0372 21.4414 11.6943 21.0676C12.7267 20.4751 15.8289 17.3495 17.547 13.6871C18.2675 13.6845 19.1343 13.6017 19.9985 13.4038V10.9393C19.4694 11.0622 18.9584 11.1166 18.4978 11.1166C15.9066 11.1166 13.913 9.29249 13.913 6.12039Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={14} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4378 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1813 3.26 19.2651 3.28337 19.3325 3.24625L20.7144 2.51337C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56062 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14088 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7482 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60288 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40437 10.7731 5.08188L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style6">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img src="/assets/images/common/project_22.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="img-box">
                                                            <div className="image_inner">
                                                                <img className="mask" src="/assets/images/common/project_24.png" alt="" />
                                                                <div className="shape">
                                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="content-inner">
                                                                <h5 className="heading"><Link href="/project-grid">Modern
                                                                    Combat Versus</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Praesent varius risus sed pellentesque
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="content-bottom">
                                                            <div className="content-progress-box style2">
                                                                <div className="progress-bar" data-percentage="95%">
                                                                    <p className="progress-title-holder">
                                                                        <span className="progress-title">
                                                                            <span className="progress_number">
                                                                                <span className="white">Total Raised: </span>
                                                                                <span className="progress-number-mark">
                                                                                    <span className="percent" />
                                                                                </span>
                                                                            </span>
                                                                            <span>$450,000 / $500,000</span>
                                                                        </span>
                                                                    </p>
                                                                    <div className="progress-content-outter">
                                                                        <div className="progress-content" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="sub-content">
                                                                <li>
                                                                    <p>Valuation</p>
                                                                    <p>278K</p>
                                                                </li>
                                                                <li>
                                                                    <p>Access</p>
                                                                    <p>Public Access</p>
                                                                </li>
                                                                <li>
                                                                    <p>Base allo</p>
                                                                    <p>$0</p>
                                                                </li>
                                                            </ul>
                                                            <ul className="social">
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_207)">
                                                                                <path d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z" fill="#798DA3" />
                                                                                <path d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_217)">
                                                                                <path d="M11 1.46655C8.16933 1.46655 5.86667 3.76922 5.86667 6.59989V15.3999C5.86667 15.8032 5.53813 16.1332 5.13333 16.1332C4.72853 16.1332 4.4 15.8032 4.4 15.3999V11.7332H0V15.3999C0 18.2306 2.30267 20.5332 5.13333 20.5332C7.964 20.5332 10.2667 18.2306 10.2667 15.3999V6.59989C10.2667 6.19509 10.5952 5.86655 11 5.86655C11.4048 5.86655 11.7333 6.19509 11.7333 6.59989V9.38509L13.9333 10.8518L16.1333 9.38509V6.59989C16.1333 3.76922 13.8307 1.46655 11 1.46655Z" fill="#798DA3" />
                                                                                <path d="M17.6001 11.7331V15.3998C17.6001 15.8031 17.2701 16.1331 16.8667 16.1331C16.4634 16.1331 16.1334 15.8031 16.1334 15.3998V11.1479L14.3397 12.3433C14.2165 12.4254 14.0757 12.4665 13.9334 12.4665C13.7911 12.4665 13.6503 12.4254 13.5271 12.3433L11.7334 11.1479V15.3998C11.7334 18.2305 14.0361 20.5331 16.8667 20.5331C19.6974 20.5331 22.0001 18.2305 22.0001 15.3998V11.7331H17.6001Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M13.913 6.12039C13.913 4.56668 14.5094 3.75813 15.3516 3.75813C16.1537 3.75813 16.688 4.48388 16.688 5.95479C16.688 6.79181 16.4654 7.70902 16.3011 8.25108C16.3024 8.25237 17.1006 9.65601 19.2844 9.22522C19.7475 8.18769 19.9998 6.84355 19.9998 5.66501C19.9998 2.4942 18.3956 0.649414 15.4564 0.649414C12.433 0.649414 10.6659 2.99227 10.6659 6.08028C10.6659 9.13983 12.085 11.7673 14.424 12.964C13.4408 14.9472 12.1885 16.6949 10.8832 18.0119C8.51578 15.1244 6.37474 11.2744 5.49503 3.75942H1.99951C3.61402 16.2758 8.42522 20.2603 9.69691 21.0262C10.4162 21.4621 11.0372 21.4414 11.6943 21.0676C12.7267 20.4751 15.8289 17.3495 17.547 13.6871C18.2675 13.6845 19.1343 13.6017 19.9985 13.4038V10.9393C19.4694 11.0622 18.9584 11.1166 18.4978 11.1166C15.9066 11.1166 13.913 9.29249 13.913 6.12039Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={14} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4378 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1813 3.26 19.2651 3.28337 19.3325 3.24625L20.7144 2.51337C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56062 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14088 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7482 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60288 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40437 10.7731 5.08188L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-box-style6">
                                                <span className="boder" />
                                                <div className="img-box">
                                                    <div className="image">
                                                        <img src="/assets/images/common/project_23.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="img-box">
                                                            <div className="image_inner">
                                                                <img className="mask" src="/assets/images/common/project_25.png" alt="" />
                                                                <div className="shape">
                                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="content-inner">
                                                                <h5 className="heading"><Link href="/project-grid">Mini World:
                                                                    CREATA</Link></h5>
                                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Praesent varius risus sed pellentesque
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="content-bottom">
                                                            <div className="content-progress-box style2">
                                                                <div className="progress-bar" data-percentage="95%">
                                                                    <p className="progress-title-holder">
                                                                        <span className="progress-title">
                                                                            <span className="progress_number">
                                                                                <span className="white">Total Raised: </span>
                                                                                <span className="progress-number-mark">
                                                                                    <span className="percent" />
                                                                                </span>
                                                                            </span>
                                                                            <span>$450,000 / $500,000</span>
                                                                        </span>
                                                                    </p>
                                                                    <div className="progress-content-outter">
                                                                        <div className="progress-content" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="sub-content">
                                                                <li>
                                                                    <p>Valuation</p>
                                                                    <p>278K</p>
                                                                </li>
                                                                <li>
                                                                    <p>Access</p>
                                                                    <p>Public Access</p>
                                                                </li>
                                                                <li>
                                                                    <p>Base allo</p>
                                                                    <p>$0</p>
                                                                </li>
                                                            </ul>
                                                            <ul className="social">
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_207)">
                                                                                <path d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z" fill="#798DA3" />
                                                                                <path d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_1208_217)">
                                                                                <path d="M11 1.46655C8.16933 1.46655 5.86667 3.76922 5.86667 6.59989V15.3999C5.86667 15.8032 5.53813 16.1332 5.13333 16.1332C4.72853 16.1332 4.4 15.8032 4.4 15.3999V11.7332H0V15.3999C0 18.2306 2.30267 20.5332 5.13333 20.5332C7.964 20.5332 10.2667 18.2306 10.2667 15.3999V6.59989C10.2667 6.19509 10.5952 5.86655 11 5.86655C11.4048 5.86655 11.7333 6.19509 11.7333 6.59989V9.38509L13.9333 10.8518L16.1333 9.38509V6.59989C16.1333 3.76922 13.8307 1.46655 11 1.46655Z" fill="#798DA3" />
                                                                                <path d="M17.6001 11.7331V15.3998C17.6001 15.8031 17.2701 16.1331 16.8667 16.1331C16.4634 16.1331 16.1334 15.8031 16.1334 15.3998V11.1479L14.3397 12.3433C14.2165 12.4254 14.0757 12.4665 13.9334 12.4665C13.7911 12.4665 13.6503 12.4254 13.5271 12.3433L11.7334 11.1479V15.3998C11.7334 18.2305 14.0361 20.5331 16.8667 20.5331C19.6974 20.5331 22.0001 18.2305 22.0001 15.3998V11.7331H17.6001Z" fill="#798DA3" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath>
                                                                                    <rect width={22} height={22} fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M13.913 6.12039C13.913 4.56668 14.5094 3.75813 15.3516 3.75813C16.1537 3.75813 16.688 4.48388 16.688 5.95479C16.688 6.79181 16.4654 7.70902 16.3011 8.25108C16.3024 8.25237 17.1006 9.65601 19.2844 9.22522C19.7475 8.18769 19.9998 6.84355 19.9998 5.66501C19.9998 2.4942 18.3956 0.649414 15.4564 0.649414C12.433 0.649414 10.6659 2.99227 10.6659 6.08028C10.6659 9.13983 12.085 11.7673 14.424 12.964C13.4408 14.9472 12.1885 16.6949 10.8832 18.0119C8.51578 15.1244 6.37474 11.2744 5.49503 3.75942H1.99951C3.61402 16.2758 8.42522 20.2603 9.69691 21.0262C10.4162 21.4621 11.0372 21.4414 11.6943 21.0676C12.7267 20.4751 15.8289 17.3495 17.547 13.6871C18.2675 13.6845 19.1343 13.6017 19.9985 13.4038V10.9393C19.4694 11.0622 18.9584 11.1166 18.4978 11.1166C15.9066 11.1166 13.913 9.29249 13.913 6.12039Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <svg width={22} height={14} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4378 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1813 3.26 19.2651 3.28337 19.3325 3.24625L20.7144 2.51337C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56062 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14088 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7482 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60288 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40437 10.7731 5.08188L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z" fill="#798DA3" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="next_slider-11 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-11 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
