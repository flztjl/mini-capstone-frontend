import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShow(props) {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    props.onUpdateProduct(product.id, formData, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(product);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h1 className="text-xl font-bold mb-3">Product information</h1>
      <div className="mb-4">
        <p className="text-sm font-semibold">
          Name: <span className="text-sm font-normal">{product.name}</span>
        </p>
      </div>
      <div className="mb-4">
        <img src={product.url} alt={product.name} className="rounded" />
      </div>
      <div className="mb-4">
        <p className="text-sm font-semibold">
          Description: <span className="text-sm font-normal">{product.description}</span>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm font-semibold">
          Price: <span className="text-sm font-normal">{product.price}</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <input
            defaultValue={product.name}
            name="name"
            type="text"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            defaultValue={product.url}
            name="url"
            type="text"
            placeholder="Image URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            defaultValue={product.description}
            name="description"
            type="text"
            placeholder="Description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            defaultValue={product.price}
            name="price"
            type="text"
            placeholder="Price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update product
        </button>
      </form>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Destroy product
      </button>
    </div>
  );
}
