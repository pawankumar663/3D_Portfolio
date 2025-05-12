import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll=()=>{
            const isScrolled=window.scrollY>10;
       setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className={"inner"}>
                <a href="#hero" className={"logo"}>
                    Pawan kumar
                </a>
                <nav className={"desktop"}>
                    <ul>
                        {navLinks.map(({link,name}, index) => (
                            <li key={name} className={"group"}>
                              <a href={link}>
                                  <span>{name}</span>
                                  <span className={"underline"}/>
                              </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                    <a href="/resume.pdf" target={"_blank"}
                       download className={`cta-contact-wrapper`}>
                    <div  className={"contact-btn group"}>
                        <div className={"bg-circle"}/>
                        <p className={"text"}>Resume</p>
                        <div className={"arrow-wrapper"}>
                            <img src={"/images/arrow-down.svg"} alt={"arrow"}/>
                        </div>
                    </div>
                </a>

            </div>
        </header>
    )
}
export default Navbar
