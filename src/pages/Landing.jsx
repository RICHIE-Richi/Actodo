import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"


function Landing(){
    const data = useLocation()
    return(<div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      {/*Header*/}
      <Header myname={data.state.username}></Header>
      {/* Card */}
      <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgColor={"#8272DA"} title={"23"} subtitle={"Coimbatore"}></Card>
        <Card bgColor={"#FD6663"} title={"June 17"} subtitle={"17/06/2025"}></Card>
        <Card bgColor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>
      </div>
      {/* todocontainer */}
      <Todocontainer></Todocontainer>
    </div>
  </div>)
}

export default Landing