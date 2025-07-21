// components/ProductCard.jsx

export default function ProductCard({ title, price, image, category }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
      <img src={image} alt={title} className="mx-auto h-40 object-contain" />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <p className="uppercase text-sm text-gray-400">{category}</p>
      <button className="mt-4 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
        Add to cart
      </button>
    </div>
  );
}
