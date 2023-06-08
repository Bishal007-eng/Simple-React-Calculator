import { useState } from 'react';
import { evaluate } from 'mathjs';



import './App.css';
import Button from  './components/button';
import Input from  './components/input';

const App = () => {


  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) =>{
    setText((text) => [...text, val + ""]);
  };

  const calculate = () =>{
    const input = text.join("");
    setResult(evaluate(input));
  }

  const clearInput = () =>{
    setText ("");
    setResult ("");
  }


  return (
    <div className="App">
      
      <div className='calc-wrapper'>
      <h3>Simple Calculator using React JS!!</h3>
        
      <Input text={text}  result={result}/>

        <div className='row'>
          <Button symbol="AC" color="grey" clickEvent={clearInput}/>
          <Button symbol="+/-" color="grey" clickEvent={addToText} />
          <Button symbol="%" color="grey" clickEvent={addToText} />
          <Button symbol="/" color="orange" clickEvent={addToText} />         
        </div>

        <div className='row'>
          <Button symbol="7" clickEvent={addToText}/>
          <Button symbol="8" clickEvent={addToText}/>
          <Button symbol="9" clickEvent={addToText}/>
          <Button symbol="*" color="orange" clickEvent={addToText}/>         
        </div>

        <div className='row'>
          <Button symbol="4" clickEvent={addToText} />
          <Button symbol="5" clickEvent={addToText}/>
          <Button symbol="6" clickEvent={addToText}/>
          <Button symbol="-" color="orange" clickEvent={addToText} />         
        </div>
        
        <div className='row'>
          <Button symbol="1" clickEvent={addToText} />
          <Button symbol="2" clickEvent={addToText}/>
          <Button symbol="3" clickEvent={addToText} />
          <Button symbol="+" color="orange" clickEvent={addToText} />         
        </div>

        <div className='row'>
          <Button symbol="0" clickEvent={addToText} />
          <Button symbol="."clickEvent={addToText} />
          <Button symbol="=" color="orange" clickEvent={calculate} />        
        </div>
      </div>
    </div>
  );
}

export default App;
