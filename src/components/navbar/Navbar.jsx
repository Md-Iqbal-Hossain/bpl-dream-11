import React from 'react';
import dollarImg from '../../assets/dollar_1.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-bold text-xl">
                        0 Coins
                        <img src={dollarImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;