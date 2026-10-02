import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, addToCart } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdf8f5]">
        <h2 className="text-xl sm:text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdf8f5]">
        <h2 className="text-xl sm:text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f5] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col lg:flex-row gap-8 lg:gap-12">

        <div className="w-full lg:w-1/2 rounded-2xl sm:rounded-3xl bg-white border border-[#eee4df] p-5 sm:p-8 shadow-sm">
          <div className="flex items-center justify-center rounded-2xl bg-[#f8f3ef] p-5 sm:p-8">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 sm:h-96 w-full object-contain cursor-pointer transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-wider text-[#8c5a47]">
            {product.category}
          </p>

          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#2b2b2b]">
            {product.title}
          </h1>

          <p className="mb-5 text-2xl sm:text-3xl font-bold text-[#8c5a47]">
            ${product.price}
          </p>

          <div className="mb-6 h-px bg-[#e8ded6]"></div>

          <p className="mb-8 text-sm sm:text-base leading-7 text-gray-600">
            {product.description}
          </p>

          <a
            href="#cart"
            className="w-full sm:w-fit rounded-xl bg-[#2b2b2b] px-8 py-3.5 text-center text-sm font-medium text-white hover:bg-[#8c5a47] transition duration-300"
          >
            Add to Cart
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;

