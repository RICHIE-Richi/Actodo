function Todoitem(props){
    
    const activityarr = props.activityarr
    const setactivity = props.setactivity

    function handledelete(deleteid){
        var temparray=activityarr.filter(function(item){
            if(item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })
        setactivity(temparray)
    }

    return(
        <div className="flex justify-between">
            <p>{props.index}.{props.item.activity}</p>
            <button className="text-red-500" onClick={()=>{handledelete(props.index)}}>Delete</button>
        </div>
    )
}

export default Todoitem