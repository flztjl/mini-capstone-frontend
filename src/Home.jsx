import backgroundImage from "./assets/images/banner-3.png"; // Adjust the path if necessary

export const Home = (props) => {
  // const firstSixProducts = props.products.slice(0, 6);

  return (
    <>
      {/* Background image section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-start pl-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-left">Winter Collection</h2>
          <p className="text-xl md:text-2xl my-4 text-left">New Winter Collection 2022</p>
          <p className="mb-6 text-left">There&apos;s Nothing like Trend</p>
          <a
            href="#trending"
            className="text-white bg-blue-600 px-6 py-3 rounded-full inline-block font-semibold text-left"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Trending products section */}
      <section id="trending" className="container mx-auto px-4 pt-16 pb-12 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trending products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.images[0].image_url} // Assuming 'images' is an array and 'url' is the image URL
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 truncate">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <a
                  href={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  More info
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
