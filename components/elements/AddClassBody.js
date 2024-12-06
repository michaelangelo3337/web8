'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove(
                'main',
                'home1',
                'home2',
                'home3',
                'counter-scroll',
                'project-page',
                'project-grid',
                'project-grid-5',
                'blog-list',
                'blog-grid',
                'wallet-page',
                'contact-page',
                'faq-page',
                'login-page',
                'forget',
                'page-roadmap',
                'submit-project',
                'team-page',
                'token-page',
            )

            // Add class based on pathname
            // Add class based on pathname
            if (pathname === '/') {
                bodyElement.classList.add('main', 'home1', 'counter-scroll')
            }
            else if (pathname === '/home-02') {
                bodyElement.classList.add('main', 'home2')
            }
            else if (pathname === '/home-03') {
                bodyElement.classList.add('main', 'home3')
            }
            else if (pathname === '/project-grid') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid')
            }
            else if (pathname === '/project-grid-2') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid')
            }
            else if (pathname === '/project-grid-3') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid')
            }
            else if (pathname === '/project-grid-4') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid')
            }
            else if (pathname === '/project-grid-5') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid-5')
            }
            else if (pathname === '/project-list') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid')
            }
            else if (pathname === '/project-details') {
                bodyElement.classList.add('inner-page', 'project-page', 'project-grid-5')
            }
            else if (pathname === '/submit-project') {
                bodyElement.classList.add('inner-page', 'submit-project')
            }
            else if (pathname === '/token') {
                bodyElement.classList.add('inner-page', 'token-page')
            }
            else if (pathname === '/connect-wallet') {
                bodyElement.classList.add('inner-page', 'wallet-page')
            }
            else if (pathname === '/team-details') {
                bodyElement.classList.add('inner-page', 'team-page')
            }
            else if (pathname === '/submit-IGO-on-chain') {
                bodyElement.classList.add('inner-page', 'home2')
            }
            else if (pathname === '/faq') {
                bodyElement.classList.add('inner-page', 'faq-page')
            }
            else if (pathname === '/login') {
                bodyElement.classList.add('inner-page', 'login-page')
            }
            else if (pathname === '/register') {
                bodyElement.classList.add('inner-page', 'login-page')
            }
            else if (pathname === '/forget-password') {
                bodyElement.classList.add('inner-page', 'login-page', 'forget')
            }
            else if (pathname === '/blog-grid') {
                bodyElement.classList.add('inner-page', 'blog-grid')
            }
            else if (pathname === '/blog-list') {
                bodyElement.classList.add('inner-page', 'blog-list')
            }
            else if (pathname === '/blog-details') {
                bodyElement.classList.add('inner-page', 'blog-list')
            }
            else if (pathname === '/contact') {
                bodyElement.classList.add('inner-page', 'contact-page')
            }
            else if (pathname === '/roadmap') {
                bodyElement.classList.add('inner-page', 'page-roadmap')
            }

        }
    }, [pathname])

    return null
}
