import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#101113] border-t-1 border-gray-300">
                <section className="max-w-screen-2xl mx-auto px-5">
                    <section className='grid lg:grid-cols-6 gap-8 py-14'>
                        <div className='lg:col-span-2 space-y-2 text-center lg:text-start'>
                            <h1 className='text-2xl font-semibold'>Smart Ticket</h1>
                            <p className='text-sm/7 sm:w-5/6 mx-auto lg:w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto lg:mx-0 lg:flex lg:justify-between lg:col-span-4'>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title">Company</h6>
                                <a className="link link-hover">About Us</a>
                                <a className="link link-hover">Our Mission</a>
                                <a className="link link-hover">Contact Saled</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title">Services</h6>
                                <a className="link link-hover">Products & Services</a>
                                <a className="link link-hover">Customer Stories</a>
                                <a className="link link-hover">Download Apps</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title">Information</h6>
                                <a className="link link-hover">Privacy Policy</a>
                                <a className="link link-hover">Terms & Conditions</a>
                                <a className="link link-hover">Join Us</a>
                            </nav>
                            <nav className='flex flex-col gap-2'>
                                <h6 className="footer-title">Social Links</h6>
                                <div className="flex items-center gap-2">
                                    <FaSquareFacebook className="text-xl text-[#106AFF] cursor-pointer" />
                                    <a className="link link-hover">Smart Ticket</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaSquareInstagram className="text-xl text-[#953EAD] cursor-pointer" />
                                    <a className="link link-hover">Smart Ticket</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLinkedin className="text-xl text-[#0981BF] cursor-pointer" />
                                    <a className="link link-hover">Smart Ticket</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-xl text-[#FEBF09] cursor-pointer" />
                                    <a className="link link-hover">support@cst.com</a>
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