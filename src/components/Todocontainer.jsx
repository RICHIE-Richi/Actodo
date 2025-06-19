import Addtodoform from "./Addtodoform";
import Addtodolist from "./Addtodolist";
import { useState } from "react";

function Todocontainer() {
  const [activityarr, setactivity] = useState([{id:1, activity:"hey guys"}, {id:2, activity: "hello guys"}])
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        <Addtodoform activityarr={activityarr} setactivity={setactivity}></Addtodoform>
        <Addtodolist activityarr={activityarr} setactivity={setactivity}></Addtodolist>
      </div>
    </div>
  );
}

export default Todocontainer;
