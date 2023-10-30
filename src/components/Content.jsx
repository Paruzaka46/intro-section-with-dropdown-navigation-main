import { useState } from "react";
import "./Content.css"
import { useMediaQuery } from "react-responsive";

const Content = () => {
    const isDesktop = useMediaQuery({query: '(min-width: 800px)'})
    return (
        <div className="container">
            <div className="text-cont">
                <h1>Make remote work</h1>
                <p>Get your team in sync. no matter your location. Streamline processes. create team rituals. and watch productivity soar.</p>
                <button>Learn more</button>
                <div className="clients">
                    <img style={{width: "90px"}} src="/images/client-databiz.svg"/>
                    <img style={{width: "60px"}} src="/images/client-audiophile.svg"/>
                    <img style={{width: "75px"}} src="/images/client-meet.svg"/>
                    <img style={{width: "70px"}} src="/images/client-maker.svg"/>
                </div>
            </div>
            <div className="img-cont">
                <img src={isDesktop?"/images/image-hero-desktop.png":"/images/image-hero-mobile.png"}/>
            </div>
        </div>
    )
}

export default Content
