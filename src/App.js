import './App.css'
import { useState, useEffect,} from 'react'; 

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('products.json').then((res) =>
      res.json().then((data) => {
        console.log(data)
        setProducts(data)
      })
    )
  }, [])

  return (
    <>
      <section className='App'>
        <h1> This is the home pages Here </h1>
        <h2> Total Products : {products.length} </h2>
      </section>
    </>
  )
}

export default App
