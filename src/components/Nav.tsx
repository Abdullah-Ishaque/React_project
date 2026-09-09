import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png"
import { useState } from "react";


const Nav = ({ coin } :{coin : number}) => {



    return (

        <nav className='bg-red-100'>
            <div className="container mx-auto flex justify-between">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixtures</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
                <h2 className="font-bold text-3xl text-black items-center flex gap-1"><AiFillDollarCircle />{coin}</h2>
            </div>
        </nav>
    );
};

export default Nav;