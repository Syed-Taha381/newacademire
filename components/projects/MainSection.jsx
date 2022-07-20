import Link from 'next/link'
import Image from 'next/image'
import Tesla from '../../assets/images/tesla.png'

const MainSection = () => {
    return (
        <div className='flex-grow bg-gray-50'>
            <section className='relative flex-grow bg-gray-50 pt-8 pb-8 px-5 md:pt-12 max-w-[1800] mx-auto'>
                <h1 className='block text-center font-extrabold text-3xl md:text-5xl'>Build Amazing Projects</h1>
                <span className='block md:px-4 mx-auto mt-5 text-center text-gray-600 max-w-prose md:text-xl'>Projects offer a practical and hands-on approach to reinforce what you&apos;ve learnt on Codedamn. Build a wide range of projects to hone your development skills.</span>
                <div className='text-center mt-6'>
                    <Link href="#">
                        <a>
                            <span className="inline-flex items-center px-4 py-1 rounded-full text-md font-medium bg-indigo-100 text-indigo-800">Browse community submissions</span>
                        </a>
                    </Link>
                </div>
                <div className='mt-14 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
                    {
                        data.map((item, i) => (
                            <div className='flex flex-col rounded-lg shadow overflow-hidden w-full' key={i}>
                                <div className='flex-shrink-0 relative'>
                                    <div className='h-48 w-full'>
                                        <Link href="/project/tesla-clone">
                                            <a >
                                                <span className='teslaImage'>
                                                    <Image src={item.projectImg} alt="Tesla Project" />
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                                    <div className='flex-1'>
                                        <p className="flex flex-wrap flex-row">
                                            {item.projectTags.map((tags, l) => (
                                                <span className="inline-flex items-center mx-1 my-0.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" key={l}>{tags.tag}</span>
                                            ))}
                                        </p>
                                        <Link href="/project/tesla-clone">
                                            <a className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{item.projectHeading}</p>
                                                <p className="mt-3 text-base text-gray-500">{item.projectPara} </p>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className={`${item.projectType === "easy" ? "inline-flex capitalize items-center px-3 py-0.5 rounded-full text-sm font-medium  bg-green-100 text-green-800" : item.projectType === "Hard" ? "inline-flex capitalize items-center px-3 py-0.5 rounded-full text-sm font-medium  bg-red-100 text-red-800" : "inline-flex capitalize items-center px-3 py-0.5 rounded-full text-sm font-medium  bg-yellow-100 text-yellow-800"}`}>{item.projectType}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

const data = [
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "easy"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Medium"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "easy"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Hard"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Medium"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "easy"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Medium"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Medium"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Medium"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "easy"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "Hard"
    },
    {
        projectImg: Tesla,
        projectTags: [
            {
                tag: "React 18"
            },
            {
                tag: "Frontend"
            }
        ],
        projectHeading: "Tesla Clone",
        projectPara: "Build the tesla clone website with smooth transitions and scroll snaps",
        projectType: "easy"
    },
]

export default MainSection