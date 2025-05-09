import React from 'react'
import Link from 'next/link' // If using Next.js

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                    <div className="block">
                        <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
                        <ul className="text-lg transition-all duration-500">
                            <li className="mb-6"><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li className="mb-6"><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li className="mb-6"><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                            <li className="mb-6"><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                            <li><Link href="/pro" className="text-gray-400 hover:text-white">Pro Version</Link></li>
                        </ul>
                    </div>

                    {/* Repeat similar pattern for other sections */}

                    <div className="py-7 border-t border-gray-700">
                        <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                            <Link href="https://pagedone.io/" className="flex justify-center">
                                <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* SVG paths remain the same */}
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z" fill="url(#paint1_linear_9147_12012)" />
                                    <defs>
                                        <linearGradient id="paint1_linear_9147_12012" x1="35" y1="1.89063" x2="1.11152" y2="33.4573" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7C3AED" />
                                            <stop offset="0.993738" stopColor="#4F46E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>

                            <span className="text-gray-400 block">©
                                <Link href="https://pagedone.io/">pagedone</Link> 2024, All rights reserved.
                            </span>

                            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                                <Link href="#" className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white" />
                                    </svg>
                                </Link>

                                {/* Other social icons follow same pattern */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}