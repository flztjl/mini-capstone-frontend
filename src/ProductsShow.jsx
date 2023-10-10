export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <img src={props.product.url} />
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.product.url} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Destroy product</button>
    </div>
  );
}
