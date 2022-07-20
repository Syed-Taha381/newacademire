import Link from 'next/link'
import Image from 'next/image'
import teslsBig from '../../assets/images/tesla-big.png'

const Problem = () => {
    return (
        <div className='relative'>
            <div className='px-4 sm:px-6 lg:px-8 pt-[2rem] pb-6 bg-white'>
                <div className="max-w-[85.5%] mx-auto">
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <Link href="/project/tesla-clone">
                                    <a>
                                        <option value="problem">Problem Statement</option>
                                    </a>
                                </Link>
                                <Link href="/project/community-solutions">
                                    <a>
                                        <option value="community-solutions">Community Solutions</option>
                                    </a>
                                </Link>
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                    <Link href="/project/tesla-clone">
                                        <a className='py-4 '>
                                            <span className="cursor-pointer border-indigo-500 text-indigo-600 whitespace-nowrap px-1 border-b-2 pb-[1rem] font-medium text-sm" aria-current="page">Problem Statement</span>
                                        </a>
                                    </Link>
                                    <Link href="/project/community-solutions">
                                        <a className=' py-4'>
                                            <span className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-[1rem] whitespace-nowrap px-1 border-b-2 font-medium text-sm">Community Solutions</span>
                                        </a>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-white pt-4 sm:pt-8'>
                <div className='lg:mx-auto lg:items-center lg:max-w-[85.5%] lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24'>
                    <div className='relative sm:py-16 lg:py-0'>
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                            <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect></svg>
                        </div>
                        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
                            <div className='relative mb-8 sm:mb-0 rounded-2xl'>
                                <div className='w-full border-1rem'>
                                    <Image src={teslsBig} alt="Tesla" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
                        <div>
                            <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Tesla Clone</h1>
                            <div className="flex mt-2 flex-wrap flex-row">
                                <span className="inline-flex font-semibold items-center mx-1 my-0.5 px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-800">React 18</span>
                                <span className="inline-flex font-semibold items-center mx-1 my-0.5 px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-800">Frontend</span>
                            </div>
                            <div className="mt-2 max-w-one text-gray-500 space-y-6">Build the tesla clone website with smooth transitions and scroll snaps </div>
                            <div className="w-full">
                                <div className="pt-12">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                                    <svg className="h-6 w-6 text-white" x-description="Heroicon name: outline/cloud-upload" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke="currentColor" aria-hidden="true"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"></path></svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Open in IDE</h3>
                                            <p className="mt-5 text-base text-gray-500">Includes assets, JPG images of the design files, design files themselves and a basic style guide. There&apos;s also a README to help you get started.</p>
                                            <button data-testid="start-project-btn" className="mt-5 disabled:opacity-50 disabled:cursor-wait cursor-pointer inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">Start Building</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto py-4 block space-y-4 md:flex max-w-[85.5%] px-8 pb-16 sm:pb-24 md:space-y-0 md:space-x-6'>
                <section className="flex-grow w-[70%]">
                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Project Description</h2>
                    <div className="prose mt-5" style={{ maxWidth: "none" }}>
                        <p className='pb-[20px]'>Create the perfect Tesla Website</p>
                        <ul className='list-disc pl-[25px]'>
                            <li>with the informations of the all the 4 cars</li>
                            <li>solar roof and solar panels</li>
                            <li>scroll snapping on the pages</li>
                            <li>in page navigation bar</li>
                            <li>with smooth transitions</li>
                        </ul>
                        <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl pt-[25px]'>Get involved with the community</h2>
                        <p className='pt-[10px]'>Join our
                            <Link href="#" target="_blank">
                                <a className="font-semibold hover:underline px-[3px]" rel="nofollow noreferrer">discord server</a>
                            </Link>
                            and share your feedbacks with others. Ask questions, help others and win prizes.
                        </p>
                        <p className='pt-[6px]'>Check out the
                            <Link href="#" target="_blank">
                                <a className="font-semibold hover:underline px-[3px]" rel="noreferrer">
                                    full-stack learning path
                                </a>
                            </Link>
                            to learn how to build such projects completely on your own.
                        </p>
                    </div>
                </section>
                <aside className="flex-30p w-[30%]">
                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Milestones</h2>
                    <div className="flow-root mt-5">
                        <ul className="-mb-8">
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                    <div className="relative flex space-x-3"><div>
                                        <span className="h-8 w-8 rounded-full 	bg-gray-500 flex items-center justify-center ring-8 ring-white">
                                            <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        </span>
                                    </div>
                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"><div>
                                            <p className="text-sm text-gray-500">Started the project</p>
                                        </div>
                                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                <time dateTime="Not yet">Not yet</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
                                                <svg className="h-6 w-6 text-white" x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" aria-hidden="true"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Submitted Project</p>
                                            </div>
                                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                <time dateTime="Not yet">Not yet</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                    <div className="relative flex space-x-3"><div>
                                        <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
                                            <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                                        </span>
                                    </div>
                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"><div>
                                            <p className="text-sm text-gray-500">Get 5 likes</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative pb-8">
                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
                                                <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Get 20 likes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative pb-8">
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
                                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Get 100 likes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Problem