// pages/index.jsx

import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      title: 'AirPods Pro',
      price: 249,
      image: '/images/airpods.png',
      category: 'Gadgets',
    },
    {
      title: 'AirTag',
      price: 29,
      image: '/images/airtag.png',
      category: 'Gadgets',
    },
    {
      title: 'Apple Watch Series 6',
      price: 399,
      image: '/images/watch.png',
      category: 'Gadgets',
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-medium text-gray-500">
          SHOWING ALL {products.length} RESULTS
        </p>
        <select className="border border-gray-300 px-3 py-2 rounded-md text-sm">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </main>
  );
}
