import './App.css';
import Login from './component/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='main/:id' element={<Main/>}/>
        <Route path='*' element={<EmptyPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
