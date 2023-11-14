import axios from "axios";
import { useState, useEffect } from "react";

export const ShoppingCart = () => {
  const [cartedProducts, setCartedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/carted_products.json");
        setCartedProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching carted products:", error);
      }
    };

    fetchCartedProducts();
  }, []);

  const handleRemove = async (cartedProductId) => {
    try {
      await axios.delete(`http://localhost:3000/carted_products/${cartedProductId}.json`);
      setCartedProducts(cartedProducts.filter((product) => product.id !== cartedProductId));
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="flex flex-col">
        {cartedProducts.map((carted_product) => (
          <div key={carted_product.id} className="flex items-center justify-between border-b-2 py-4">
            <div className="flex items-center">
              <img
                src={carted_product.product.images[0].image_url}
                alt={carted_product.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold">{carted_product.product.name}</p>
                <p>Quantity: {carted_product.quantity}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(carted_product.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {cartedProducts.length === 0 && <p>Your cart is empty.</p>}
      </div>
    </div>
  );
};
