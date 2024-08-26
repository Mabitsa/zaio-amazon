import './App.css';
import { Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from './components/ProductDetails';

const App = ()=> {
  return (
    <div>
      <Header />
      <main><Route path="/home">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/products/:id">
        <ProductDetails />
      </Route>
      </main>
    </div>
  );
}

export default App;


