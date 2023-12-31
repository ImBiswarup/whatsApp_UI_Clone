import React, { useContext, useState } from 'react'
import Logo from '../../public/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from './Context/Context'
import MainScreen from './MainScreen'

const LoginPage = () => {

    const { name, setName, phone, setPhone, handleOnChange, handleOnChangePhone, GFG_Fun } = useContext(AppContext);
    const [loggedIn, setLoggedIn] = useState(false)

    const navigate = useNavigate();

    const pageChange = (e) => {
        if (name === "" || phone === "") {
            alert("Please fillup the credentials");
        }
        else {
            setName(e.target.value);
            setPhone(e.target.value);
            setLoggedIn(!loggedIn);
            console.log(name);
            console.log(phone);
            navigate('/chat');
        }
    }


    return (
        <div className='flex bg-gray-900 text-white h-[100vh] w-[100vw] items-center justify-center' >
            <div className="h-[50%] w-[50%] border rounded text-center">
                <div className="logo flex items-center justify-center mt-12">
                    <img src={Logo} className='rounded-full' />
                </div>
                <div className="details mt-16 mb-2">
                    <div className="name">
                        <label className='mr-5'>Name</label>
                        <input type="text" required className='ml-16 w-1/2 pl-3 pb-1 rounded text-black' value={name} onChange={handleOnChange} />
                    </div>
                    <div className="contact mt-2">
                        <label htmlFor="">Phone number </label>
                        <input id='input' required type="number" className='ml-4 w-1/2 pl-3 pb-1 rounded text-black pt-1 no-scrollbar' value={phone} onChange={handleOnChangePhone} onClick={GFG_Fun} />
                    </div>
                </div>
                <button className='border m-2 p-3 rounded-full bg-slate-500 text-white hover:bg-white hover:text-black'
                    onClick={pageChange}
                >
                    Log In
                </button>
                <p>
                    already have an account, <Link to='/signin'>Sign In</Link>
                </p>
            </div>
            <MainScreen />
        </div >
    )
}

export default LoginPage