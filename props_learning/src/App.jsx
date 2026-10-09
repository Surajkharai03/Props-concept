import React, { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  const [count, setcount] = useState(0)
  const handleClick = () =>{
    setcount(count+1);
  }
  return (
    <div>
       {/* All the things, elments , tags inside card is child
      <Card name ="Suraj Kharai">   
        <h1>Hai tujhko ky fikr</h1>
        <p>Mai kl rha ya nhi</p>
        <p>M aaj hu yha kl rha ya nhi</p>

      </Card>

      <Card>
        Hello World
      </Card> */}

      <Button handleClick={handleClick}
      text ="click me"/>
      <h1>{count}</h1>
    </div>
  )
}

export default App