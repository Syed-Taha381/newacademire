import { useState } from "react"
import Link from 'next/link'

const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <section>
            <div className='jsx-e042a198ce6bf294 block mb-4 text-base font-semibold tracking-wide text-indigo-600 uppercase border-b border-gray-300'>
                Learning path contents
            </div>
            {data.map((item, i) => (
                <div className='overflow-hidden border-b border-gray-300' key={i}>
                    <header className={`${selected === i ? "cursor-pointer px-3 py-4 select-none text-xl hover:bg-gray-100 hover:shadow text-[2.25rem] mt-[32px] transitionPoint4s" : "cursor-pointer px-3 py-4 select-none text-xl hover:bg-gray-100 hover:shadow transitionPoint4s"}`} onClick={() => toggle(i)}>
                        <div className="flex flex-col text-sm font-bold sm:flex-row sm:justify-between sm:items-end">
                            <span>{item.module}</span><span className="text-xs font-normal">{`(${item.lectures})`}</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`${selected === i ? "text-3xl rotate-90 transition-transform flex-shrink-0" : "text-lg rotate-0 transition-transform flex-shrink-0"}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg>
                            <span className="flex-grow">{item.moduleName}</span>
                        </div>
                    </header>
                    <section className={
                        `${selected === i ? 'content show' : 'content'} px-0 lg:px-8 `
                    }>
                        <p className='pb-2'>{item.moduleInfo}</p>
                        {item.guddi.map((content, e) => (
                            <div className='mb-4' key={e}>
                                <Link href={`${content?.link}`}>
                                    <a className='shadow rounded-lg  bg-white hover:bg-gray-100 overflow-hidden px-4 py-3 flex flex-col lg:flex-row text-left cursor-pointer flex-1'>
                                        <h2 className='flex items-center justify-start flex-grow space-x-1 text-lg font-semibold sm:text-xl'>
                                            <span className='inline-flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full'>
                                                <svg className="w-12 h-12 text-indigo-700 -rotate-90"><circle className="text-gray-300" strokeWidth="2" stroke="currentColor" fill="transparent" r="18" cx="24" cy="24"></circle><circle className="text-indigo-600" strokeWidth="2" strokeDasharray="113.09733552923255" strokeDashoffset="-113.09733552923255" strokeLinecap="round" stroke="currentColor" fill="transparent" r="18" cx="24" cy="24"></circle></svg>
                                                {/* <span className="absolute text-xs text-blue-700">{content.percentage}%</span> */}
                                            </span>
                                            <span>{content.lectureName}</span>
                                        </h2>
                                        <div className="flex items-center space-x-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{content.subjectStatus}</span>
                                            <p className="text-sm">{content.lectureNumber}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </section>
                </div>
            ))}
        </section>
    )
}

const data = [
    {
        module: 'Module 1',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "/learning/http-fundamentals"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 2',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 3',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "pro",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 4',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 5',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 6',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Basics of web',
        moduleInfo: 'Learn about internet fundamentals, why you are learning what you are learning and the high overview of full-stack.',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "free",
                link: "#"
            },
        ]

    },
    {
        module: 'Module 7',
        lectures: '32 practice labs / 40 lectures / 406 min',
        moduleName: 'Official certification',
        moduleInfo: 'Final certification exams for full-stack web developer learning path',
        guddi: [
            {
                lectureName: "Internet Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
            {
                lectureName: "HTML/CSS Fundamentals",
                lectureNumber: "7 lectures",
                percentage: "0",
                subjectStatus: "Pro",
                link: "#"
            },
        ]

    }
]


export default Accordion