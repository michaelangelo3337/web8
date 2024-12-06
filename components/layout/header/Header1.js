'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Menu from "../Menu"
import MobileMenu from '../MobileMenu'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleConnect, walletAddress, setWalletAddress }) {
    const [isMobile, setIsMobile] = useState(false)


    const truncateAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
      };


    const renderConnectButton = () => {
        return (
            <a onClick={handleConnect} data-toggle="modal" data-target="#popup_bid" className="tf-button style1">
                Connect
            </a>
        )
    }

    const renderConnectedButton = () => {
        return <a className="tf-button style1">{truncateAddress(walletAddress)}</a>
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991)
        }

        // Initial check
        handleResize()

        // Event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>

            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container">
                    <div id="site-header-inner">
                        <div className="header__logo">
                            <Link href="/"><img src="assets/images/logo/logo.png" alt="" /></Link>
                        </div>
                        {isMobile ? (
                            <MobileMenu isMobileMenu={isMobileMenu} />
                        ) : (
                            <Menu/>
                        )}

                        {/* /#main-nav */}
                        {!walletAddress && renderConnectButton()}
                        {walletAddress && renderConnectedButton()}
                        <div className={`mobile-button ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                    </div>
                </div>
            </header>

        </>
    )
}
