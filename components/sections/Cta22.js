
import Link from "next/link"

export default function Cta22() {
    return (
        <>

            <section className="tf-section tf_CTA_2">
                <div className="overlay">
                </div>
                <div className="container relative">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="tf-title left mb0" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    become our potential partner
                                </h2>
                                <p className="sub">Lorem ipsum dolor sit amet consectetur</p>
                                <div className="wrap-btn">
                                    <Link href="/submit-project" className="tf-button style3">
                                        Apply Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                <img className="move4" src="/assets/images/common/img_cta2.png" alt="" />
                                <img className="icon icon_1" src="/assets/images/common/icon_cta.png" alt="" />
                                <img className="icon icon_2" src="/assets/images/common/icon_cta_2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
