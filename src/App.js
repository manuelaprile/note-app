import { Routes, Route, Link } from "react-router-dom";
import Create from './components/create'
import List from './components/list'
import Update from "./components/update";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/create' element={<Create />} ></Route>
        <Route path='/update/:id' element={<Update />} ></Route>
      </Routes>
    </div>
  )
}

export default App;
