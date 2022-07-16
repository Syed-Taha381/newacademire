import { useState } from "react"
import Link from 'next/link'

const Structure = () => {

    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div>
            <h2 className="my-5 block text-xl tracking-tight font-extrabold sm:text-2xl xl:text-3xl text-gray-900">Course Structure</h2>
            <p className="mb-1">14 lectures • 00:44:11 total duration</p>
            <div className="mt-3">
                <div>
                    {data.map((item, i) => (
                        <div className="w-full mx-auto bg-white" key={i}>
                            <button className="flex justify-between w-full p-4 text-left text-black bg-gray-100 outline-none ring-1 ring-gray-200 transitionPoint4s" id="headlessui-disclosure-button-5" type="button" aria-expanded="true" aria-controls="headlessui-disclosure-panel-6" onClick={() => toggle(i)}>
                                <h2 className="font-bold">{item.sectionName}</h2>
                                <div className="flex gap-2 items-center flex-shrink-0 truncate">
                                    <span className="text-sm w-44 truncate md:w-fit md:max-w-lg">({item.totalTime})</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className={`${selected === i ? "w-5 h-5 flex-shrink-0 transition duration-150 text-sm md:text-base rotate-180 transitionPoint4s" : "text-lg rotate-0 transition-transform flex-shrink-0 transitionPoint4s"}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                </div>
                            </button>


                            <div className={
                                `${selected === i ? 'content show' : 'content'} px-4 text-sm text-gray-800 outline-none ring-1 ring-gray-300 `
                            } id="headlessui-disclosure-panel-6">
                                {item.courseSection.map((content, k) => (
                                    <div className="w-full" key={k}>
                                        <div className="flex py-4 justify-between text-base">
                                            <div>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path></svg>
                                                &nbsp;&nbsp;{content.courseName}&nbsp;
                                                <Link href="#">
                                                    <a className="hover:text-gray-600" >
                                                        (<span className="font-bold underline">{content.extraLink}</span>)
                                                    </a>
                                                </Link>
                                            </div>
                                            <div>{content.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        sectionName: "Internet and DNS",
        totalTime: "4 lectures • 11 minutes",
        courseSection: [
            {
                courseName: "Introduction to full-stack learning path",
                extraLink: "Read article",
                time: "00:55"
            },
            {
                courseName: "Introduction to HTTP",
                extraLink: "Watch video",
                time: "01:15"
            },
            {
                courseName: "What is DNS?",
                extraLink: "Watch video",
                time: "08:45"
            },
            {
                courseName: "Quiz Question",
                extraLink: "Attempt quiz",
                time: "01:00"
            },
        ]
    },
    {
        sectionName: "HTTP",
        totalTime: "10 lectures • 32 minutes",
        courseSection: [
            {
                courseName: "Introduction to full-stack learning path",
                extraLink: "Read article",
                time: "00:55"
            },
            {
                courseName: "Introduction to HTTP",
                extraLink: "Watch video",
                time: "01:15"
            },
            {
                courseName: "What is DNS?",
                extraLink: "Watch video",
                time: "08:45"
            },
            {
                courseName: "Quiz Question",
                extraLink: "Attempt quiz",
                time: "01:00"
            },
        ]
    },
]

export default Structure