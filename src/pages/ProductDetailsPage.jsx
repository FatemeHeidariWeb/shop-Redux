
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetailsPage() {
    const [product, setProduct] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://68bd4aa5227c48698f842caf.mockapi.io/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct({
                    ...data,
                    image: data.images ? data.images[0] : "",
                });
                setIsError(false);
                setIsLoading(false);
            })
            .catch(() => {
                setProduct({});
                setIsError(true);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) return <h3 className="text-center mt-10"><div className="flex items-center justify-center h-[400px]">
        <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    </h3>;
    if (isError) return <h3 className="text-center mt-10 text-red-500">خطا</h3>;

    return (
        <main className="flex justify-center mt-[170px]">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl">

                <div className="md:w-1/2 w-full h-[400px] bg-gray-200 flex items-center justify-center">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain p-4"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            No Image
                        </div>
                    )}
                </div>
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-center gap-4">
                    <h2 className=" font-bold">{product.title}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full  hover:bg-pink-600 transition w-max"
                    >
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </main>
    );
}
