
import Link from "next/link"

export default function Project31() {
    return (
        <>

            <section className="tf-section project_3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Easy to join IGO <br className="show-destop" /> with 3 steps
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="project-box-style2_wrapper">
                                <div className="project-box-style2" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>
                                    <div className="image">
                                        <img src="/assets/images/common/project_5.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Submit KYC</h5>
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
                                            nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                        <p className="number">01</p>
                                    </div>
                                    <Link href="#" className="btn_project">
                                        <img src="/assets/images/common/button_project.svg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-box-style2" data-aos="fade-up" data-aos-delay={200} data-aos-duration={800}>
                                    <div className="image">
                                        <img src="/assets/images/common/project_6.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Verify Wallet</h5>
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
                                            nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                        <p className="number">02</p>
                                    </div>
                                    <Link href="#" className="btn_project">
                                        <img src="/assets/images/common/button_project.svg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-box-style2" data-aos="fade-up" data-aos-delay={300} data-aos-duration={800}>
                                    <div className="image">
                                        <img src="/assets/images/common/project_7.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Start Staking</h5>
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
                                            nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                        <p className="number">03</p>
                                    </div>
                                    <Link href="#" className="btn_project">
                                        <img src="/assets/images/common/button_project.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
