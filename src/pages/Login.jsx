import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(props){
    const navigate = useNavigate()
    const user = props.user
    const [enteruname, setenteruname] = useState()
    const [enterupass, setenterupass] = useState()
    const [ruser, setruser] = useState(true)


    function handlename(evt){
        setenteruname(evt.target.value)
    }

    function handlepass(evt){
        setenterupass(evt.target.value)
    }
    
    function check(){
        var userlist = false
        user.forEach((item)=>{
            if(item.uname === enteruname && item.upass === enterupass){
                console.log("login successfull")
                userlist = true
                navigate("/landing", {state:{username:enteruname}})
            }
        })
        
        if(userlist === false){
            setruser(false)
        }
    }

    return(<div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="font-medium text-3xl">Hey hi</h1>
            {ruser?<p>I help you manage your activities after you login</p>:
            <p className="text-red-500">please sign up before you login</p>}

            <div className="flex flex-col gap-2 my-2">
                <input 
                onChange={handlename} 
                type="text" 
                placeholder="username"
                className="border-black w-52 p-1 border rounded-md bg-transparent"/>

                <input 
                onChange={handlepass}
                type="text" 
                placeholder="Password"
                className="border-black w-52 p-1 border rounded-md bg-transparent"/>

                <button className="bg-[#8272DA] w-24 border rounded-md p-1" onClick={check}>Login</button>

                <p>Don't have an account? <Link to={'/signup'} className="underline">Sign up</Link></p>
            </div>
        </div>
    </div>)
}

export default Login