import { useState } from 'react'
import styled from 'styled-components'

import './App.css';
import Mouse from './components/Mouse'
import Mouse2 from './components/Mouse2'
import Mouse3 from './components/Mouse3'

const Button = styled.button`
  background: blue;
  border-radius: 7px;
  border: 2px solid gold;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 150px;
`

function App() {

  const [content, setContent] = useState();

  const handleClick = event => {
    setContent(event.target.id);
  }

  const resource = content => {
    switch (content) {
      case 'mouse':
        return (<div><Mouse /></div>)
      case 'mouse2':
        return (<div><Mouse2 /></div>)
      case 'mouse3':
        return (<div><Mouse3 /></div>)
      default:
        return (<div><Mouse /></div>)
    }
  }

  return (
    <div className="App">
      <Button id={'mouse'} onClick={handleClick}>Mouse Exercise 1</Button>
      <Button id={'mouse2'} onClick={handleClick}>Mouse Exercise 2</Button>
      <Button id={'mouse3'} onClick={handleClick}>Mouse Exercise 3</Button>
      <br /><br />
      <hr />
      {resource(content)}
    </div>
  );
}

export default App;
