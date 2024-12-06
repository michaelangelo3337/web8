
import Link from "next/link"

export default function Cta1() {
    return (
        <>

            <section className="tf-section tf_CTA">
                <div className="container relative">
                    <div className="overlay">
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left mt58" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Papa Bonk To The Moon!
                                </h2>
                                <p className="sub">Join the Papa Bonk community and be part of the revolution!</p>
                                <div className="wrap-btn">
                                    <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                        Stake Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                <img className="move4" src="/assets/images/common/img_cta.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
