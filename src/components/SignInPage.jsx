import React, { useContext } from 'react'
import Logo from '../../public/logo.jpg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/Context'


const SignInPage = () => {
    const { name, setName, phone, setPhone, handleOnChangePhone, GFG_Fun } = useContext(AppContext);

    const navigate = useNavigate();

    const pageChange = () => {
        if (phone === "") {
            alert("Please enter the correct phone number");
        }
        else {
            navigate('/chat');
            console.log(phone);
        }
    }
    return (

        <div className='flex bg-gray-900 text-white h-[100vh] w-[100vw] items-center justify-center' >
            <div className="h-[50%] w-[50%] border rounded text-center">
                <div className="logo flex items-center justify-center mt-12">
                    <img src={Logo} className='rounded-full' />
                </div>
                <div className="details mt-16 mb-2">
                    <div className="contact mt-2">
                        <label htmlFor="">Phone number </label>
                        <input id='input' required type="number" className='ml-4 w-2/4 pl-3 pb-1 rounded text-black pt-1 no-scrollbar' value={phone} onChange={handleOnChangePhone} onClick={GFG_Fun} />
                    </div>
                </div>
                <button className='border m-2 p-3 rounded-full bg-slate-500 text-white hover:bg-white hover:text-black' onClick={pageChange}>Sign In</button>
                <p>
                    Don't have an account, <Link to='/'>Log In</Link>
                </p>
            </div>
        </div >
    )
}

export default SignInPage