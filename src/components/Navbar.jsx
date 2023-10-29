import { useState } from "react"
import "./Navbar.css"

const NavbarDesktop = () => {
    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)
    const featuresList = [
        {link: "/images/icon-todo.svg", name: "Todo List"},
        {link: "/images/icon-calendar.svg", name: "Calendar"},
        {link: "/images/icon-reminders.svg", name: "Reminders"},
        {link: "/images/icon-planning.svg", name: "Planning"}
    ]

    return (
        <nav>
            <div className="left-part">
                <input type="image" src="/images/logo.svg"/>
                <div className="features-section">
                    <a onClick={() => setFeatures(!features)} href="#">Features <span><img src={features?"/images/icon-arrow-up.svg":"/images/icon-arrow-down.svg"}/></span></a>
                    <ul className={features ? "showFeatures" : null}>
                        {featuresList.map((list, index) => {
                            const {link, name} = list
                            return <li key={index}>
                                <div className="features-icon"><img src={link}/></div>
                                <a href="#">{name}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="company-section">
                    <a onClick={() => setCompany(!company)} href="#">Company <span><img src="/images/icon-arrow-down.svg"/></span></a>
                    <ul className={company ? "showCompany" : null}>
                        <li><a>History</a></li>
                        <li><a>Our Team</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a href="#">Careers</a>
                <a href="#">About</a>
            </div>
            <div className="right-part">
                <button className="login-btn">Login</button>
                <button className="register-btn">Register</button>
            </div>
        </nav>
    )
}

const NavbarMobile = () => {
    const [toggle, setToggle] = useState(false)
    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)
    const featuresList = [
        {link: "/images/icon-todo.svg", name: "Todo List"},
        {link: "/images/icon-calendar.svg", name: "Calendar"},
        {link: "/images/icon-reminders.svg", name: "Reminders"},
        {link: "/images/icon-planning.svg", name: "Planning"}
    ]

    return (
        <nav className="nav-mobile">
            <input type="image" src="/images/logo.svg"/>
            <div onClick={() => setToggle(true)} className="toggle">
                <img src="/images/icon-menu.svg"/>
            </div>
            {toggle ? 
            <div className="side-navbar">
                <div className="left-part">
                    <img onClick={() => setToggle(false)} src="/images/icon-close-menu.svg"/>
                    <div className="features-section">
                        <a onClick={() => setFeatures(!features)} href="#">Features <span><img src={features?"/images/icon-arrow-up.svg":"/images/icon-arrow-down.svg"}/></span></a>
                        <ul className={features ? "showFeatures" : null}>
                            {featuresList.map((list, index) => {
                                const {link, name} = list
                                return <li key={index}>
                                    <div className="features-icon"><img src={link}/></div>
                                    <a href="#">{name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="company-section">
                        <a onClick={() => setCompany(!company)} href="#">Company <span><img src="/images/icon-arrow-down.svg"/></span></a>
                        <ul className={company ? "showCompany" : null}>
                            <li><a>History</a></li>
                            <li><a>Our Team</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                    <div className="right-part">
                        <button className="login-btn">Login</button>
                        <button className="register-btn">Register</button>
                    </div>
                </div>           
            </div>
            
             : null}
        </nav>    
    )  
}

export {NavbarDesktop, NavbarMobile}

{/* <div className="left-part">
            <img onClick={() => setToggle(false)} src="/images/icon-close-menu.svg"/>
                <div className="features-section">
                    <a onClick={() => setFeatures(!features)} href="#">Features <span><img src={features?"/images/icon-arrow-up.svg":"/images/icon-arrow-down.svg"}/></span></a>
                    <ul className={features ? "showFeatures" : null}>
                        {featuresList.map((list, index) => {
                            const {link, name} = list
                            return <li key={index}>
                                <div className="features-icon"><img src={link}/></div>
                                <a href="#">{name}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="company-section">
                    <a onClick={() => setCompany(!company)} href="#">Company <span><img src="/images/icon-arrow-down.svg"/></span></a>
                    <ul className={company ? "showCompany" : null}>
                        <li><a>History</a></li>
                        <li><a>Our Team</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a href="#">Careers</a>
                <a href="#">About</a>
                <div className="right-part">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                </div>
            </div>            */}