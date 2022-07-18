import Link from 'next/link'
import Image from 'next/image'
import ThumbNail from '../../assets/images/thumbnail-course.png'
import Styles from '../../styles/Path.module.css'

const SideArea = () => {
    return (
        <div className='flex-grow bg-gray-50'>
            <section className='pt-8 pb-8 px-4 md:pt-12 md:px-8'>
                <h1 className='text-center font-extrabold text-3xl md:text-5xl'>Learning Paths</h1>
                <p className='text-base text-gray-600 w-full mx-auto max-w-prose text-center mt-5 md:text-xl'>
                    Learning paths are
                    <b>content + job-backed</b>
                    roadmaps curated by developers to accelerate your learning. Following these paths will get you started immediately with the developer skills you need.
                </p>
                <div className='my-6'>
                    <h1 className='font-semibold text-left border-b border-gray-200 uppercase text-xl md:mx-5'>Featured Path</h1>
                    <div className='block mx-1 md:mx-5 my-6 space-y-4'>
                        <Link href="/learning-path/frontend">
                            <a className='cursor-pointer flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='block w-full md:flex md:space-x-4 md:items-center'>
                                        <span  className={Styles.ThumbNailCourseImg}>
                                        <Image src={ThumbNail} alt="Course Thumbnail" />
                                        </span>
                                        <div className="md:w-0 flex-1">
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl flex items-center space-x-2 font-semibold text-gray-900">
                                                    <span>Full Stack Web Developer</span>
                                                </div>
                                            </dd>
                                            <div className="block sm:flex my-1 text-sm items-center sm:space-x-3">
                                                <div className="text-[#be5a0e] font-medium">9.8</div>
                                                <div className="w-20"><div className="flex justify-center items-center max-w-none">
                                                    <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-196" data-purpose="star-rating-mask"><rect x="0" y="0" width="196%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-196)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                                                </div>
                                                </div>
                                                <div>1100+ ratings</div>
                                                <div>11k+ students enrolled</div>
                                            </div>
                                            <dt className="text-sm text-gray-700">Become a full-stack web developer, deploy applications end-to-end, use CI/CD, code backends, frontends, learn to write at scale, and more.</dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='my-12'>
                    <h1 className='font-semibold text-left border-b border-gray-200 uppercase text-xl md:mx-5'>
                        All Learning Paths
                    </h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-1 md:mx-5 my-6 gap-4'>
                        <Link href="#">
                            <a className='block cursor-pointer flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='flex items-center'>
                                        <div className='w-0 flex-1'>
                                            <dd className='flex items-baseline'>
                                                <div className='text-xl flex flex-col items-start font-semibold text-gray-900'>
                                                    <span>Frontend Developer</span>
                                                </div>
                                            </dd>
                                            <dt className='text-sm mt-4 font-medium text-gray-500'>
                                                Distilled breakdown guide of becoming a frontend developer in 2022. Cover basics of web from group up with hands on practice + real projects.
                                            </dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='block cursor-pointer flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='flex items-center'>
                                        <div className='w-0 flex-1'>
                                            <dd className='flex items-baseline'>
                                                <div className='text-xl flex flex-col items-start font-semibold text-gray-900'>
                                                    <span>Backend Developer</span>
                                                </div>
                                            </dd>
                                            <dt className='text-sm mt-4 font-medium text-gray-500'>
                                                Distilled breakdown guide of becoming a frontend developer in 2022. Cover basics of web from group up with hands on practice + real projects.
                                            </dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='block cursor-pointer flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='flex items-center'>
                                        <div className='w-0 flex-1'>
                                            <dd className='flex items-baseline'>
                                                <div className='text-xl flex flex-col items-start font-semibold text-gray-900'>
                                                    <span>Full Stack Web Developer</span>
                                                </div>
                                            </dd>
                                            <dt className='text-sm mt-4 font-medium text-gray-500'>
                                                Distilled breakdown guide of becoming a frontend developer in 2022. Cover basics of web from group up with hands on practice + real projects.
                                            </dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='block cursor-pointer flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='flex items-center'>
                                        <div className='w-0 flex-1'>
                                            <dd className='flex items-baseline'>
                                                <div className='text-xl flex flex-col items-start font-semibold text-gray-900'>
                                                    <span>
                                                        Web 3.0 And Blockchain Developer
                                                        <span className="ml-[5px] inline-flex items-center text-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Early Access</span>
                                                    </span>
                                                </div>
                                            </dd>
                                            <dt className='text-sm mt-4 font-medium text-gray-500'>
                                                Distilled breakdown guide of becoming a frontend developer in 2022. Cover basics of web from group up with hands on practice + real projects.
                                            </dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='cursor-not-allowed opacity-70 flex flex-col bg-white overflow-hidden border border-gray-200 rounded-lg'>
                                <div className='flex-grow px-4 py-5 sm:p-6'>
                                    <div className='flex items-center'>
                                        <div className='w-0 flex-1'>
                                            <dd className='flex items-baseline'>
                                                <div className='text-xl flex flex-col items-start font-semibold text-gray-900'>
                                                    <span>DevOps</span>
                                                </div>
                                            </dd>
                                            <dt className='text-sm mt-4 font-medium text-gray-500'>
                                                Distilled breakdown guide of becoming a frontend developer in 2022. Cover basics of web from group up with hands on practice + real projects.
                                            </dt>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-4 sm:px-6'>
                                    <div className='text-sm'>
                                        <span className='font-medium text-indigo-600 hover:text-indigo-500'>Start Learning</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SideArea