import kenja_time from "../Data/logo_KenjaTime.jpeg";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import '../input.css';

export default function Sidebar() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            {/*Mobile view*/}
            <div className=" bg-stone-100 flex justify-between md:hidden">

                <button
                    className="p-4 absolute top-0 right-0"
                    onClick={toggleClass}
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

            </div>

            {/*Desktop view*/}

            <div

                className={isActive ?
                    "bg-stone-100 w-48 flex-col py-6 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 duration-200 ease-in-out" :
                    "bg-stone-100 w-48 flex-col py-6 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 duration-200 ease-in-out"}

            >

                <a href="#" className="block py-2.5 px-4">
                    <img src={kenja_time} alt="appLogo" className="object-center w-40 h-40 hover:bg-zinc-500" />
                </a>

                <nav>
                    <NavLink to='/projects' activeClassName="active" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500">
                        projects
                    </NavLink>

                    <NavLink to='/models' activeClassName="active" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500">
                        photogrammetry
                    </NavLink>

                    <NavLink to='/photographs' activeClassName="active" className="block p-1 underline text-blue-700 py-2.5 px-4 hover:text-red-500" >
                        photographs
                    </NavLink>
                </nav >
            </div >
        </>

    )
}