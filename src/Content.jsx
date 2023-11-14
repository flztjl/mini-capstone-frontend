import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";
import { InventoryControl } from "./InventoryControl";
import { ProductsShow } from "./ProductsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";
import { SearchBar } from "./SearchBar";
import { ShoppingCart } from "./ShoppingCart";

export const Content = (props) => {
  const [products, setProducts] = useState([]);
  const [currentProduct] = useState({});
  const [searchFilter, setSearchFilter] = useState("");

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`/products/${id}.json`, params).then((response) => {
      setProducts(products.map((product) => (product.id === response.data.id ? response.data : product)));
      successCallback();
    });
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios
      .delete(`/products/${product.id}.json`)
      .then((response) => {
        if (response.status === 200) {
          setProducts(products.filter((p) => p.id !== product.id));
          alert("Product successfully deleted!");
        } else {
          alert("Failed to delete product. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please check the console for more details.");
      });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home products={products.slice(0, 6)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsIndex products={products} />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/inventory" element={<InventoryControl />} />
        <Route
          path="/products/:id"
          element={
            <ProductsShow
              product={currentProduct}
              onUpdateProduct={handleUpdateProduct}
              onDestroyProduct={handleDestroyProduct}
            />
          }
        />
      </Routes>
      {props.searchVisible && (
        <SearchBar
          setSearchVisible={props.setSearchVisible}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          products={products}
        />
      )}
    </main>
  );
};
