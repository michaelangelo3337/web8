
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import DonutProgress from '../elements/DonutProgress'
import PopupBid from "../elements/PopupBid"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, walletAddress, setWalletAddress }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

    const [isConnect, setConnect] = useState(false);
    const handleConnect = () => setConnect(!isConnect);



    useEffect(() => {
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <AddClassBody />
            <DonutProgress />
            <div id="wrapper">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} walletAddress={walletAddress} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} walletAddress={walletAddress} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} walletAddress={walletAddress} /> : null}

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                <PopupBid isConnect={isConnect} handleConnect={handleConnect} setWalletAddress={setWalletAddress} />

            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
