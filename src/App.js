//External import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AddUser from './pages/AddUser';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App