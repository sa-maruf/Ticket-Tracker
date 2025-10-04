import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [mobileIcon, setMobileIcon] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useState(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const mobileIconClick = () => {
        setMobileIcon(!mobileIcon)
    }

    return (
        <>
            <nav className={`bg-[#FFFFFF] text-black border-b-1 border-gray-300 fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/2 backdrop-blur-lg shadow-md" : null}`}>
                <section className='max-w-screen-2xl mx-auto p-4 flex justify-between items-center'>
                    <div className="flex items-center gap-4">
                        <button onClick={mobileIconClick} className="text-2xl text-[#632EE3] md:hidden">
                            <FaBars className={`${mobileIcon ? "hidden" : "block"}`} />
                            <RxCross1 className={`${mobileIcon ? "block" : "hidden"}`} />
                        </button>
                        <h1 className='text-xl sm:text-2xl font-bold '><span className="text-[#632EE3]">Ticket</span><span className="text-[#3EB771]">Tracker</span></h1>
                    </div>
                    <div className='flex items-center md:gap-6 lg:gap-10'>
                        <div className='hidden md:flex  items-center md:text-sm lg:text-base md:gap-5 lg:gap-10'>
                            <li><a href="" className="link-hover">Home</a></li>
                            <li><a href="" className="link-hover">FAQ</a></li>
                            <li><a href="" className="link-hover">Changelog</a></li>
                            <li><a href="" className="link-hover">Blog</a></li>
                            <li><a href="" className="link-hover">Download</a></li>
                            <li><a href="" className="link-hover">Contact Us</a></li>
                        </div>
                        <div>
                            <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-sm sm:text-base md:text-sm lg:text-base py-1 px-4 text-white cursor-pointer rounded-md'>+ New Ticket</button>
                        </div>
                    </div>
                </section>
                {/* Mobile menu  */}
                <section className={`${mobileIcon ? "block" : "hidden"}`}>
                    <div className="w-full p-4 md:hidden absolute">
                        <div className="bg-[#FFFFFF] mx-auto rounded-md">
                            <ul className="p-4 space-y-2 text-center">
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">Home</a></li>
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">FAQ</a></li>
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">Changelog</a></li>
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">Blog</a></li>
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">Download</a></li>
                                <li className="bg-[#e6e7eb] rounded-sm py-1"><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar;