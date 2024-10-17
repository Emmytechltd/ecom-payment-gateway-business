import React, { useState } from 'react';


const Products = () => {
  // Sample product data
  const [products] = useState([
    { id: 1, name: "Laptop XYZ", price: 999, category: "Laptop", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone ABC", price: 799, category: "Phone", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Laptop 123", price: 1199, category: "Laptop", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Phone DEF", price: 699, category: "Phone", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Laptop Pro", price: 1499, category: "Laptop", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Phone Ultra", price: 999, category: "Phone", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Laptop Mega", price: 1899, category: "Laptop", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Phone Max", price: 1299, category: "Phone", image: "https://via.placeholder.com/150" },
  ]);

  const [cart, setCart] = useState([]); // Cart state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Filter state
  const [sortOrder, setSortOrder] = useState("none"); // Sorting state

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products by category (Laptop/Phone)
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Sort products by price (Low to High or High to Low)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0; // No sorting if "none"
  });

  return (
    <section className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-10">Featured Products</h2>

      {/* Filter and Sort Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Category Filter */}
        <div className="w-1/2">
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Category</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Products</option>
            <option value="Laptop">Laptops</option>
            <option value="Phone">Phones</option>
          </select>
        </div>

        {/* Price Sorter */}
        <div className="w-1/2">
          <label className="block mb-2 text-gray-700 font-semibold">Sort by Price</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Cart Section */}
      <div className="mb-10 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-600 mt-4">Your cart is empty. Start adding products!</p>
        ) : (
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b border-gray-200">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold">${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
