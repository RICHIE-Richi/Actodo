import { useState } from "react"

function Addtodoform(props){
  const activityarr = props.activityarr
  const setactivity = props.setactivity
  const [additems, setadditems] = useState()

  function handleadditems(evt){
    setadditems(evt.target.value)
  }

  function newitems(){
    setactivity([
      ...activityarr,{id:activityarr.length+1, activity:additems}
    ])
    setadditems([])
  }

    return(
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-2xl">Manage Activitie</h1>
          <div>
            <input
            value={additems}
            onChange={handleadditems}
              type="text"
              placeholder="Next Activity?"
              className="border p-1 border-black bg-transparent"
            />
            <button className="bg-black text-white border border-black p-1" onClick={newitems}>
              Add
            </button>
          </div>
        </div>
    )
}

export default Addtodoform