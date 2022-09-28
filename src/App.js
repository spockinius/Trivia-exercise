import React, { useState } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState({});

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(resData => setResults(resData))
    .catch(err => console.log(err))
  };


  return (
    <div className="App">
      <table>
        <tbody>
        {
          results.results.map((result, index) => 
           <tr key={index}>
             <td>{result.question}</td>
           </tr>
          )
        }
        </tbody>
        </table>
        <button onClick={fetchData}>New question</button>
    </div>
  );
}


export default App;
