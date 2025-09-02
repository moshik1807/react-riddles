import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/login';
import Home from './pages/home'
import Signup from './pages/signup';
import Level from './pages/level';
import Game from './pages/game';
import Result from './pages/result';
import Admin from './pages/admin';
import Updeate from './pages/updeateRiddle';
import Delete from './pages/deleteRiddle';
import Read from './pages/readRissles';
import Create from './pages/createRiddle';
import Leaderboard from './pages/leaderboard';
import User from './pages/user';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/level' element={<Level/>}></Route>
        <Route path='/game' element={<Game/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/updeate' element={<Updeate/>}></Route>
        <Route path='/leaderboard' element={<Leaderboard/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
