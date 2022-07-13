import React from 'react'

const Reset = () => {
    return (
        <div className='relative'>
            <div className='min-h-screen flex items-center justify-center bg-gray-50 py-[1rem] px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8'>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">Enter your email and we&apos;ll send you a link to reset your password.</p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required="" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value="" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="disabled:opacity-50 disabled:cursor-wait all-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reset