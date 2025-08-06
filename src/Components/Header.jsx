import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  return (
    <>
        <header className='relative p-2 h-24 overflow-visible bg-black text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-6 relative z-10">
                        <a href="">
                            <img src={logo} className="rounded-full w-30 h-30 shadow-lg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-8 col-md-8 col-6 flex justify-end ml-auto">
                        <ul className="navbar-box flex items-center justify-center gap-x-4 mb-4">
                            <li>
                                <a href="">
                                    <FaGithub className='text-3xl'/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaLinkedin className='text-3xl'/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <TbFileCv className='text-3xl'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
