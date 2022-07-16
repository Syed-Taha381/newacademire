import { useState, useEffect } from 'react'

const Subscrib = () => {

    const [ToggleState, setToggleState] = useState(2);
    const [counter, setCounter] = useState(60);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className='flex-shrink-0 w-full xl:w-[500px] flex mb-10 xl:mb-0 justify-center items-start relative'>
            <div className='w-full px-4 py-10 bg-white shadow xl:ml-4 xl:sticky xl:top-5'>
                <div className='divide-y divide-gray-200'>
                    <div>
                        <div className={`tabs ${getActiveClass(1, "active-tabs")} group cursor-pointer`}
                            onClick={() => toggleTab(1)}>
                            <div className="flex items-start">
                                <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5" aria-hidden="true">
                                    {
                                        getActiveClass(1, "active-tabs") ?
                                            <><div className="absolute w-4 h-4 bg-indigo-200 rounded-full"></div><div className="relative block w-2 h-2 bg-indigo-600 rounded-full"></div></> :

                                            <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                                    }
                                </div>
                                <p className={`${getActiveClass(1, "active-tabs") ? "ml-3 text-sm font-medium text-indigo-600" : "ml-3 text-sm font-medium group-hover:text-gray-900"}`}>Subscribe to Pro</p>
                            </div>
                        </div>
                        <div className={`content-tab ${getActiveClass(1, "active-content")}`}>
                            <p className="my-2 text-sm text-gray-800">A Pro membership gives you unlimited access to all the courses and interactive labs as long as your membership lasts.</p>
                            <ul className="text-sm text-gray-800">
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Full Stack Certification</b> from Academire
                                </li>
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Learn by doing</b> - Interactive content with projects
                                </li>
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Moneyback guarantee</b> - 14 day full refund
                                </li>
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Certification exams</b> - to certify your knowledge
                                </li>
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Up to date</b> content relevant in 2022
                                </li>
                                <li>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline" color="green" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "green" }}><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg>
                                    &nbsp; <b>Future content updates</b> for free
                                </li>
                            </ul>
                            <h2 data-testid="pro-price" className="flex-grow mt-2 mb-2 text-3xl font-extrabold">₨1499/mo</h2>
                            <button data-testid="subscribe-to-cdm-pro-btn" className="w-full px-8 py-2 my-1 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow disabled:opacity-50 disabled:cursor-wait md:text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">Subscribe to Academire Pro</button>
                        </div>
                    </div>
                    <div className='pt-3 mt-3'>
                        <div aria-current="step" className={`tabs ${getActiveClass(2, "active-tabs")} flex items-start cursor-pointer`}
                            onClick={() => toggleTab(2)}>
                            <div className='relative flex items-center justify-center flex-shrink-0 w-5 h-5' aria-hidden="true">
                                {
                                    getActiveClass(2, "active-tabs") ?
                                        <><div className="absolute w-4 h-4 bg-indigo-200 rounded-full"></div><div className="relative block w-2 h-2 bg-indigo-600 rounded-full"></div></> :

                                        <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                                }
                            </div>
                            <p className={`${getActiveClass(2, "active-tabs") ? "ml-3 text-sm font-medium text-indigo-600" : "ml-3 text-sm font-medium group-hover:text-gray-900"}`}>Buy Lifetime Access</p>
                        </div>
                        <div className={`content-tab ${getActiveClass(2, "active-content")}`}>
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
                                <div>Deal ending <b>in  08h 45m {counter}s</b></div>
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
            </div>
        </div>
    )
}

export default Subscrib