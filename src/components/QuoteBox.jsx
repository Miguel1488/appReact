import React, { useEffect,useState } from "react";
import quotes from '../quotes.json';

const QuoteBox = () => {
  
  console.log(quotes);

  useEffect(()=>{
    console.log('Soy UseEffect');
    setColor(colorRandom)
  },[])
  
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  let colorRandom = Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState("E2202B");
  const newRandom = Math.floor(Math.random() * quotes.length);

  const changeUser = () => { 
    setColor(colorRandom)
    setIndex(newRandom);
    
    
  };


  
  return (

  
  
    <div className="containerGeneral" style={{ background: `#${color}` }}>
      <div className="user-box">
        <section className="phrase"> <i style={{ color: `#${color}` }} className="fa-solid fa-quote-left"></i>
          <h1 className="text" style={{ color: `#${color}` }}>{quotes[index].quote}</h1>
        </section>
        <section className="containerAuthor">
          <p className="author" style={{ color: `#${color}` }}>{quotes[index].author}</p>
        </section>

        <section className="button">
          <i style={{ color: `#${color}` }} onClick={changeUser} className="fa-sharp fa-solid fa-circle-chevron-right"></i>
        </section>
      </div>
    </div>
  );
};

export default QuoteBox;