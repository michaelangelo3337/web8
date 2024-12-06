
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Roadmap() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Roadmap">
                <div>
                    <section className="tf-section roadmap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="left">
                                            <div className="roadmap-box-style active">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="roadmap-box-style active">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="roadmap-box-style">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="roadmap-box-style">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="roadmap-box-style active">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="roadmap-box-style active">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="roadmap-box-style">
                                                <div className="icon">
                                                    <img src="/assets/images/common/down.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="date">April 16, 2022</h6>
                                                    <ul>
                                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section tf_CTA">
                        <div className="container relative">
                            <div className="overlay">
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tf-title left mt56" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Launch on Risebot
                                        </h2>
                                        <p className="sub">Full support in project incubation</p>
                                        <div className="wrap-btn">
                                            <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                                Apply Now
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
                </div>

            </Layout>
        </>
    )
}