import Link from 'next/link'

const Login = () => {
    return (
        <div className='relative'>
            <div>
                <div className='bg-gray-50 pt-20 min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                    <div className='text-center sm:mx-auto sm:w-full sm:max-w-md'>
                        <h1 className='text-3xl font-extrabold text-gray-900'>
                            Sign in to <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 gradient-color'>Academire</span>
                        </h1>
                    </div>
                    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                        <div className='px-4 pt-8 pb-4 bg-white sm:shadow sm:pb-6 sm:rounded-lg sm:px-10'>
                            <form className='space-y-6'>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address / Username</label>
                                    <div className="mt-1">
                                        <input id="email" type="text" data-testid="username" required="" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:cursor-wait disabled:opacity-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value="" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" data-testid="password" autoComplete="current-password" required="" className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none disabled:cursor-wait disabled:opacity-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value="" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded disabled:cursor-wait disabled:opacity-50 focus:ring-indigo-500" />
                                        <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">Remember me</label>
                                    </div>
                                    <div className="text-sm">
                                        <Link href="/password-reset">
                                            <a className="font-medium text-indigo-600 hover:text-indigo-500 gradient-color">Forgot your password?</a>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <button data-testid="login" type="submit" className="relative all-button flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group disabled:cursor-wait disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        </span>Sign in
                                    </button>
                                </div>
                            </form>
                            <div className='mt-6'>
                                <div className='relative'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray-300'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-2 text-gray-500 bg-white'>Or continue with</span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-3 mt-6'>
                                    <div><button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm disabled:cursor-wait disabled:opacity-50 hover:bg-gray-50" data-testid="google-oauth-btn"><span className="sr-only">Sign in with Google</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><clipPath id="p.0"><path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clipRule="nonzero"></path></clipPath><g clipPath="url(#p.0)"><path fill="currentColor" fillOpacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fillRule="evenodd"></path><path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fillRule="evenodd"></path><path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fillRule="evenodd"></path></g></svg></button></div>
                                    <div><button data-testid="github-oauth-btn" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm disabled:cursor-wait disabled:opacity-50 hover:bg-gray-50"><span className="sr-only">Sign in with GitHub</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></button></div>
                                </div>
                            </div>
                            <div className='m-auto mt-6 w-fit md:mt-8'>
                                <span className='m-auto'>Don&apos;t have an account? 
                                <Link href="/register">
                                    <a className='font-semibold text-indigo-600 gradient-color'> Create one</a>
                                </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login