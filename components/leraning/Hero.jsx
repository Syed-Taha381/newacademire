import Link from 'next/link'
import Image from 'next/image'
import PayPal from '../../assets/images/paypal.png'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
import strip from '../../assets/images/strip.png'
import opi from '../../assets/images/opi.png'
import ReactPlayer from 'react-player'

const Hero = () => {
    return (
        <div className='black-bg from-gray-900 via-gray-800 to-gray-900  selection:bg-red-600 py-12 text-white lg:block hidden'>
            <div className="flex max-w-[85.5%] px-5 w-full mx-auto">
                <div className="flex-grow mr-8">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">Learn the basics of web - Internet fundamentals</h1>
                        <h2 className="my-4 text-base md:text-lg">This is a small course diving into some of the fundamentals and core of how HTTP works and how the overall web works giving you a solid understanding of underlying HTTP technology</h2>
                    </div>
                    <div className="italic text-sm">
                        1  hours+ of total content
                    </div>
                    <div className="block sm:flex mt-4 items-center sm:space-x-3">
                        <div className="text-[#be5a0e] font-medium">4.7</div>
                        <div className="w-20">
                            <div className="flex justify-center items-center max-w-none">
                                <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-94" data-purpose="star-rating-mask"><rect x="0" y="0" width="94%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-94)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                            </div>
                        </div>
                        <div>2443 ratings</div>
                        <div>16090 students enrolled </div>
                    </div>
                    <div className="my-2">
                        Course Creator: 
                        <Link href="#">
                            <a className="text-white font-bold underline cursor-pointer" >Team Academire</a>
                        </Link>
                    </div>
                </div>
                <div className='relative' style={{ flex: "0 0 35%", maxWidth: "400px" }}>
                    <div className='transition-all absolute inset-0 delay-100 opacity-1'>
                        <div className='z-10 selection:bg-rose-50 text-gray-800 sticky top-4'>
                            <div className='shadow-2xl bg-gray-50'>
                                {/* <video controls="" controlsList="nodownload" width="1280" height="720" src="https://www.youtube.com/watch?v=t-bq1ScyUGI" crossOrigin="anonymous" type="video/mp4" >
                                    <source src="https://www.youtube.com/watch?v=t-bq1ScyUGI" type="video/mp4" />
                                </video> */}
                                <ReactPlayer url='../../assets/video/video.mp4' controls={true} width="1280" height="720" />
                            </div>
                            <div className='px-5 bg-white'>
                                <h2 className="font-extrabold text-3xl flex-grow mb-2 mt-2" data-testid="price">Free</h2>
                                <button data-testid="cta-right" className="bg-indigo-600 disabled:opacity-50 disabled:cursor-wait text-white text-base my-3 md:text-lg font-semibold py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 w-full">Start your course</button>
                                <p className="text-xs italic">&nbsp;</p>
                                <h2 className="font-bold text-lg py-2">Course content:</h2>
                                <ul className="space-y-1">
                                    <li className="space-x-3 flex">
                                        <span style={{ flex: "0 0 20px" }}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683915274" viewBox="0 0 1024 1024" version="1.1" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z"></path><path d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z"></path></svg>
                                        </span>
                                        <span>
                                            1 hours+ on-demand video content
                                        </span>
                                    </li>
                                    <li className="space-x-3 flex">
                                        <span style={{ flex: "0 0 20px" }}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg>
                                        </span>
                                        <span>
                                            This course + all other courses access (Academire Pro)
                                        </span>
                                    </li>
                                    <li className="space-x-3 flex">
                                        <span style={{ flex: "0 0 20px" }}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg>
                                        </span>
                                        <span>
                                            Full lifetime access (Purchase without Academire Pro)
                                        </span>
                                    </li>
                                    <li className="space-x-3 flex">
                                        <span style={{ flex: "0 0 20px" }}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path></svg>
                                        </span>
                                        <span>Certificate of completion</span>
                                    </li>
                                </ul>
                                <div className='border-t-2 border-gray-200 my-5'></div>
                                <h2 className='flex text-gray-600 font-bold text-sm space-x-1 justify-center items-center text-center mb-2'>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path></svg>
                                    </span>
                                    <span>Secure Payment</span>
                                </h2>
                                <div className='relative flex justify-center items-center space-x-1 pb-4'>
                                    <div className='h-8 max-w-full bg-gray-50 shadow-md flex items-center justify-center p-2'>
                                        <Image src={PayPal} alt="PayPal" />
                                    </div>
                                    <div className='h-8 max-w-full bg-gray-50 shadow-md flex items-center justify-center p-2'>
                                        <Image src={visa} alt="visa" />
                                    </div>
                                    <div className='h-8 max-w-full bg-gray-50 shadow-md flex items-center justify-center p-2'>
                                        <Image src={mastercard} alt="mastercard" />
                                    </div>
                                    <div className='h-8 max-w-full bg-gray-50 shadow-md flex items-center justify-center p-2'>
                                        <Image src={strip} alt="strip" />
                                    </div>
                                    <div className='h-8 max-w-full bg-gray-50 shadow-md flex items-center justify-center p-2'>
                                        <Image src={opi} alt="opi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero