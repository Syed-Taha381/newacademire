import { useState } from 'react'

const TimeNedd = () => {
    const [buttonText, setButtonText] = useState('9');

    function handleClickFirst() {
        setButtonText('6.5');
    }
    function handleClickSecond() {
        setButtonText('9');
    }
    function handleClickThird() {
        setButtonText('19.5');
    }
    return (
        <div className='mt-8'>
            <div className='flex sm:flex-row flex-col select-none border border-gray-300 rounded-md items-stretch divide-y sm:divide-x sm:divide-y-0 divide-gray-300'>
                <div className='flex-1 px-2 sm:py-0 py-2 text-center flex justify-center items-center'>
                    <div>
                        <div className='flex justify-center items-center space-x-4 pb-2'>
                            <div className='text-6xl font-extralight flex-1 text-right'>3</div>
                            <div className='space-y-1 flex-1'>
                                <div className=' cursor-pointer active:opacity-40'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className=" cursor-pointer active:opacity-40">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <b>Hours/day</b>
                            <p className="text-xs italic text-gray-600">(Hours you can spend learning per day)</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 px-2 sm:py-0 py-2 text-center flex justify-center items-center'>
                    <div>
                        <div className='flex justify-center items-center space-x-4 pb-2'>
                            <div className='text-6xl font-extralight flex-1 text-right'>4</div>
                            <div className='space-y-1 flex-1'>
                                <div className=" cursor-pointer active:opacity-40">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className=" cursor-pointer active:opacity-40">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <b>Days/week</b>
                            <p className="text-xs italic text-gray-600">(Days you can spend learning per week)</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex sm:py-0 py-2 justify-center items-center'>
                    <div className='divide-y divide-gray-300 w-full'>
                        <div className='relative px-4 py-3 flex z-10'>
                            <div className='flex items-center h-5'>
                                <input type="radio" id="learner-type-option-0" name="learner-type" value={handleClickFirst}  className="h-4 w-4 text-light-blue-600 cursor-pointer" />
                            </div>
                            <label htmlFor="learner-type-option-0" className="ml-3 flex flex-col cursor-pointer">
                                <span className="block text-sm font-medium text-light-blue-900" onClick={handleClickFirst}>I&apos;m a fast learner</span>
                            </label>
                        </div>
                        <div className='relative px-4 py-3 flex z-10'>
                            <div className='flex items-center h-5'>
                                <input type="radio" id="learner-type-option-1" name="learner-type" value={handleClickSecond} defaultChecked className="h-4 w-4 text-light-blue-600 cursor-pointer" />
                            </div>
                            <label htmlFor="learner-type-option-1" className="ml-3 flex flex-col cursor-pointer"><span className="block text-sm font-medium text-light-blue-900" onClick={handleClickSecond}>I learn at a moderate pace</span></label>
                        </div>
                        <div className="relative px-4 py-3 flex z-10">
                            <div className="flex items-center h-5">
                                <input type="radio" id="learner-type-option-2" name="learner-type" value={handleClickThird} className="h-4 w-4 text-light-blue-600 cursor-pointer" />
                            </div>
                            <label htmlFor="learner-type-option-2" className="ml-3 flex flex-col cursor-pointer"><span className="block text-sm font-medium text-light-blue-900" onClick={handleClickThird}>I need long time to understand new things.</span></label>
                        </div>
                    </div>
                </div>
                <div className='flex-shrink-0 py-2 sm:bg-transparent sm:text-inherit bg-black text-white sm:w-36 w-full text-center flex justify-center items-center'>
                    <div>
                        <h2 className="text-7xl font-extralight">{buttonText}</h2>
                        <p>Months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeNedd