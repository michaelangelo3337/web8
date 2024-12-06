'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration={800}>
                <div className={isActive === 1 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 1 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(1)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
                <div className={isActive === 2 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 2 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(2)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How to access the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
                <div className={isActive === 3 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 3 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(3)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How do you make purchases in the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
                <div className={isActive === 4 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 4 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(4)}>
                        <span className="icon-Icon">
                        </span>
                        <span>Is the metaverse fun?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 4 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
                <div className={isActive === 5 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 5 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(5)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How do I find things to actually do in the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 5 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
                <div className={isActive === 6 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 6 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(6)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is ownership in the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 6 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>
            </div>
        </>
    )
}
