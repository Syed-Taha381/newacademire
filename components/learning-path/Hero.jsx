import Image from 'next/image'
import Javascript from "../../assets/images/js.png"
import React from "../../assets/images/react.png"
import Node from "../../assets/images/node.png"
import Mongo from "../../assets/images/mongodb.png"
import Git from "../../assets/images/github.png"
import Styles from '../../styles/Path.module.css'

const Hero = () => {
    return (
        <div className='relative flex overflow-hidden black-bg from-gray-900 via-gray-800 to-gray-900 bg-opacity-95'>
            <div className='w-[85.5%] m-auto'>
            <div className='absolute top-0 left-0 hidden w-full h-full md:block'>
                <div className='absolute top-0 right-0 h-full object-cover w-[55%]'>
                    <div className='relative z-50'>
                        <div className={`absolute ${Styles.javascript}`}>
                            <span className={`${Styles.jsImage} ${Styles.javascript}`}>
                                <Image src={Javascript} alt="javascript" style={{ height: '150px' }} />
                            </span>
                        </div>
                        <div className={`absolute ${Styles.react}`}>
                            <span className={`${Styles.reactImage} ${Styles.react}`}>
                                <Image src={React} alt="react" style={{ height: '175px' }} />
                            </span>
                        </div>
                        <div className={`absolute ${Styles.node}`}>
                            <span className={`${Styles.nodeImage}`}>
                                <Image src={Node} alt="node" style={{ height: '190px' }} />
                            </span>
                        </div>
                        <div className={`absolute ${Styles.mongo}`}>
                            <span className={`${Styles.mongoImage} ${Styles.mongo}`}>
                                <Image src={Mongo} alt="mongo" style={{ height: '200px' }} />
                            </span>
                        </div>
                        <div className={`absolute ${Styles.git}`}>
                            <span className={`${Styles.gitImage} ${Styles.git}`}>
                                <Image src={Git} alt="git" style={{ height: '220px' }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative items-center justify-center flex-1 py-12 text-white shadow video-based-container md:py-48'>
                <div className='max-w-md mr-auto'>
                    <h1 className={`${Styles.pathHeadingShadow} relative z-20 px-3 mx-auto mb-5 text-4xl font-extrabold max-w-7xl md:px-[1rem]`}>Frontend Web Developer Learning Path.</h1>
                    <p className='px-3 md:px-[1rem] max-w-prose'>The best way to learn with hands-on labs, practical projects, and community - done right from your browser.</p>
                    <div className='relative z-20 items-center justify-center px-3 pt-1 mx-auto my-4 max-w-7xl md:px-[1rem] md:mb-0 md:flex md:space-x-4'>
                        <div className='flex-grow'>
                            <div className='flex items-center justify-between mb-2'>
                                <div className="jsx-c04df100f74ec136">
                                    <span className="jsx-c04df100f74ec136 inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                        <svg fill="currentColor" viewBox="0 0 8 8" className="jsx-c04df100f74ec136 -ml-1 mr-1.5 h-2 w-2 text-indigo-400"><circle cx="4" cy="4" r="3" className="jsx-c04df100f74ec136"></circle></svg>
                                        Progress
                                    </span>
                                </div>
                                <div className="jsx-c04df100f74ec136 text-right">
                                    <span className="jsx-c04df100f74ec136 inline-block text-xs font-semibold text-white">0</span>
                                </div>
                            </div>
                            <div className="jsx-c04df100f74ec136 flex h-2 mb-4 overflow-hidden text-xs bg-indigo-200 rounded">
                                <div style={{width:"0%"}} className="jsx-c04df100f74ec136 flex flex-col justify-center text-center text-white bg-indigo-500 shadow-none whitespace-nowrap"></div>
                            </div>
                        </div>
                    </div>
                    <div className="jsx-c04df100f74ec136 max-w-xl mx-auto">
                        <button className="jsx-c04df100f74ec136 flex-shrink-0 block w-full px-6 py-2 mt-4 text-sm font-semibold text-center text-white bg-indigo-800 border border-indigo-800 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">Start the learning path</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero