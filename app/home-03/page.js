
import Layout from "@/components/layout/Layout"
import Cta22 from "@/components/sections/Cta22"
import Cta5 from "@/components/sections/Cta5"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2 from "@/components/sections/Feature2"
import Pagetitle3 from "@/components/sections/Pagetitle3"
import Partner3 from "@/components/sections/Partner3"
import Project24 from "@/components/sections/Project24"
import Project32 from "@/components/sections/Project32"
import Supported from "@/components/sections/Supported"
import Threestep from "@/components/sections/Threestep"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Pagetitle3 />
                <Project32 />
                <Feature2 />
                <Cta22 />
                <Project24 />
                <Threestep />
                <Partner3 />
                <Faqs2 />
                <Supported />
                <Cta5 />
            </Layout>
        </>
    )
}