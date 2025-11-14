import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increseQty, removeFromCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const cartProducts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartProducts
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <main className="p-6 min-h-screen bg-gray-50 text-right font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center"> سبد خرید </h1>

      {cartProducts.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded gap-4"
            >
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">قیمت واحد: {item.price} $</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => dispatch(increseQty(item))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="text-neutral-700 hover:text-pink-800 font-medium"
              >
                حذف
              </button>
            </div>
          ))}

          <div className="mt-4 p-4 bg-white rounded text-lg font-bold">
            جمع کل: {total} $
          </div>
        </div>
      )}
    </main>
  );
}
