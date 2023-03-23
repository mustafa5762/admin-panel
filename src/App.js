import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Dashboard/Home";
import Login from "./Pages/Login";
import AddProducts from "./Pages/Products/Add";
import Products from "./Pages/Products/Products";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/dashboard/add_products" element={<AddProducts/>}/>
          <Route path="/dashboard/products" element={<Products/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
