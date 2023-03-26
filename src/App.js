import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json()
    .then(data => {
      console.log(data)
      setUser(data)
    })
    )
  },[])
  
  return (
    <> 
    <section className = 'App'>
      <h1>
        {user.length}
      </h1>
         {user.map(person => <p key = {person.id}> {person.name} </p>)}
      </section>
      
    </>
  );
}

export default App;
