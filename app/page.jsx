import Link from "next/link"

export default function Home() {
    return (
        <section className='text-gray-600 body-font pt-8 flex flex-col gap-8 items-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl p-4 '>
                <div className='flex justify-center items-center '>
                    <span className='flex flex-col gap-4 items-start justify-center'>
                        <h6 className='border-2 border-[#511bc69a] text-[#511bc69a] px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-2'>
                            <i className='fa-solid fa-circle-dot fa-sm'></i>
                            <span>Live Now</span>
                        </h6>
                        <h1 className='text-7xl font-bold text-gray-800'>
                            Save Images
                            <br /> in Cloud
                        </h1>
                        <p className=''>Elevate Your Digital Horizon with CloudPix Effortless Image Hosting, Seamless Sharing, and Limitless Possibilities in the Cloud.</p>
                    </span>
                </div>
                <img className='p-2' src='https://preview.colorlib.com/theme/cohost/images/undraw_pair_programming_njlp.svg' alt='hero-img' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 w-full max-w-7xl'>
                <h2 className='font-semibold text-3xl'>Pricing</h2>
                <ul className='flex flex-wrap'>
                    <li class='p-4 '>
                        <div class='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
                            <h2 class='text-sm tracking-widest title-font mb-1 font-medium'>START</h2>
                            <h1 class='text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none'>Free</h1>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                20 Image Upload
                            </p>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                Priority Support
                            </p>
                            <p class='flex items-center text-gray-600 mb-6'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                99% Uptime
                            </p>
                            <Link href='/login' className='flex items-center mt-auto text-white bg-[#521bc6] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded'>
                                Login / Register
                                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='w-4 h-4 ml-auto' viewBox='0 0 24 24'>
                                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                                </svg>
                            </Link>
                            <p class='text-xs text-gray-500 mt-3'>Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </li>
                    <li class='p-4  '>
                        <div class='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
                            <h2 class='text-sm tracking-widest title-font mb-1 font-medium'>START</h2>
                            <h1 class='text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none'>Share 1x</h1>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                200 Image Upload
                            </p>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                Priority Support
                            </p>
                            <p class='flex items-center text-gray-600 mb-6'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                99% Uptime
                            </p>
                            <a href='https://www.linkedin.com/in/ohyajk/' className='flex items-center mt-auto text-white bg-[#521bc6] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded'>
                                Contact Me
                                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='w-4 h-4 ml-auto' viewBox='0 0 24 24'>
                                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                                </svg>
                            </a>
                            <p class='text-xs text-gray-500 mt-3'>Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </li>
                    <li class='p-4 '>
                        <div class='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
                            <h2 class='text-sm tracking-widest title-font mb-1 font-medium'>START</h2>
                            <h1 class='text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none'>Share 2x</h1>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                2000 Image Upload
                            </p>
                            <p class='flex items-center text-gray-600 mb-2'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                Priority Support
                            </p>
                            <p class='flex items-center text-gray-600 mb-6'>
                                <span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                                    <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' class='w-3 h-3' viewBox='0 0 24 24'>
                                        <path d='M20 6L9 17l-5-5'></path>
                                    </svg>
                                </span>
                                99% Uptime
                            </p>
                            <a href='https://www.linkedin.com/in/ohyajk/' className='flex items-center mt-auto text-white bg-[#521bc6] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded'>
                                Contact Me
                                <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='w-4 h-4 ml-auto' viewBox='0 0 24 24'>
                                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                                </svg>
                            </a>
                            <p class='text-xs text-gray-500 mt-3'>Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className='flex flex-col justify-center items-center w-full'>
                <div className='flex flex-col gap-3  justify-center items-center py-4 border-t-2 border-white/20 w-full'>
                    <h4 className='text-lg   font-semibold'>
                        Made with <i className='fa-solid fa-heart text-red-400'></i> by Jitender Kumar
                    </h4>
                    <ul className='flex justify-center gap-4 items-center'>
                        <li>
                            <a href='/'>
                                <i className='fa-solid fa-envelope fa-xl'></i>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <i className='fa-brands fa-linkedin fa-xl'></i>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <i className='fa-brands fa-github fa-xl'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </ul>
        </section>
    )
}
