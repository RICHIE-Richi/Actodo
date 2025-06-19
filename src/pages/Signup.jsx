import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){
    
    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser
    const [enteruname, setenteruname] = useState()
    const [enterupass, setenterupass] = useState()

    function handlename(evt){
        setenteruname(evt.target.value)
    }

    function handlepass(evt){
        setenterupass(evt.target.value)
    }

    function addUser(){
        setuser([...user, {uname:enteruname, upass:enterupass}])
        navigate("/")
    }


    return(<div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="font-medium text-3xl">Hey hi</h1>
            <p>I help you manage your activities after you login</p>

            <div className="flex flex-col gap-2 my-2">
                <input 
                type="text" 
                placeholder="username"
                onChange={handlename}
                className="border-black w-52 p-1 border rounded-md bg-transparent"/>

                <input 
                type="text" 
                placeholder="Password"
                onChange={handlepass}
                className="border-black w-52 p-1 border rounded-md bg-transparent"/>

                <input 
                type="text" 
                placeholder="Confirm Password"
                className="border-black w-52 p-1 border rounded-md bg-transparent"/>

                <button className="bg-[#FCA201] w-24 border rounded-md p-1" onClick={addUser}>Sign up</button>

                <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
            </div>
        </div>
    </div>)
}

export default Signup