import Link from 'next/link'
import Image from 'next/image'
import OneImage from '../../assets/images/community-solutions.png'
import Chuttiya from '../../assets/images/chuttiya.jpg'

const Community = () => {
    return (
        <div className='relative'>
            <div className="px-4 sm:px-6 lg:px-8 pt-[2rem] pb-6 bg-white">
                <div className="max-w-7xl mx-auto">
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
                                            <span className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 pb-[1rem] whitespace-nowrap px-1 border-b-2 font-medium text-sm" aria-current="page">Problem Statement</span>
                                        </a>
                                    </Link>
                                    <Link href="/project/community-solutions">
                                        <a className=' py-4'>
                                            <span className="cursor-pointer border-indigo-500 text-indigo-600 whitespace-nowrap px-1 border-b-2 pb-[1rem] font-medium text-sm">Community Solutions</span>
                                        </a>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto min-h-screen items-center max-w-7xl px-8'>
                <div className='bg-white'>
                    <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-10'>
                        {data.map((item, L)=>(
                        <div className='relative w-[100%]' key={L}>
                            <div className='w-full bg-white shadow rounded-lg'>
                                <Link href="#">
                                    <a className='block'>
                                        <span className='community-img'>
                                            <Image src={item.MainImage} alt="Image hai bhai" />
                                        </span>
                                    </a>
                                </Link>
                                <div className='px-4 py-2'>
                                    <h2 className="text-gray-800 text-xl truncate font-semibold">
                                        <Link href="#">
                                            <a>{item.Heading}</a>
                                        </Link>
                                    </h2>
                                    <p className="my-2 text-gray-600 truncate">{item.paraOne}</p>
                                    <p className="my-2 text-sm text-gray-500 truncate">{item.SubmitDate}</p>
                                    <div className='my-2 flex items-center space-x-2 text-sm text-gray-500 truncate'>
                                        <span className='ChuttiyaImage'>
                                            <Image src={item.persoonImg} alt="Chuttiya" />
                                        </span>
                                        <span>by <span className="text-indigo-500 font-medium">{item.personName}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const data = [
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
    {
        MainImage: OneImage,
        Heading: "tesla-clone",
        paraOne: "Please review my project and suggest any changes need to be done",
        SubmitDate: "Submitted on: July 17, 2022",
        persoonImg: Chuttiya,
        personName: 'Sudhanshu Shekhar Behera'
    },
]

export default Community