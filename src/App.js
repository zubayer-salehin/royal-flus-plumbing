import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SingUp from './pages/Login/SingUp';
import Payment from './pages/Dashboard/Payment';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/shared/Navbar';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReveiw from './pages/Dashboard/AddReveiw';
import MyProfile from './pages/Dashboard/MyProfile';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import AddProduct from './pages/Dashboard/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import RequireAdmin from './pages/Login/RequireAdmin';
import NotFound from './pages/shared/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';
import { useEffect, useState } from 'react';
import Loading from './pages/shared/Loading/Loading';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1500])
  }, [])

  return (loading ? <Loading loadingStatus="true"></Loading> :
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>}></Route>
          <Route path='addReveiw' element={<AddReveiw></AddReveiw>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
