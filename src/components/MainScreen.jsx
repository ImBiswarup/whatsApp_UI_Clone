import React, { useContext, useState } from 'react'
import prImg from '/pp.jpg'
import Sticker from './Sticker'
// import ScrollToTop from "react-scroll-to-top";
import { AppContext } from './Context/Context';


const MainScreen = () => {

    const { name } = useContext(AppContext);
    // {
    //     name ? console.log(name) : console.log('no name found');
    // }


    const [content, setContent] = useState("")
    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const [show, setShow] = useState(false);

    const [msgBody, setMsgBody] = useState("")

    const msgLoader = () => {
        if (content.length > 0) {
            setMsgBody(content)
            setContent("")
        }
        else {
            ""
        }
    }
    const msgLoaderOnEnter = (e) => {
        if (e.key === 'enter') {
            setMsgBody(content)
            setContent("")
        }
    }



    return (
        <div className="w-[72%] h-screen bg-gray-900 text-white">
            <div className="h-[7vh] flex bg-slate-500">
                <div className="w-[85%] h-[9vh] flex rounded-full mb-[2px] cursor-pointer">
                    <div className=" pr-3 justify-center items-center">
                        <img src={prImg} className='ml-3 mt-[6px] w-[40px] rounded-full h-[40px] ' />
                    </div>
                    <div className="w-[85%]">
                        <div className="name">
                            <h1><b>{name}</b></h1>
                        </div>
                        <div className="msg">
                            <h3>
                                Last seen today at 17:56
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-[15%] flex gap-[1.125rem] items-center h-[calc(100vh - (3.123rem + 9vh)]">
                    <div className="one mt-2 ml-16 tooltip">
                        <svg viewBox="0 0 24 24" className='h-[35px] cursor-pointer' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                        <span className="tooltiptext w-[4rem]">
                            Search
                        </span>
                    </div>
                    <div className="two mt-2 tooltip">
                        <svg viewBox="0 0 24 24" className='h-[35px] cursor-pointer' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                        <span className="tooltiptext w-[3rem]">
                            Menu
                        </span>
                    </div>
                </div>
            </div>
            <div className={`h-[86vh] ml-2 mr-2 text-white overflow-scroll no-scrollbar`}>
                {
                    // [0, 1, 2, 3, 4]
                    //     .map((item, index) => (
                    //         <div className={``}>
                    //             {/* <div className="pr-[45%]  mt-1 float-left flex">
                    //                 <span >
                    //                     <svg viewBox="0 0 8 13" height="13" width="8" className='text-slate-800' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13" ><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                    //                 </span>
                    //                 <div className='rounded-r-xl flex bg-slate-800'>
                    //                     <div className="text-center m-1">
                    //                         {msgBody}
                    //                     </div>
                    //                 </div>
                    //             </div> */}
                    //             <div className="pl-[55%]  mt-1 flex float-right ">
                    //                 <div className='rounded-l-xl flex bg-green-700'>
                    //                     <div className="text-center ml-1 mr-1 mt-1 mb-1">
                    //                         {msgBody}
                    //                     </div>
                    //                 </div>
                    //                 <span>
                    //                     <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" className='text-green-700' version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13"><path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path><path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path></svg>
                    //                 </span>
                    //             </div>
                    //         </div>
                    //     ))
                }
                <div className="pr-[45%] mt-1 float-left flex">
                    <span >
                        <svg viewBox="0 0 8 13" height="13" width="8" className='text-slate-800' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13" ><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                    </span>
                    <div className='rounded-r-xl flex bg-slate-800'>
                        <div className="text-center m-1">
                            Hello there, it is Whatsapp UI clone made using ReactJS and Tailwind CSS
                        </div>
                    </div>
                </div>
                <div className="pr-[45%]  mt-1 float-left flex">
                    <span >
                        <svg viewBox="0 0 8 13" height="13" width="8" className='text-slate-800' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13" ><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                    </span>
                    <div className='rounded-r-xl flex bg-slate-800'>
                        <div className="text-center m-1">
                            If you liked the project, you can definately react me out at <a href="https://github.com/ImBiswarup" target='_blank'><span className='hover:underline'>My Github, </span></a>
                            <a href="https://twitter.com/Im_Biswarup" target='_blank'><span className='hover:underline'>My Twitter</span></a> or at my
                            <a href="https://www.linkedin.com/in/biswarup-ghosh-61440828a" target='_blank'><span className='pl-1 hover:underline'>LinkedIn ❣️</span></a>
                        </div>
                    </div>
                </div>
                <div className="pl-[55%]  mt-1 flex float-right ">
                    <div className={`rounded-l-xl flex bg-green-700 ${msgBody ? "" : "hidden"}`}>
                        <div className="text-center m-2">
                            {msgBody}
                        </div>
                    </div>
                    <span>
                        <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" className={` text-green-700 ${msgBody ? "" : "hidden"}`} version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13"><path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path><path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path></svg>
                    </span>
                </div>

            </div>

            <footer className="h-[9vh] w-[69.1rem] bg-slate-500 text-black pr-[50px] rounded flex fixed bottom-0 ">
                <div className="w-[5rem] flex items-center justify-center">
                    <button className="mb-5">
                        <svg viewBox="0 0 24 24" className='mt-5'
                            height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="currentColor"></path></svg>
                    </button>
                </div>
                <div className="w-[76.25rem] flex">
                    <div className="ml-1 absolute mb-1 tooltip">
                        <svg viewBox="0 0 24 24" className={`mt-[1.375rem] ml-2 cursor-pointer ${show ? "text-green-500" : ""}`}
                            onClick={() => setShow(!show)}
                            height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                        </svg>
                    </div>
                    <div className="bottom-[4.5rem] absolute">
                        {
                            show && <Sticker content={content} setContent={setContent} />
                        }
                    </div>
                    <textarea className='resize-none w-full h-11 my-auto rounded flex p-[10px] pl-12 bg-slate-400' placeholder='Type a message' onKeyPress={msgLoaderOnEnter} onChange={handleChange} value={content} />
                </div>
                <div className="ml-3 -mr-7 flex items-center justify-center">
                    {
                        content.length > 0
                            ? (
                                <svg viewBox="0 0 24 24" onClick={msgLoader} className='cursor-pointer h-8 rounded-full' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" onClick={msgLoader} className='cursor-pointer h-8 rounded-full' preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                            )}
                </div>
            </footer>
        </div >
    )
}

export default MainScreen