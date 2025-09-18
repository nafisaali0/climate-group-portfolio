import logo from "../../assets/logo/logo_1-removebg.png"

const Navbar = () => {
    return (
        <>
            {/*  backdrop-blur-sm */}
            <div className="fixed top-0 z-50 w-full backdrop-blur-md">
                <nav className="max-w-[1300px] mx-auto">
                    <div className="navbar">
                        <div className="navbar-start">
                            <a href="#hero">
                                <figure  className="w-20 md:w-20 lg:w-24">
                                    <img
                                        src={logo}
                                        alt="logo" />
                                </figure>
                            </a>
                        </div>
                        <div className="navbar-end">
                            <div className="hidden lg:flex">
                                <ul className="menu menu-horizontal px-1 text-xl">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#members">Members</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                            {/* hamburger */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="lg:hidden cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-[#001510] rounded-box z-1 mt-3 w-52 p-2 shadow flex items-center text-xl">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#members">Members</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
