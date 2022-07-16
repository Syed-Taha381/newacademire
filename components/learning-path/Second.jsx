import Link from 'next/link'
import Image from 'next/image'
import Instractor from '../../assets/images/instractor.jpg'
import Accordion from './Accordion'
import Subscrib from './Subscrib'
import TimeNedd from './TimeNedd'

const Second = () => {
    return (
        <div className='px-3 mt-8 md:mt-24 md:px-10'>
            <div className='flex flex-col-reverse xl:flex-row'>
                <div className='jsx-e042a198ce6bf294 flex-grow'>
                    <Accordion />
                    <Link href="#">
                        <a className='flex flex-col items-center justify-center py-6 bg-gradient-to-r sm:space-x-4 sm:flex-row'>
                            <span className='text-3xl text-yellow-400 sm:text-6xl'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z"></path></svg>
                            </span>
                            <span className='block text-lg font-extrabold tracking-widest text-center text-transparent cursor-pointer gradient-animation-text bg-clip-text bg-gradient-to-r from-indigo-600 via-red-700 to-indigo-600 sm:text-3xl'>
                                GET A PROGRAMMING JOB
                            </span>
                        </a>
                    </Link>
                    <div className='pt-4 mb-4 text-base font-semibold tracking-wide text-indigo-600 uppercase border-b border-gray-300 sm:pt-12'>
                        How much time do I need
                    </div>
                    <TimeNedd />
                    <div className='pt-12 mb-4 text-base font-semibold tracking-wide text-indigo-600 uppercase border-b border-gray-300'>
                        Your Instructors
                    </div>
                    <div>
                        <div className='w-full overflow-hidden'>
                            <div className='relative'>
                                <ul className='grid grid-cols-1 gap-3 py-8 overflow-hidden sm:grid-cols-2'>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Syed Taha</p>
                                                <p className="text-xs font-medium text-indigo-600">Full-stack developer, CEO of Brain Strome</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Syed Muneeb Uddin</p>
                                                <p className="text-xs font-medium text-indigo-600">Mobile App developer, Flutter Instractor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Faizan Bhai</p>
                                                <p className="text-xs font-medium text-indigo-600">Python Developer of Brain Strome</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Arslan Munawar</p>
                                                <p className="text-xs font-medium text-indigo-600">Graphic Designer in Brain Strome</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Hammad Pair</p>
                                                <p className="text-xs font-medium text-indigo-600">ERP developer in Brain Strome</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='block sm:flex mx-auto w-[200px] sm:w-[400px] rounded-lg shadow-lg z-10 relative overflow-hidden'>
                                        <div className='flex-shrink-0 w-[200px] h-[200px] sm:w-[120px] sm:h-[120px] bg-white'>
                                            <Image src={Instractor} alt="Instractor" />
                                        </div>
                                        <div className='flex-grow sm:w-[120px] flex-shrink-0 bg-white p-3 sm:p-6 flex flex-col justify-between'>
                                            <div className='flex-1'>
                                                <p className="text-xl font-semibold text-gray-900">Huzaifa</p>
                                                <p className="text-xs font-medium text-indigo-600">Lambi lambi phekna in Brain Strome</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscrib />
                {/* <div className='flex-shrink-0 w-full xl:w-[500px] flex mb-10 xl:mb-0 justify-center items-start relative'>
                    <div className='w-full px-4 py-10 bg-white shadow xl:ml-4 xl:sticky xl:top-5'>
                        <div className='divide-y divide-gray-200'>
                            <div>
                                <Link href="#">
                                    <a className='group'>
                                        <div className="flex items-start">
                                            <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5" aria-hidden="true">
                                                <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                                            </div>
                                            <p className="ml-3 text-sm font-medium group-hover:text-gray-900">Subscribe to Pro</p>
                                        </div>
                                    </a>
                                </Link>
                                <p class="my-2 text-sm text-gray-800">A Pro membership gives you unlimited access to all the courses and interactive labs as long as your membership lasts.</p>
                                <ul class="text-sm text-gray-800">
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Full Stack Certification</b> from Academire
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Learn by doing</b> - Interactive content with projects
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Moneyback guarantee</b> - 14 day full refund
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Certification exams</b> - to certify your knowledge
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Up to date</b> content relevant in 2022
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline" color="green" font-size="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                        &nbsp; <b>Future content updates</b> for free
                                    </li>
                                </ul>
                                <h2 data-testid="pro-price" class="flex-grow mt-2 mb-2 text-3xl font-extrabold">₨1499/mo</h2>
                                <button data-testid="subscribe-to-cdm-pro-btn" class="w-full px-8 py-2 my-1 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow disabled:opacity-50 disabled:cursor-wait md:text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">Subscribe to Academire Pro</button>
                            </div>
                            <div className='pt-3 mt-3'>
                                <Link href="#">
                                    <a className='flex items-start' aria-current="step">
                                        <div className='relative flex items-center justify-center flex-shrink-0 w-5 h-5' aria-hidden="true">
                                            <div className="absolute w-4 h-4 bg-indigo-200 rounded-full"></div>
                                            <div className="relative block w-2 h-2 bg-indigo-600 rounded-full"></div>
                                        </div>
                                        <p className="ml-3 text-sm font-medium text-indigo-600">Buy Lifetime Access</p>
                                    </a>
                                </Link>
                                <p className="my-2 text-sm text-gray-800">Get complete access to current + future updates to this learning path for one flat fee.</p>
                                <ul className='text-sm text-gray-800'>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Learning Path Certification</b> from Academire
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Learn by doing</b> - Interactive content with projects
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Moneyback guarantee</b> - 14 day full refund
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Certification exams</b> - to certify your knowledge
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Up to date</b> content relevant in 2022
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Future content updates</b> for free
                                    </li>
                                    <li>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>&nbsp; <b>Unlimited access</b> - no expiry
                                    </li>
                                </ul>
                                <div className='flex-grow mt-2 mb-2 space-x-2 text-3xl font-extrabold'>
                                    <span className="text-4xl">₨7499/-</span>
                                    <s className="text-sm opacity-50">₨14999</s>
                                    <span className="text-xl text-red-600">50% off</span>
                                </div>
                                <p className='flex items-center justify-start mt-2 space-x-2 text-sm text-red-500'>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 000-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                                    <div>Deal ending <b>in  08h 45m 27s</b></div>
                                </p>
                                <div className="bg-green-600 px-2 py-1 rounded text-white text-xs my-1 flex justify-center items-center space-x-2" data-testid="applied-coupon-text">
                                    <span className="text-center flex-shrink-0 mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                    </span>Discount Active: <pre>LIMITED_TIME_50_OFF</pre>
                                </div>
                                <button data-testid="buy-learningpath-btn" className="w-full px-8 py-4 my-1 mt-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow disabled:opacity-50 disabled:cursor-wait md:text-2xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200">Unlock Now ✨</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Second