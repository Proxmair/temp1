import React, { useState } from 'react'

const App = () => {
  const [age, setage] = useState(0);
  const [forms, setforms] = useState(0)
  const checknextcondition = () => {
    setforms(forms + 1)
  }
  return (
    <div>
      {forms === 0 ? <div>
        <p>How old are You</p>
        <input onChange={(e) => setage(e.target.value)} type='number'></input>
        <button onClick={checknextcondition} >Next</button>
      </div> : forms === 1 ?
      age<=18?
      <div>
          <p>Unfortunately, this survey is not for you.</p>
          <p>Bye</p>
        </div>
      :null:null
      }
    </div>
  )
}

export default App