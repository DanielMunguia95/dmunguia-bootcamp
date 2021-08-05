
import './App.css';
import Mensaje from './Mensaje';


const Descripcion=({a})=>{
  return(
  <h1>{a}</h1>
  )
}

const App = () => {
const a=2;
const b=3;
  return (
    <div className="App">
      <h1>Titulo de la app</h1>
    <Mensaje color='red' message='Estamos trabajndo en un curso de react'></Mensaje>
    <Mensaje color='Green' message='Estamos trabajndo en un curso de react'></Mensaje>
    <Mensaje color='yellow' message='Estamos trabajndo en un curso de react'></Mensaje>
    <Descripcion a='descri'/>
    
      <strong>Estamos trabajando en llo
        <div>
          <p>el resultado es</p>
          {a+b}
        </div>
      </strong>

    </div>)
}

export default App;
