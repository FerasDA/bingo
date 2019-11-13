import React, { useState } from 'react';
import './App.css';
import { Button, Table } from 'react-bootstrap';

function App() {
  const [state, setState] = useState({
    drawnNumbers: []
  });
  const numbers = [...Array(91).keys()].slice(1);
  const rows = [...Array(11).keys()].slice(1);

  const draw = () => {
    const min = 1;
    const max = 91; //max is exclusive
    const rand = Math.floor(min + Math.random() * (max - min));
    const randomNumbers = state.drawnNumbers;

    if (state.drawnNumbers.length < 90) {
      randomNumbers.includes(rand) ? draw() : randomNumbers.push(rand);
      setState({ ...state, drawnNumbers: randomNumbers });
    }

    console.log(state.drawnNumbers);
  }

  const renderRowItems = (row) => {
    return numbers.slice((row * 10 - 10), (row * 10)).map((number) =>
      <td id={number} style={{ backgroundColor: state.drawnNumbers && state.drawnNumbers.includes(number) ? 'red' : '' }} key={number.toString()}>
        {number}
      </td>
    );
  }

  const renderTableData = () => {
    return rows.map((row) => {
      return (
        <tr key={row}>
          {renderRowItems(row)}
        </tr>
      )
    })
  }

  return (
    <div className="App">
        <h1 className='center'>Deiratany Christmas Eve Bingo</h1>



        <Table striped bordered hover variant="dark">
          <tbody>
            {renderTableData()}
          </tbody>
        </Table>
        <Button id="draw" variant="success" onClick={draw}>Draw</Button>
        <h2>{state.drawnNumbers[state.drawnNumbers.length - 1]}</h2>

        <Table responsive>
          <thead>
            <tr>
              <th>Last 5 Numbers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.drawnNumbers[state.drawnNumbers.length - 2]}</td>
            </tr>
            <tr>
              <td>{state.drawnNumbers[state.drawnNumbers.length - 3]}</td>
            </tr>
            <tr>
              <td>{state.drawnNumbers[state.drawnNumbers.length - 4]}</td>
            </tr>
            <tr>
              <td>{state.drawnNumbers[state.drawnNumbers.length - 5]}</td>
            </tr>
            <tr>
              <td>{state.drawnNumbers[state.drawnNumbers.length - 6]}</td>
            </tr>
          </tbody>
        </Table>

      </div>
  );
}

export default App;
