import Home from "./components/pages/Home";
import ReactDOM from 'react-dom/client';
import {Route, Routes,} from 'react-router-dom';
import Products from "./components/pages/Products";
import Layout from "./components/layouts/Layout";
import Favorite from "./components/pages/Favorite";
import Detail from "./components/pages/Detail";
import ProductDetailPage from "./components/productDetail/ProductDetailPage";



export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Product" element={<Products />} />
          {/* <Route path="/Product/:id" element={<Detail />} /> */}
          <Route path="/Favorite" element={<Favorite />} />
       </Route>
      </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

