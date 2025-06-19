function Header(props){
    return(
        <div>
            <h1 className="font-medium text-2xl">Hello {props.myname}</h1>
            <p>I help you manage your activities :) </p>
        </div>
    )
}

export default Header