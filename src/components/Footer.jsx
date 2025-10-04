import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#101113] border-t-1 border-gray-300 mt-12">
                <section className="max-w-screen-2xl mx-auto px-5 text-white">
                    <section className='grid lg:grid-cols-6 gap-8 py-14'>
                        <div className='lg:col-span-2 space-y-2 text-center lg:text-start'>
                            <h1 className='text-2xl font-semibold text-gray-200'><span className="text-[#632EE3]">Ticket</span><span className="text-[#3EB771]">Tracker</span></h1>
                            <p className='text-sm/7 w-11/12 sm:w-5/6 mx-auto lg:w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-7 md:grid-cols-4 sm:gap-12 mx-auto lg:mx-0 lg:flex lg:justify-between lg:col-span-4'>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title text-gray-300">Company</h6>
                                <a className="link link-hover">About Us</a>
                                <a className="link link-hover">Contact Us</a>
                                <a className="link link-hover">Our Mission</a>
                                <a className="link link-hover">Contact Saled</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title text-gray-300">Services</h6>
                                <a className="link link-hover">Products Services</a>
                                <a className="link link-hover">Customer Stories</a>
                                <a className="link link-hover">Customer Care</a>
                                <a className="link link-hover">Download Apps</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title text-gray-300">Information</h6>
                                <a className="link link-hover">Privacy Policy</a>
                                <a className="link link-hover">Join Us</a>
                                <a className="link link-hover">Help Center</a>
                                <a className="link link-hover">Terms & Conditions</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title text-gray-300">Social Links</h6>
                                <div className="flex items-center gap-2">
                                    <FaSquareFacebook className="text-xl text-[#106AFF] cursor-pointer" />
                                    <a className="link link-hover">Ticket Tracker</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaSquareInstagram className="text-xl text-[#953EAD] cursor-pointer" />
                                    <a className="link link-hover">Ticket Tracker</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLinkedin className="text-xl text-[#0981BF] cursor-pointer" />
                                    <a className="link link-hover">Ticket Tracker</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-xl text-[#FEBF09] cursor-pointer" />
                                    <a className="link link-hover">@support.com</a>
                                </div>
                            </nav>
                        </div>
                    </section>
                    <hr />
                    <section className='py-6 text-center'>
                        <p className="text-xs sm:text-sm md:text-base">© 2025 Smart Ticket System. All rights reserved.</p>
                    </section>
                </section>
            </footer>
        </>
    )
}

export default Footer;