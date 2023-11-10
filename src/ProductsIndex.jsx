export const ProductsIndex = (props) => {
  const products = props.products;

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold text-center my-6">All products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
              {product.images && product.images[0] && (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-md mb-4">Price: {product.price}</p>
                <a
                  href={`/products/${product.id}`}
                  className="text-md text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  More info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
