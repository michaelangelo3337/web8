'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item ${pathname === "/" ? "current-menu-item" : ""}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`menu-item ${pathname === "/presale" ? "current-menu-item" : ""}`}>
                    <Link  href="/presale">Presale</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/token", "/connect-wallet", "/team-details", "/submit-IGO-on-chain", "/faq", "/login", "/register", "/forget-password"])}`}>
                    <Link href="#">Page</Link>
                    <ul className="sub-menu">
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/roadmap" ? "current-menu-item" : ""}`}>
                    <Link href="/roadmap">Roadmap</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/blog-grid", "/blog-list", "/blog-details"])}`}>
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid")}`}>
                            <Link href="/blog-grid">Blog Grid</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-list")}`}>
                            <Link href="/blog-list">Blog List</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}>
                            <Link href="/blog-details">Blog Detail</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/contact" ? "current-menu-item" : ""}`}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

