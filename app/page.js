'use client'
import Layout from "@/components/layout/Layout"
import Cta1 from "@/components/sections/Cta1"
import Cta21 from "@/components/sections/Cta21"
import Pagetitle1 from "@/components/sections/Pagetitle1"
import Partner1 from "@/components/sections/Partner1"
import Project31 from "@/components/sections/Project31"
import Project4 from "@/components/sections/Project4"
import Feature2 from "@/components/sections/Feature2"
import Team1 from "@/components/sections/Team1"
import Token1 from "@/components/sections/Token1"
import Accordion1 from "@/components/elements/Accordion1"
import Link from "next/link"
import { useEffect, useState } from 'react'

export default function Home() {

    const [walletAddress, setWalletAddress] = useState(null);



    const stayConnect = async () => {
        try {
          if (window.solana && window.solana.isPhantom) {
              const response = await window.solana.connect(
                {onlyIfTrusted: true}
              );
              console.log(`Connected with Public Key: ${response.publicKey.toString()}`);
              console.log(`Wallet Successfully Connected!`, "success");
              setWalletAddress(response.publicKey.toString());
              //checkEligibility();
          } else {
              console.log("Solana Wallet not found! Please connect or install it.");
          }
          } catch (error) {
              console.error("Connection failed.", error);
          }};    






          useEffect(() => {
            stayConnect();
        }, []);

    return (
        <>

                <Layout headerStyle={1} footerStyle={1} walletAddress={walletAddress} setWalletAddress={setWalletAddress}>
                <Pagetitle1 />
                <Feature2 />
                <Cta21 />
                <Project31 />
                <Token1 />
                <Project4 />
                <Team1 />
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
                <Partner1 />
                <Cta1 />
            </Layout>
        </>
    )
}