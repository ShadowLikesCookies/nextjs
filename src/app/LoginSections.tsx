import Image from "next/image";
import MessageNotification from './MessageNotification'
import logo from '/src/img/logo.svg';
import { FaArrowRight } from "react-icons/fa";

import { Link } from 'react-router-dom';

export default function LoginSections() {
    return (
        <>
            <div className="p-6 w-[105%] hover:border-gray-400 mt-[30px] rounded-xl shadow-lg flex bg-white border-gray-300 border-[0.5px]">
                <svg className="ml-[-5px] scale-[200%] h-16" fill="none" viewBox="0 0 104 104">
                    <g filter="url(#School3D_svg__filter0_d_1431_1204)">
                        <path fill="#FFAB00"
                              d="M32.5 47.125h39V68.25a6.5 6.5 0 01-6.5 6.5H39a6.5 6.5 0 01-6.5-6.5V47.125z"></path>
                        <path fill="#FFAB00" stroke="#FFAB00" stroke-width="1.625"
                              d="M36.68 40.844a3.521 3.521 0 012.49-1.032h25.66c.934 0 1.83.372 2.49 1.032l5.469 5.468H31.21l5.47-5.468z"></path>
                        <path fill="#FC6" d="M39 47.125l13-13 13 13V74.75H39V47.125z"></path>
                        <path stroke="#C28200" stroke-linecap="round" stroke-width="1.625" d="M52 34.125v-4.063"></path>
                        <path stroke="#FFAB00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.625"
                              d="M39 47.125l13-13 13 13"></path>
                        <path fill="#F75961" d="M52 29.25l8.8 2.933c.175.059.133.317-.051.317H52v-3.25z"></path>
                        <circle r="6.5" fill="#fff" transform="matrix(-1 0 0 1 52 50.375)"></circle>
                        <path stroke="#FFAB00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.625"
                              d="M52 50.375v-2.438M52 50.375L50.375 52"></path>
                        <path fill="#fff" d="M47.125 66.625a4.875 4.875 0 119.75 0v8.125h-9.75v-8.125z"></path>
                    </g>
                    <defs>
                        <filter id="School3D_svg__filter0_d_1431_1204" width="68" height="68" x="10" y="26"
                                color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dx="-8" dy="8"></feOffset>
                            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.00392157 0 0 0 0 0.384314 0 0 0 0 0.45098 0 0 0 0.4 0"></feColorMatrix>
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1431_1204"></feBlend>
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1431_1204" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
                <div className="flex items-center justify-between w-full ml-4">
                    <div>
                        <div className="text-xl font-medium text-left text-slate-600">Teacher Account</div>
                        <p className="text-slate-600 text-left">Im a Teacher/Admin/It-Specialist</p>
                    </div>
                    <div>
                        <p className="text-yellow-500 hover:scale-[200%] text-sm scale-[150%]"><FaArrowRight/></p>
                    </div>
                </div>
            </div>
            <div className="p-6 w-[105%] mt-[30px] rounded-xl shadow-lg flex bg-white hover:border-gray-400 border-gray-300 border-[0.5px]">
                <svg className="ml-[-5px] scale-[200%] h-16" fill="none" viewBox="0 0 104 104">
                    <g filter="url(#Student3D_svg__filter0_d)">
                        <path stroke="#008392" stroke-width="3.25"
                              d="M45.5 39a6.5 6.5 0 016.5-6.5v0a6.5 6.5 0 016.5 6.5v0h-13v0z"></path>
                        <path fill="#1AD1E6"
                              d="M35.75 50.375c0-8.975 7.275-16.25 16.25-16.25s16.25 7.275 16.25 16.25v19.5a3.25 3.25 0 01-3.25 3.25H39a3.25 3.25 0 01-3.25-3.25v-19.5z"></path>
                        <path fill="#92F2FF" d="M39 58.5c0-7.18 5.82-13 13-13s13 5.82 13 13v14.625H39V58.5z"></path>
                        <path fill="#0AAEC2"
                              d="M35.75 50.375H32.5c-.898 0-1.625.727-1.625 1.625v16.25c0 .897.727 1.625 1.625 1.625h3.25v-19.5z"></path>
                        <rect width="16.25" height="1.625" fill="#0AAEC2" rx="0.813"
                              transform="matrix(-1 0 0 1 60.125 58.5)"></rect>
                        <path fill="#008392"
                              d="M47.125 60.125a.813.813 0 00-1.625 0v2.438a.813.813 0 001.625 0v-2.438z"></path>
                        <path fill="#0AAEC2"
                              d="M73.125 52c0-.898-.728-1.625-1.625-1.625h-3.25v19.5h3.25c.897 0 1.625-.728 1.625-1.625V52z"></path>
                    </g>
                    <defs>
                        <filter id="Student3D_svg__filter0_d" width="120" height="120" x="-17" y="0"
                                color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dx="-8" dy="8"></feOffset>
                            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.00392157 0 0 0 0 0.384314 0 0 0 0 0.45098 0 0 0 0.4 0"></feColorMatrix>
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
                <div className="flex items-center justify-between w-full ml-[15px]">
                    <div>
                        <div className="text-xl font-medium text-left text-slate-600 ">Student Account</div>
                        <p className="text-slate-600 text-left">Im an MYP/IB Student</p>
                    </div>
                    <div>
                        <p className="text-blue-400 hover:scale-[200%] text-sm scale-[150%]"><Link to="login2"><FaArrowRight/></Link></p>
                    </div>
                </div>
            </div>

            <div className="p-6 w-[105%] mt-[30px] hover:border-gray-400 rounded-xl shadow-lg flex bg-white border-gray-300 border-[0.5px]">
                <svg className="ml-[-5px] scale-[200%] h-16" fill="none" viewBox="0 0 104 104">
                    <g filter="url(#Family3D_svg__filter0_d)">
                        <path fill="#D75674"
                              d="M61.75 39a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75zM52 48.75a6.5 6.5 0 016.5-6.5H65a6.5 6.5 0 016.5 6.5v10.563h-3.25V71.5A3.25 3.25 0 0165 74.75h-9.75V59.312H52V48.75z"></path>
                        <path fill="#FE6784"
                              d="M43.875 42.25a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75zM48.75 74.75v-6.5h6.5l-7.74-21.672a1.625 1.625 0 00-1.53-1.078h-4.21c-.687 0-1.3.432-1.53 1.078L32.5 68.25H39v3.25a3.25 3.25 0 003.25 3.25h6.5z"></path>
                        <path fill="#FFAEC0"
                              d="M52.813 53.625a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM45.5 61.75a6.5 6.5 0 016.5-6.5h1.625a6.5 6.5 0 016.5 6.5v4.41h-3.25v8.59H48.75v-8.59H45.5v-4.41z"></path>
                    </g>
                    <defs>
                        <filter id="Family3D_svg__filter0_d" width="120" height="120" x="-16" y="0"
                                color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dx="-8" dy="8"></feOffset>
                            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.690196 0 0 0 0 0.266667 0 0 0 0 0.392157 0 0 0 0.4 0"></feColorMatrix>
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
                <div className="flex items-center justify-between w-full ml-4">
                    <div>
                        <div className="text-xl font-medium text-left text-slate-600">Parents Account</div>
                        <p className="text-slate-600 text-left">Im a Parent/Guardian</p>
                    </div>
                    <div>
                        <p className="text-pink-500 hover:scale-[200%] text-sm scale-[150%]"><FaArrowRight/></p>
                    </div>
                </div>

            </div>
            <div>
                <p className="font-bold mt-3 text-slate-600 text-xs text-left">
                    This project is meant to be a recreation of "Toddle".
                    ©Teacher Tools Private Limited. All Rights Reserved.
                    Original Website found at:  <a className='text-blue-300' href="https://web.toddleapp.com/?type=loginHome&usertype=staff">https://web.toddleapp.com/?type=loginHome&usertype=staff</a>
                </p>
            </div>
        </>


    )
}