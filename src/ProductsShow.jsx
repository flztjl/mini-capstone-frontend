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
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <img src={product.url} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={product.url} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={product.description} name="description" type="text" />
        </div>
        <div>
          Price: <input defaultValue={product.price} name="price" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Destroy product</button>
    </div>
  );
}
