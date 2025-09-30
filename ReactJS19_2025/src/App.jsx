import React, { useState } from 'react'
// import Counter from './Componnents/Counter.jsx'
// import HowToWriteJsx from './Componnents/HowToWriteJsx.jsx'
// import ComponentsCreationsAndCall from './Componnents/ComponentsCreationsAndCall.jsx'
// import ReusableComponents from './Componnents/ReusableComponents.jsx'
// import Props from './Componnents/Props.jsx'
// import Operators from './Componnents/Operators.jsx'
// import WaysToIntegrateCss from './Componnents/WaysToIntegrateCss.jsx'
// import Events from './Componnents/Events.jsx'
// import Map from './HighOrderFunctions/Map.jsx'
// import Filter from './HighOrderFunctions/Filter.jsx'
// import HooksEffect from './HighOrderFunctions/HooksEffect.jsx'
// import DataApi from './HighOrderFunctions/DataApi.jsx'
// import Form from './FormHandling/Form.jsx'
// import ReactRouter from './FormHandling/ReactRouter.jsx'
// import TDApp from './ToDoApp/TDApp.jsx'
// import TodoApp from './TodoApp2nd/TodoApp.jsx'
import Form from './TodoApp_BySuman/Form.jsx'
import './index.css'
import Todos from './TodoApp_BySuman/Todos.jsx'

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Apple color', description: 'Apple color is change'},
    {id: 2, title: 'iPhone design', description: 'iPhone design is change'},
    {id: 3, title: 'Macbook modal', description: 'Macbook modal is change'},
  ])
  const [id, setId] = useState("");
  console.log("This is id ", id);

  const deleteTodo = (id)=> {
    setTodos(todos.filter((todo)=>todo.id != id));
  }

    return (
    <>
      {/* <Counter />
      <HowToWriteJsx /> */}
      {/*  Hlo Chef | Your Components Calls  */}
      {/* <ComponentsCreationsAndCall />  */}
      {/* <ReusableComponents />
      <ReusableComponents />
      <Props name="Chef" age={21} address="Dreams Become a Software Engineer" salary="1CR/S"/>
      <Props name="Sketch" age={19} address="Become a Graphics Designer" salary="10CR/M"/>
      <Props name="Salaar" age={11} address="Become a Pan India Star" salary="100CR/Y"/>

      <Operators name="Chef" age={11} address="Dreams Become a Software Engineer" salary="1CR/S" />
      <Operators name="Sketch" age={21} address="Become a Graphics Designer" />
      <Operators name="Sher" age={19} address="Become a Lion" />

      <WaysToIntegrateCss name="Chef" age={21} address="Dreams Become a Software Engineer" />
      <Events /> */}

      {/* <Map />
      <Filter />
      <HooksEffect />
      <DataApi /> */}
      {/* <Form /> */}
      {/* <ReactRouter /> */}
      {/* <TDApp /> */}
      {/* <TodoApp /> */}
      <div className="container">
        {/* Testing Button  */}
        {/* <button className='btn btn-danger' onClick={()=> deleteTodo(1)}>Delete</button> */}
        <h1 className='text-center'>React Todo List CRUD App</h1>
        <Form todos={todos} setTodos={setTodos} id={id} setId={setId} />
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
      </>
  )
}

export default App
