
import './App.css';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

const [amount,setAmount] = useState(0);
const [year,setYear] = useState(0);
const [rate,setRate] = useState(0);

const [interest,setInterest] = useState(0);

// console.log(amount,year,rate );

const calculate=(e) => {
  const result = (amount*year*rate)/100;
  console.log(result);

  setInterest(result);
}

const res=() => {
  setAmount(0);
  setInterest(0);
  setRate(0);
  setYear(0);
}
  return (
    <div className="App">

<div className="container">

  <div className="header">
    <h1>Simple Interest Calculator</h1>
    <p>Calculate your simple interest with us</p>
  </div>

  <div className="total">
    <h2>&#8377; {interest}</h2>
    <p>Your Total Interest</p>
  </div>

  <div className="form">

    <form>
      <div className="input">
      <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={(e) => setAmount(e.target.value)} value={amount||""} />
<TextField id="filled-basic" label="Year" variant="outlined" onChange={(e) => setYear(e.target.value)} value={year||""} />
<TextField id="standard-basic" label="Rate" variant="outlined" onChange={(e) => setRate(e.target.value)} value={rate||""} />
      </div>

    </form>

  </div>

  <div className="button">

<Button variant="contained" onClick={e => calculate(e)}>Calculate</Button>
<Button variant="outlined" onClick={res}>Reset</Button>

  </div>
  
</div>

    </div>
  );
}

export default App;
