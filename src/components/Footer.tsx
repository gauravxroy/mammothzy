import React from 'react'
import Image from 'next/image';
import Logo from "../../public/image.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
function Footer() {
    return (
        <footer className=" text-white py-10 ">
            <div className='flex justify-center mb-2'>
                <Image alt='logo' src={Logo} className='h-20 w-auto' />
            </div>
            <div className="  text-center mt-4">
                <p className='text-gray-400'>Marketplace for searching, filtering and instantly booking team activities</p>
                <div className='mt-4 flex justify-center gap-4'>
                    <a href="#" className=" "><FaFacebook size={24} color='#382D51' /> </a>

                    <a href="#" className=" "> <FaInstagram size={24} color='#382D51' /></a>
                    <a href="#" className=""> <FaLinkedin size={24} color='#382D51' /></a>
                    <a href="#" className=""> <LuMail size={24} color='#382D51' /></a>
                </div>
                <div className="mt-4">
                    <p className='text-gray-400'> 2024 Maamothzy. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
