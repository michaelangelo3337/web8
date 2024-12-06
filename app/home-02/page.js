
import Layout from "@/components/layout/Layout"
import Cta21 from "@/components/sections/Cta21"
import Cta3 from "@/components/sections/Cta3"
import Faqs1 from "@/components/sections/Faqs1"
import Feature1 from "@/components/sections/Feature1"
import Pagetitle2 from "@/components/sections/Pagetitle2"
import Partner2 from "@/components/sections/Partner2"
import Project22 from "@/components/sections/Project22"
import Project23 from "@/components/sections/Project23"
import Roadmap from "@/components/sections/Roadmap"
import Team2 from "@/components/sections/Team2"
import Technology from "@/components/sections/Technology"
import Tiersystem from "@/components/sections/Tiersystem"
import Token2 from "@/components/sections/Token2"


export default function Home2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Pagetitle2 />
                <Feature1 />
                <div className="bg_body">
                    <div className="bg_h2">
                        <img src="/assets/images/backgroup/bg_home2.png" alt="" />
                    </div>
                    <Project22 />
                    <Token2 />
                    <Tiersystem />
                    <Technology />
                    <Roadmap />
                    <Project23 />
                    <Team2 />
                </div>
                <Partner2 />
                <Cta21 />
                <Faqs1 />
                <Cta3 />
            </Layout>
        </>
    )
}