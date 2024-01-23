import './App.css';
import { useState } from 'react'


function App() {
  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  
  return (
    <div className="App">
      <div children='box-1'>
        <h1>Pizza Order</h1>
        <label>
          <input 
              type="text"
              checked={name}
              onChange={e => setName(e.target.value)}
            />
        </label>

        <label>
          <input 
            type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>

        <label>
          <input 
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
        </label>

        <label>   
            <input 
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
        </label>
        <label>
          <input 
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
        <button>Submit</button>
      </div>
      <div className='box-2'>
        <h2>Your Order</h2>
        {name && <p>{name}</p>}
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>


    </div>
  );
}

export default App;
