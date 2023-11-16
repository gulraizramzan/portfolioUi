
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import SignUp from './pages/signUp';
import Cart from './pages/Cart.js';
import About from './pages/About';
import Order from './pages/Order.js';
import Contact from './pages/Contact';
import Protected from './utils/protected';
import Category from './pages/Category';
import ForgotPassword from './pages/forgotPassword';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/admin/addProduct.js';
import ProductView from './pages/admin/ProductView.js';
import AdminDashbord from './pages/admin/AdminDashbord.js';
import Inbox from './pages/admin/inbox.js';
import UpdateUser from './pages/admin/updateUser.js';
import AllUSer from './pages/admin/allUser.js';
import ProfileView from './pages/admin/ProfileView.js';
import UpdateProduct from './pages/admin/UpdateProduct.js';
function App() {
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Protected Component={Home}/>} />
    <Route path='/admin-dashbord' element={<AdminDashbord/>}/>
    <Route path='/add-product' element={<AddProduct/>} />
    <Route path='/view-product' element={<ProductView/>} />
    <Route path='/productUpdate/:id' element={<UpdateProduct/>}/>
    <Route path='/updateuser/:id' element={<UpdateUser/>}/>
    <Route path='/inbox' element={<Inbox/>}/>
    <Route path='/alluser' element={<AllUSer/>}/>
    <Route path='/profile' element={<ProfileView/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/forgotpass' element={<ForgotPassword/>} />
    <Route path='/productDetail/:id' element={<ProductDetails/>}/>
    <Route path='/category/:category' element={<Category/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/make-order' element={<Order/>}/>
  </Routes>
  </BrowserRouter>

</>

  );
}

export default App;
