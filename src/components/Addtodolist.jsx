import Todoitem from "./Todoitem"


function Addtodolist(props){
    const activityarr = props.activityarr
    const setactivity = props.setactivity    
    return(
        <div className="bg-[#BDB4EA] p-3 border rounded-md flex-grow">
          <h1 className="font-medium text-2xl my-2">Today's Activity</h1>
          {activityarr.length===0?<p>You haven't added any activity yet</p>:""}
          
          {activityarr.map(function(item, index){
            return(<Todoitem id={item.id} item={item} index={index+1} activityarr={activityarr} setactivity={setactivity}></Todoitem>)
          })}
        </div>
    )
}

export default Addtodolist