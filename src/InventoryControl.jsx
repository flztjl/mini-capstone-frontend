import axios from "axios";
import { useState, useEffect } from "react";

export const InventoryControl = () => {
  // Define the base URL for your API requests
  const apiUrl = "http://localhost:3000"; // Replace with the correct URL if needed
  const [imageUrls, setImageUrls] = useState([""]); // Start with one input
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products.json`);
        setSearchResults(response.data); // assuming the response data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error.response.data);
      }
    };

    if (searchTerm) {
      // Implement a debounce mechanism if necessary
      fetchProducts();
    }
  }, [searchTerm]);

  const handleSearchAndSelect = async (value) => {
    setSearchTerm(value);
    if (value.trim().length > 2) {
      // Only search if there's a valid string
      try {
        const response = await axios.get(`${apiUrl}/products/search`, {
          params: { query: value },
        });
        setSearchResults(response.data); // Assuming your API returns an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  // State for managing form data for both creating and updating products
  const [formData, setFormData] = useState({
    name: "",
    imageUrls: [""],
    description: "",
    price: "",
    quantity: "",
    supplierId: "",
  });

  const handleProductSelect = (product) => {
    console.log("Selected product:", product); // Debugging
    setSelectedProduct(product);
    setSearchResults([]); // Clear search results after selection
    // Populate the form with the selected product's data
    setFormData({
      name: product.name,
      imageUrls: product.images.map((img) => img.url), // Adjust according to your image structure
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      supplierId: product.supplier_id,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append image URLs to formData
    imageUrls.forEach((url) => {
      formData.append("product[image_urls][]", url);
    });

    try {
      // Send a POST request to the Rails API to create a new product
      const response = await axios.post(`${apiUrl}/products.json`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // If successful, do something with the response, e.g., update state, navigate, or show a message
      console.log("Product created:", response.data);
      // Reset the form if desired
      event.target.reset();
      setImageUrls([""]); // Reset image URLs
      // You could navigate to the products page or perform another action here
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred:", error.response.data);
    }
  };

  // Function to track changes in image URL inputs
  const handleImageUrlChange = (index, event) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = event.target.value;
    setImageUrls(newImageUrls);
  };

  // Function to add a new image URL input
  const addImageUrlInput = () => {
    setImageUrls([...imageUrls, ""]);
  };

  // Function to remove an image URL input
  const removeImageUrlInput = (index) => {
    const newImageUrls = imageUrls.filter((_, idx) => idx !== index);
    setImageUrls(newImageUrls);
  };

  // Render the form
  return (
    <div className="flex flex-row mt-20 items-center min-h-screen">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Create new Product</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          {" "}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div className="mb-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="flex flex-col mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`images_${index}`}>
                  Image URL {index + 1}:
                </label>
                <input
                  type="text"
                  id={`images_${index}`}
                  name={`images_${index}`}
                  value={url}
                  onChange={(e) => handleImageUrlChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => removeImageUrlInput(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Remove
                  </button>
                  {index === imageUrls.length - 1 && (
                    <button
                      type="button"
                      onClick={addImageUrlInput}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add Another Image URL
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="ingeter"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              name="quantity"
              type="ingeter"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplier_id">
              Supplier_id:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supplier_id"
              name="supplier_id"
              type="ingeter"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create product
          </button>
        </form>
      </div>

      {/* Update Section */}
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Update Product</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          {" "}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedProduct ? selectedProduct.name : ""}
              id="name"
              name="name"
              type="text"
              onChange={(e) => handleSearchAndSelect(e)}
              placeholder="Search and select a product to update its details..."
            />
            {/* Results */}
            <ul>
              {searchResults.slice(0, 3).map((product) => (
                <li key={product.id} onClick={() => handleProductSelect(product)} className="cursor-pointer">
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="flex flex-col mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`images_${index}`}>
                  Image URL {index + 1}:
                </label>
                <input
                  type="text"
                  id={`images_${index}`}
                  name={`images_${index}`}
                  value={selectedProduct ? selectedProduct.imageUrls : ""}
                  onChange={(e) => handleImageUrlChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => removeImageUrlInput(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Remove
                  </button>
                  {index === imageUrls.length - 1 && (
                    <button
                      type="button"
                      onClick={addImageUrlInput}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add Another Image URL
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="ingeter"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              name="quantity"
              type="ingeter"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplier_id">
              Supplier_id:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supplier_id"
              name="supplier_id"
              type="ingeter"
              value={selectedProduct ? selectedProduct.supplier_id : ""}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update product
          </button>
        </form>
      </div>
    </div>
  );
};
