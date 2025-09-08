
import { useState } from 'react';

function App() {

  let [value , setValue] = useState(5)

  //let counter = 5

  const addvalue = () => {
    console.log("value added");
    //counter = counter + 1
    if (value < 20) {
      setValue(value + 1)
    }
  }

  const subvalue = () => {
    console.log("value decrease");
    //counter = counter - 1
    if (value > 0) {
      setValue(value - 1)
    }
    
  }

  return (
    <>
      <h1>PROJECT 02 || COUNTER</h1>
      <h3>counter value : {value}</h3>

      <button onClick={addvalue}>increase value : {value}</button>
      <br />
      <br />
      <button onClick={subvalue}>decrease value : {value}</button>
    </>
  )
}

export default App