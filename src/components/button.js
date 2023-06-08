import "./button.css";

const Button = ({symbol, color, clickEvent}) =>{
  return <div 
      onClick={() => clickEvent(symbol)}
      className="button-wrapper" style={{backgroundColor: color}}>
      {symbol}
    </div>
};

export default Button;