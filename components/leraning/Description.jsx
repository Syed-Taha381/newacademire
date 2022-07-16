import Link from 'next/link'
import Structure from './Structure'

const Description = () => {
    return (
        <div className="flex max-w-[85.5%] px-5 space-x-8 w-full mx-auto my-6">
            <div className="flex-grow">
                <div>
                    <div className="w-full">
                        <div className="max-w-[58%] mr-auto">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Heads up!</h3>
                                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                                        <p>This is an official course from Full Stack Web Developer Learning Path learning path.</p>
                                    </div>
                                    <div className="mt-5">
                                        <Link href="#">
                                            <a className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" >
                                                Try out the learning path
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="my-5 block text-xl tracking-tight font-extrabold sm:text-2xl xl:text-3xl text-gray-900">Goals</h2>
                    <ul className="space-y-3">
                        <li className="flex space-x-2 items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline flex-shrink-0 text-green-800 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                            <span>How domains work</span>
                        </li>
                        <li className="flex space-x-2 items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline flex-shrink-0 text-green-800 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                            <span>Role of DNS</span>
                        </li>
                        <li className="flex space-x-2 items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline flex-shrink-0 text-green-800 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                            <span>Port numbers and HTTP parts</span>
                        </li>
                        <li className="flex space-x-2 items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline flex-shrink-0 text-green-800 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                            <span>Writing raw socket requests</span>
                        </li>
                        <li className="flex space-x-2 items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline flex-shrink-0 text-green-800 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                            <span>Fundamental understanding of HTTP</span>
                        </li>
                    </ul>
                    <h2 className="my-5 block text-xl tracking-tight font-extrabold sm:text-2xl xl:text-3xl text-gray-900">Description</h2>
                    <div className="max-w-none prose prose-black" style={{ maxWidth: "none" }}>
                        <div className="text-black">
                            <p>This course starts with the very fundamental concept of web. What is web and how does it work the way it does? Without going into too much hardware and OSI details, we will quickly grasp over all the important aspects of web required for you as a backend developer.</p>
                            <p>You will also appreciate knowing nuts and bolts of a technology you&apos;ll be working for a long time with</p>
                        </div>
                    </div>
                </div>
                <Structure />
                <div>
                    <h2 className="my-5 block text-xl tracking-tight font-extrabold sm:text-2xl xl:text-3xl text-gray-900">Student feedback</h2>
                    <div className="flex space-y-4 sm:space-y-0 sm:space-x-8 flex-col sm:flex-row">
                        <div className="space-y-1 min-w-[137px] flex flex-col items-center">
                            <div className="text-[#be5a0e] font-bold text-6xl">4.7</div>
                            <div className="w-24">
                                <div className="flex justify-center items-center max-w-none">
                                    <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-94" data-purpose="star-rating-mask"><rect x="0" y="0" width="94%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-94)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                                </div>
                            </div>
                            <div className="text-[#be5a0e] font-semibold">Course Rating</div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex h-full w-full space-x-4 items-center">
                                <div className="relative pt-1 w-full max-w-[50%] sm:max-w-[357px]">
                                    <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500" style={{ width: "77%" }}></div>
                                    </div>
                                </div>
                                <div className="min-w-[96px] w-24">
                                    <div className="flex justify-center items-center max-w-none">
                                        <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                                    </div>
                                </div>
                                <p className="text-blue-700 text-sm">77%</p>
                            </div>
                            <div className="flex h-full w-full space-x-4 items-center">
                                <div className="relative pt-1 w-full max-w-[50%] sm:max-w-[357px]">
                                    <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500" style={{ width: "18%" }}></div>
                                    </div>
                                </div>
                                <div className="min-w-[96px] w-24">
                                    <div className="flex justify-center items-center max-w-none">
                                        <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-80" data-purpose="star-rating-mask"><rect x="0" y="0" width="80%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-80)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                                    </div>
                                </div>
                                <p className="text-blue-700 text-sm">18%</p>
                            </div>
                            <div className="flex h-full w-full space-x-4 items-center">
                                <div className="relative pt-1 w-full max-w-[50%] sm:max-w-[357px]">
                                    <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500" style={{ width: "3%" }}></div>
                                    </div>
                                </div>
                                <div className="min-w-[96px] w-24">
                                    <div className="flex justify-center items-center max-w-none">
                                        <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-60" data-purpose="star-rating-mask"><rect x="0" y="0" width="60%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-60)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use></g></svg>
                                    </div>
                                </div>
                                <p className="text-blue-700 text-sm">3%</p>
                            </div>
                            <div className="flex h-full w-full space-x-4 items-center">
                                <div className="relative pt-1 w-full max-w-[50%] sm:max-w-[357px]">
                                    <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500" style={{ width: "0%" }}></div>
                                    </div>
                                </div>
                                <div className="min-w-[96px] w-24">
                                    <div className="flex justify-center items-center max-w-none">
                                        <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-40" data-purpose="star-rating-mask"><rect x="0" y="0" width="40%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-40)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use></g></svg>
                                    </div>
                                </div>
                                <p className="text-blue-700 text-sm">0%</p>
                            </div>
                            <div className="flex h-full w-full space-x-4 items-center">
                                <div className="relative pt-1 w-full max-w-[50%] sm:max-w-[357px]">
                                    <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500" style={{ width: "1%" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-w-[96px] w-24">
                                    <div className="flex justify-center items-center max-w-none">
                                        <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-20" data-purpose="star-rating-mask"><rect x="0" y="0" width="20%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-20)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use></g></svg>
                                    </div>
                                </div>
                                <p className="text-blue-700 text-sm">1%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description