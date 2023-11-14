import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function ProductsShow() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.id}.json`)
      .then((response) => {
        setProduct(response.data);
        // Initialize the selected image with the first image URL if images are present
        if (response.data.images && response.data.images.length > 0) {
          setSelectedImage(response.data.images[0].image_url);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the product data:", error);
      });
  }, [params.id]);

  // Placeholder function for adding to cart
  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/carted_products.json",
        {
          product_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Assuming the JWT is stored in localStorage
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product added to cart:", response.data);
      navigate("/shoppingcart"); // Navigate to the shopping cart page
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:mt-[128px] min-h-screen lg:space-x-8 px-4 lg:px-8">
      <div className="flex lg:flex-row w-full lg:w-1/2">
        {/* Thumbnails with added margin and rounded corners */}
        <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-y-auto mr-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.image_url}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer object-contain w-24 h-24 lg:w-16 lg:h-auto rounded-lg p-1 ${
                selectedImage === image.image_url ? "bg-teal-100 bg-opacity-80" : ""
              } mb-2`} // Add margin-bottom for spacing between selector images
              onClick={() => setSelectedImage(image.image_url)}
            />
          ))}
        </div>

        {/* Main selected image with added margin */}
        <div className="w-full lg:w-auto lg:flex-grow-0 lg:mr-4">
          {" "}
          {/* Add margin-right here */}
          {selectedImage && (
            <img src={selectedImage} alt={product.name} className="w-full h-auto lg:h-96 object-contain rounded" /> // Add rounded class here
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-2/5 lg:mr-8">
        <div className="mt-20">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-2 text-xl font-semibold">${product.price}</p>
        </div>

        {/* Quantity and Cart Button Section */}
        <div className="flex items-center space-x-2">
          <label htmlFor="quantity" className="text-gray-700">
            Qty:
          </label>
          <div className="relative">
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              {[...Array(30).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.59 7l5 5 5-5H5.59z" />
              </svg>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-48 h-10 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded focus:outline-none transition duration-300 flex items-center justify-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
