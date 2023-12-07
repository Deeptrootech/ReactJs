import React, { useEffect, useState } from "react";
import "../quote.css";
import axios from "axios";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Quote() {
  const [quote, setQuote] = useState([]);
  const [random, setRandom] = useState({});

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((data) => {setQuote(data.data); setRandom(data.data[0])})
      .catch((error) => console.log(error));
      
  }, []);
  const handleRandom = () => {
    setRandom(getRandomQuote(quote));
  };
  return (
    <div className='container'>
      <button onClick={handleRandom}>New Quote</button>
      <div className='each_container'>
        <h3><span>“</span>{random.text}<span>“</span></h3> - <i>{random.author}</i>
      </div>
    </div>
  );
}

export default Quote;

// import "./styles.css";
// import { useState, useEffect } from "react";

// function getRandomQuote(quotes) {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// export default function App() {
//   const [quotes, setQuotes] = useState([]);
//   const [quote, setQuote] = useState(null);

//   useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//       .then((res) => res.json())
//       .then((json) => {
//         setQuotes(json);
//         setQuote(json[0]);
//       });
//   }, []);

//   function getNewQuote() {
//     setQuote(getRandomQuote(quotes));
//   }

//   return (
//     <main>
//       <h1>Project 3: Quote Generator</h1>
//       <section>
//         <button onClick={getNewQuote}>New Quote</button>
//         <h3>
//           <span>“</span>
//           {quote?.text}
//         </h3>
//         <i>- {quote?.author}</i>
//       </section>
//     </main>
//   );
// }
