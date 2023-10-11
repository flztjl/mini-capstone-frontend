import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`/products/${id}.json`, params).then((response) => {
      setProducts(products.map((product) => (product.id === response.data.id ? response.data : product)));
      successCallback();
      handleClose();
    });
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios
      .delete(`/products/${product.id}.json`)
      .then((response) => {
        if (response.status === 200) {
          setProducts(products.filter((p) => p.id !== product.id));
          handleClose();
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsIndex products={products} />} />
        <Route path="/products/new" element={<ProductsNew />} />
        {isProductsShowVisible && (
          <Modal show={isProductsShowVisible} onClose={handleClose}>
            <ProductsShow
              product={currentProduct}
              onUpdateProduct={handleUpdateProduct}
              onDestroyProduct={handleDestroyProduct}
            />
          </Modal>
        )}
      </Routes>
    </main>
  );
}
