import { Button, Input } from 'antd'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onValue, ref } from 'firebase/database'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { db, auth } from '../firebase'
const Login = () => {
    const [state, setstate] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const changeHandler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, state.email, state.password)
            onValue(ref(db, `users/${user.user.uid}`), snapshot => {
                if (snapshot.val().isAdmin === true) {
                    navigate("/", { replace: true, state: "confirmed" })
                }
                else {
                    alert("Sorry, You are not admin")
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className="flex -mt-16 flex-col w-full min-h-screen items-center justify-center">
            <img src="images/tunnelViewer_logo.png" />
            <h1 className='text-3xl my-4 animate-bounce'>Login</h1>
            <form className='p-4 w-1/2 border rounded-lg' onSubmit={submitHandler} >

                <div className='w-full flex justify-between px-2 mb-4'>
                    <label className='w-1/2 text-xl'>Email: </label>
                    <Input placeholder='johndoe@gmail.com' name='email' value={state.email} onChange={changeHandler} />
                </div>
                <div className='w-full flex justify-between px-2 mb-4'>
                    <label className='w-1/2 text-xl'>Password: </label>
                    <Input.Password placeholder='******' name="password" type={"password"} value={state.password} onChange={changeHandler} />
                </div>
                <div className='w-full flex justify-center'>
                    <Button className='px-2' htmlType='submit' type="primary">Submit</Button>

                </div>
            </form>

        </div>
    )
}

export default Login