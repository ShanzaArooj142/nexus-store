import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  // Get product ID from URL[cite: 1]
  const { id } = useParams();

  // Get products, loading, and addToCart from context[cite: 1]
  const { products, loading, addToCart } = useContext(ProductContext);

  // Loading[cite: 1]
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  // Find product[cite: 1]
  const product = products.find((item) => item.id === Number(id));

  // Product not found[cite: 2]
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-lg border p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <p className="mb-3 text-sm uppercase text-gray-500">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>

          {/* Price */}
          <p className="mb-6 text-2xl font-bold">${product.price}</p>

          {/* Description */}
          <p className="mb-6 leading-7 text-gray-600">{product.description}</p>

          {/* Link in place of Add to Cart button */}
          <a
            href="#cart"
            className="w-fit rounded-lg bg-black px-6 py-3 text-white"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;