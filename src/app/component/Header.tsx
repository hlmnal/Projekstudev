import React from "react";
import Image from "next/image";
import logo from "../public/Logo.svg";
import Arrow from "../public/DownArrow.svg";
import Search from "../public/Search.svg";

const Header = () => {
    return (
        <header className="main-header header-style-1 font-heading">
            <div className="header-top">
                <div className="container h-[78px] pl-24 pr-24 flex items-center justify-between">    
                    <Image src={logo} alt="logo.svg" className="mx-1" />
                    <div className="col-md-5 col-xs-10 text-center header-top-center">
                        <ul className="list-none flex items-start gap-8">
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a className="flex justify-center items-center gap-1">
                                            Program <Image src={Arrow} alt="DownArrow.svg"/>
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a className="flex justify-center items-center gap-1">
                                            Event <Image src={Arrow} alt="DownArrow.svg"/>
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Kamis English
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Blog
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Kontak
                                        </a>                                                           
                                    </li>    
                        </ul>
                    </div>
                </div>
            </div>
        </header>       
    );
}

export default Header;