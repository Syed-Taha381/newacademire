import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'
import Image from "next/image";
import CourseImage from '../../assets/images/course-img.png'
import Styles from '../../styles/Path.module.css'

const Course = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className='flex-grow bg-gray-50 pt-12'>
      <div className='lg:max-w-[70vw] xl:max-w-[76vw] 2xl:max-2-[80vw] mx-auto'>
        <div className='rounded-md text-center mx-6 md:mx-auto shadow-sm flex mt-6 max-w-xl flex-col space-y-2'>
          <label htmlFor="filter-courses" className="block text-sm font-medium text-gray-700">Filter courses by name</label>
          <input type="text" name="filter-courses" id="filter-courses" className="flex-grow block w-full min-w-0 rounded-md text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 course-input px-[12px] py-[8px]" placeholder="Search for eg. react, node, redis, cypress etc..." value=""></input>
        </div>
        <div className='px-12 lg:px-4 xl:px-8 py-4 space-y-12 w-full lg:max-w-screen-2xl lg:mx-auto'>
          <div className='sm:max-w-8xl mx-auto max-w-full'>
            <h2 className='text-2xl font-bold my-2'>New Releases</h2>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
            </Carousel>
          </div>
          <div className='sm:max-w-8xl mx-auto max-w-full'>
            <h2 className='text-2xl font-bold my-2'>Web 3.0</h2>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
            </Carousel>
          </div>
          <div className='sm:max-w-8xl mx-auto max-w-full'>
            <h2 className='text-2xl font-bold my-2'>Full Stack Web Development</h2>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
            </Carousel>
          </div>
          <div className='sm:max-w-8xl mx-auto max-w-full'>
            <h2 className='text-2xl font-bold my-2'>Python</h2>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
              <figure className="overflow-hidden flex-none my-2">
                <Link href="/learning/http-fundamentals">
                  <a className="flex flex-col z-10 relative overflow-hidden h-full">
                    <span className={Styles.courseImg}>
                      <Image src={CourseImage} alt="Cousre Thumbnail" />
                    </span>
                    <div className="py-2">
                      <h3 className="text-sm font-semibold text-gray-900">Learn NFT Programming:</h3>
                      <h3 className="text-sm font-semibold text-gray-900">Create and sell your o...</h3>
                      <div className="text-xs text-gray-700 mb-1">Faizan Sheikh</div>
                      <div className="w-full flex space-x-2 items-center">
                        <div className="flex-shrink-0 text-orange-800 font-bold text-sm">5.0</div>
                        <div style={{ flex: "0 0 75px" }}>
                          <div className="flex justify-center items-center max-w-none">
                            <svg className="max-w-none" viewBox="0 0 70 14" width="100%" height="100%"><mask id="maskstars-100" data-purpose="star-rating-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect></mask><svg id="icon-rating-star" viewBox="0 0 24 24" width="14" height="14"><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg><g stroke="#eb8a2f" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="white"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="white"></use></g><g mask="url(#maskstars-100)" data-purpose="star-filled"><use xlinkHref="#icon-rating-star" width="14" height="14" x="0" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="14" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="28" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="42" fill="#eb8a2f"></use><use xlinkHref="#icon-rating-star" width="14" height="14" x="56" fill="#eb8a2f"></use></g></svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-xs text-gray-700">(26 enrolled)</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </figure>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course