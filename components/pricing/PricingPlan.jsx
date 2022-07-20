import { useState } from 'react'
import Link from 'next/link'

const PricingPlan = () => {

    const [visibleTab, setVisibleTab] = useState(data[1].id)

    return (
        <div className='relative'>
            <div className='bg-gray-50'>
                <div className='max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8'>
                    <div className=' sm:flex sm:flex-col sm:align-center'>
                        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
                        <fieldset className="disabled:cursor-wait disabled:opacity-70">
                            <div className="grid grid-cols-2 place-items-center relative self-center mt-6 shadow bg-gray-800 text-gray-100 rounded-lg p-0.5 md:flex sm:mt-8">
                                {
                                    data.map((bharwa, lund) => (
                                        <button onClick={() => setVisibleTab(bharwa.id)} key={lund} className={`${visibleTab === bharwa.id ? "md:ml-0.5 w-full relative md:w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none  focus:ring-0 focus:z-10 sm:w-auto sm:px-8 bg-white border-gray-200 text-gray-800" : "md:ml-0.5 w-full relative md:w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none  focus:ring-0 focus:z-10 sm:w-auto sm:px-8 border-transparent"}`}>{bharwa.Time}</button>
                                    ))
                                }
                            </div>
                        </fieldset>
                    </div>
                    {
                        data.map((item, k) => (
                            <div className="mt-12 space-y-4 grid grid-cols-1 gap-6 lg:max-w-4xl lg:mx-auto md:mx-0 md:grid-cols-2 md:space-y-0" key={k} style={visibleTab === item.id ? {} : { display: 'none' }}>
                                {
                                    item.Version.map((content, L) => (
                                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 relative overflow-hidden" key={L} >
                                            <div className="p-6">
                                                <h2 className="text-lg leading-6 font-medium text-gray-900">{content.level}</h2>
                                                <p className="mt-8">
                                                    <span className="text-4xl font-extrabold text-gray-900">{content.paise}</span>
                                                    <span className="text-base font-medium text-gray-500">{content.month}</span>
                                                    <span className="block text-sm text-gray-500">{content.totalPaise}</span>
                                                </p>
                                                <button className=" mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">{content.button}</button>
                                            </div>
                                            <div className="pt-6 pb-8 px-6">
                                                <h3 className=" text-xs font-medium text-gray-900 tracking-wide uppercase">{content.includes}</h3>
                                                <ul className="mt-6 space-y-4">
                                                    {
                                                        content.kyakyahai.map((chuttiya, gando) => (
                                                            <li className="flex space-x-3" key={gando} >
                                                                <span className="flex-shrink-0">
                                                                    <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                                                </span>
                                                                <span className="text-sm text-gray-500">{chuttiya.chuttiye}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {/* <p className="text-xs text-center text-gray-500 cursor-pointer underline pt-8">Have a coupon?</p> */}
                </div>
            </div>
            <div className='bg-white py-8'>
                <h1 className="sm:my-4 text-3xl font-bold leading-none sm:text-center sm:text-5xl px-4">Pricing Plan comparison</h1>
                <div className="max-w-7xl mx-auto bg-white py-4 sm:py-16 sm:pt-8 sm:pb-24">
                    <div className="sm:flex sm:flex-col sm:align-center mb-12 mx-4">
                        <div className="grid grid-cols-2 place-items-center relative self-center mt-6 shadow bg-gray-800 text-gray-100 rounded-lg p-0.5 md:flex sm:mt-8">
                            <button className="md:ml-0.5 w-full relative md:w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none  focus:ring-0 focus:z-10 sm:w-auto sm:px-8 border-transparent">Monthly</button>
                            <button className="md:ml-0.5 w-full relative md:w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none  focus:ring-0 focus:z-10 sm:w-auto sm:px-8 bg-white border-gray-200 text-gray-800">Half yearly ✨</button>
                            <button className="md:ml-0.5 w-full relative md:w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none  focus:ring-0 focus:z-10 sm:w-auto sm:px-8 border-transparent">Yearly</button>
                        </div>
                    </div>
                    <div className="max-w-2xl mx-auto lg:hidden">
                        <div>
                            <h2 className="text-lg leading-6 font-medium text-gray-900 mx-4">Free</h2>
                            <p className="mt-4 mx-4">
                                <span className="text-4xl font-extrabold text-gray-900">₨0</span>
                                <span className="text-base font-medium text-gray-500">/mo</span>
                            </p>
                            <p className="mt-4 mx-4 text-sm text-gray-500">Basic access to course practice and projects interface</p>
                        </div>
                        <table className="mt-8 w-full">
                            <thead>
                                <tr>
                                    <th className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left" scope="col" colSpan="2">Features</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited access to all interactive courses</th>
                                    <td className="py-5"><span className="ml-auto">
                                        <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </span>
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited practice time included</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Official codedamn certification</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left" scope="col" colSpan="2">Support</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Community Support</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="border-t border-gray-200 px-4 py-5">
                            <button className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Free forever</button>
                        </div>
                        <div
                        ><h2 className="text-lg leading-6 font-medium text-gray-900 mx-4">Pro</h2>
                            <p className="mt-4 mx-4">
                                <span className="text-4xl font-extrabold text-gray-900">₨1417</span>
                                <span className="text-base font-medium text-gray-500">/mo</span>
                            </p>
                            <p className="mt-4 mx-4 text-sm text-gray-500">Best for getting started with real world programming learning</p>
                        </div>
                        <table className="mt-8 w-full">
                            <thead>
                                <tr>
                                    <th className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left" scope="col" colSpan="2">Features</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited access to all interactive courses</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited practice time included</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Official codedamn certification</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left" scope="col" colSpan="2">Support</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="border-t border-gray-200">
                                    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Community Support</th>
                                    <td className="py-5">
                                        <span className="ml-auto">
                                            <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="border-t border-gray-200 px-4 py-5">
                            <button className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Subscribe to Pro</button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <table className="w-full h-px table-fixed">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <thead className="bg-white z-10 h-16">
                                <tr>
                                    <th className="w-1/3 pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                                        <span className="sr-only">Feature by</span>
                                    </th>
                                    <th className="w-1/3 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">Free</th>
                                    <th className="w-1/3 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">Pro</th>
                                </tr>
                            </thead>
                            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                                <tr className="hidden sm:table-row">
                                    <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">Pricing</th>
                                    <td className="h-full py-8 px-6 align-top">
                                        <div className="relative h-full table">
                                            <p>
                                                <span className="text-4xl font-extrabold text-gray-900">₨0</span>
                                                <span className="text-base font-medium text-gray-500">/mo</span>
                                            </p>
                                            <p className="mt-4 mb-16 text-sm text-gray-500">Basic access to course practice and projects interface</p>
                                            <button className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Free forever</button>
                                        </div>
                                    </td>
                                    <td className="h-full py-8 px-6 align-top">
                                        <div className="relative h-full table">
                                            <p>
                                                <span className="text-4xl font-extrabold text-gray-900">₨1417</span>
                                                <span className="text-base font-medium text-gray-500">/mo</span>
                                            </p>
                                            <p className="mt-4 mb-16 text-sm text-gray-500">Best for getting started with real world programming learning</p>
                                            <button className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Subscribe to Pro</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 p-2 sm:py-3 sm:pl-6 text-sm font-medium text-gray-900 text-left" colSpan="3" scope="colgroup">Features</th>
                                </tr>
                                <tr>
                                    <th className="p-3 sm:py-5 sm:px-6 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited access to all interactive courses</th>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </td>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="p-3 sm:py-5 sm:px-6 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited practice time included</th>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </td>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="p-3 sm:py-5 sm:px-6 text-sm font-normal text-gray-500 text-left" scope="row">Course completion certificate</th>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </td>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="p-3 sm:py-5 sm:px-6 text-sm font-normal text-gray-500 text-left" scope="row">Learning Path Certification Exam</th>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 16 16" version="1.1" fill="#cb2431"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </td>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-gray-50 p-2 sm:py-3 sm:pl-6 text-sm font-medium text-gray-900 text-left" colSpan="3" scope="colgroup">Support</th>
                                </tr>
                                <tr>
                                    <th className="p-3 sm:py-5 sm:px-6 text-sm font-normal text-gray-500 text-left" scope="row">Community Support</th>
                                    <td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td><td className="p-2 sm:py-5 sm:px-6">
                                        <svg width="22" height="22" viewBox="0 0 12 16" version="1.1" fill="#2ebc4f"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="hidden sm:table-footer-group">
                                <tr className="border-t border-gray-200">
                                    <th className="sr-only" scope="row">Choose your plan</th>
                                    <td className="pt-5 px-6">
                                        <button className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Free forever</button>
                                    </td>
                                    <td className="pt-5 px-6">
                                        <button className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Subscribe to Pro</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
                            <p className="text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our
                                <Link href="/contact">
                                    <a className="font-medium text-indigo-600 hover:text-indigo-500 mx-[5px]">customer support</a>
                                </Link>
                                team.
                            </p>
                        </div>
                        <div className="mt-12 lg:mt-0 lg:col-span-2">
                            <dl className="space-y-12">
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">What is your refund policy?</dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        <div>You can cancel your subscription and request for a full refund within first 7 days of your subscription start, zero questions asked.</div>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Is the Pro plan suitable if I am a complete beginner?</dt>
                                    <dd className="mt-2 text-base text-gray-500">Absolutely. You can pick a codedamn learning path, for example, Fullstack Web Developer learning path, and it assumes no prior knowledge (starts from basics). You only need to be willing to put in the effort to make a change for yourself. Trust us, we&apos;ll do the rest</dd>
                                </div>
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">I am unable to pay through my Amex card. What should I do?</dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        <div>We use Stripe as our payment provider and unfortunately Stripe does not support Amex cards for codedamn because of some country policy issues. Please try with a Master/Visa card and your payment should work fine.</div>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">Is there any student discount?</dt>
                                    <dd className="mt-2 text-base text-gray-500">Yes. We offer discount to school and university students. Please reach out with a valid proof of enrolment in school/university: support@codedamn.com</dd>
                                </div>
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900">How can I cancel my subscription?</dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        <div>You can cancel your subscription anytime by going to
                                            <Link href="#">
                                                <a className="underline font-bold mx-[5px]">Settings</a>
                                            </Link>
                                            page. If you face any problem, you can also <br />
                                            <Link href="/contact">
                                                <a className="underline font-bold mr-[5px]">reach out to us</a>
                                            </Link>
                                            to fix it.</div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const data = [
    {
        id: 1,
        Time: "Monthly",
        Version: [
            {
                level: "Free",
                paise: "Free forever",
                totalPaise: "Free access to basic courses",
                button: "Create a free account",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "10 hours/month of practice"
                    },
                    {
                        chuttiye: "Access to basic interactive courses"
                    },
                    {
                        chuttiye: "Community Support"
                    },
                ]

            },
            {
                level: "Pro",
                paise: "₨1499",
                month: "/mo",
                totalPaise: "₨1499 billed every month",
                button: "Subscribe To Pro",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "Everything in Free"
                    },
                    {
                        chuttiye: "Access to cohort based courses (accelerators)"
                    },
                    {
                        chuttiye: "Unlimited course labs practice time"
                    },
                    {
                        chuttiye: "Unlimited practice time in playgrounds"
                    },
                    {
                        chuttiye: "Access to all interactive courses"
                    },
                    {
                        chuttiye: "Official learning path certifications from Academire"
                    },
                    {
                        chuttiye: "Prepare for interviews with our interview-tailored interactive exams (available in beta)"
                    },
                    {
                        chuttiye: "50+ hands-on projects to practice and add to portfolio"
                    },
                    {
                        chuttiye: "Unlock 2x more XP on certain actions"
                    },
                ]

            }
        ]
    },
    {
        id: 2,
        Time: "Half yearly ✨",
        Version: [
            {
                level: "Free",
                paise: "Free forever",
                totalPaise: "Free access to basic courses",
                button: "Create a free account",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "10 hours/month of practice"
                    },
                    {
                        chuttiye: "Access to basic interactive courses"
                    },
                    {
                        chuttiye: "Community Support"
                    },
                ]

            },
            {
                level: "Pro",
                paise: "₨1417",
                month: "/mo",
                totalPaise: "₨8499 billed every 6 months",
                button: "Subscribe To Pro",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "Everything in Free"
                    },
                    {
                        chuttiye: "Access to cohort based courses (accelerators)"
                    },
                    {
                        chuttiye: "Unlimited course labs practice time"
                    },
                    {
                        chuttiye: "Unlimited practice time in playgrounds"
                    },
                    {
                        chuttiye: "Access to all interactive courses"
                    },
                    {
                        chuttiye: "Official learning path certifications from Academire"
                    },
                    {
                        chuttiye: "Prepare for interviews with our interview-tailored interactive exams (available in beta)"
                    },
                    {
                        chuttiye: "50+ hands-on projects to practice and add to portfolio"
                    },
                    {
                        chuttiye: "Unlock 2x more XP on certain actions"
                    },
                ]

            }
        ]
    },
    {
        id: 3,
        Time: "Yearly",
        Version: [
            {
                level: "Free",
                paise: "Free forever",
                totalPaise: "Free access to basic courses",
                button: "Create a free account",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "10 hours/month of practice"
                    },
                    {
                        chuttiye: "Access to basic interactive courses"
                    },
                    {
                        chuttiye: "Community Support"
                    },
                ]

            },
            {
                level: "Pro",
                paise: "₨1250",
                month: "/mo",
                totalPaise: "₨14999 billed every 1 year",
                button: "Subscribe To Pro",
                includes: "WHAT'S INCLUDED",
                kyakyahai: [
                    {
                        chuttiye: "Everything in Free"
                    },
                    {
                        chuttiye: "Access to cohort based courses (accelerators)"
                    },
                    {
                        chuttiye: "Unlimited course labs practice time"
                    },
                    {
                        chuttiye: "Unlimited practice time in playgrounds"
                    },
                    {
                        chuttiye: "Access to all interactive courses"
                    },
                    {
                        chuttiye: "Official learning path certifications from Academire"
                    },
                    {
                        chuttiye: "Prepare for interviews with our interview-tailored interactive exams (available in beta)"
                    },
                    {
                        chuttiye: "50+ hands-on projects to practice and add to portfolio"
                    },
                    {
                        chuttiye: "Unlock 2x more XP on certain actions"
                    },
                ]

            }
        ]
    },
]

export default PricingPlan