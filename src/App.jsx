
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Success from './pages/Success';
import Login from './pages/Login';
import PrivateRoutes from './components/ProtectedRoute';
import Mainlayout from './Layouts/MainLayout';
import PublicLayout from './Layouts/publicLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home/>} path="/Home" exact />
            <Route element={<Success />} path="/products" />
          </Route>
           <Route element={<Login />} path="/login" />
           {/* page not found  */}
          <Route  element={<Success />} path="*" />

          {/* <Route path="/main" element={<Mainlayout />}>
            <Route path='home' element={<Home />} />

          </Route>
          <Route path="/public" element={<PublicLayout />}>
            <Route index element={<Login />} />

          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
