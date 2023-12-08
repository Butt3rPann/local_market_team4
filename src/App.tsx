import Home from "./components/pages/Home";
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import Products from "./components/pages/Products";
import Layout from "./components/layouts/Layout";
import Favorite from "./components/pages/Favorite";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import Member from "./components/pages/Member";



export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/member" element={<Member />} />
       </Route>
      </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

