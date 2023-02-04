import logo from './logo.svg';
import './App.css';

function App()
{

  const student=[
    {name:"taniya", email:"roddtaniya@gmail.com"},
    {name:"happy", email:"roddtaniya@gmail.com"},
    {name:"rucha", email:"roddtaniya@gmail.com"}
  ]

  
  return(
    <>
    {student.map((data)=> <h1>Name-{data.name}</h1>)}
    </>
  )
}


export default App;