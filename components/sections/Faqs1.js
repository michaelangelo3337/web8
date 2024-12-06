
import Link from "next/link"
import Accordion1 from "../elements/Accordion1"

export default function Faqs1() {
    return (
        <>

            <section className="tf-section FAQs">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    frequently asked questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Accordion1 />
                        </div>
                        <div className="col-md-12">
                            <div className="content_faq text-center">
                                <p>If you don`t find an answer, contact with our experts</p>
                                <div className="wrap-btn">
                                    <Link href="/contact" className="tf-button style1">
                                        get in touch
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
