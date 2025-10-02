import React from 'react'

const Body = () => {
    return (
        <>
            <section className='bg-[#eef0f5] min-h-screen text-black'>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center gap-3 sm:gap-4 lg:gap-6 text-center text-white pt-10 md:pt-14'>
                        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full rounded-md'>
                            <div className='box-aa w-full py-12 sm:py-14 md:py-20 lg:py-22'>
                                <h1>In-Progress</h1>
                                <h2>0</h2>
                            </div>
                        </div>
                        <div className='bg-linear-to-r from-[#54CF68] to-[#00827A] box-bb w-full rounded-md'>
                            <div className='box-aa w-full py-12 sm:py-14 md:py-20 lg:py-22'>
                                <h1>Resolved</h1>
                                <h2>0</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body;