
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/sm.webp";

export default function Layout({ children }) {
  const countProducts = useSelector((state) => state.cart.items.length);

  return (
    <>
      <header className="shadow-md py-4 bg-white">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/">
            <img src={Logo} className="w-40"  />
          </Link>

          <div className="flex-1 flex justify-center w-full">
            <input
              type="text"
              placeholder="جست‌وجوی محصولات..."
              className="border-2 border-pink-500 text-black px-4 py-2 rounded-md w-full max-w-md focus:outline-none"
            />
          </div>

          <nav className="flex gap-4">
            <Link
              to="/"
              className="bg-pink-200 text-black px-4 py-2 rounded-full hover:bg-pink-300 transition"
            >
              خانه
            </Link>

            <Link
              to="/cart"
              className="bg-pink-200 text-black px-4 py-2 rounded-full hover:bg-pink-300 transition"
            >
              سبد خرید ({countProducts})
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 min-h-screen">
        {children}
      </main>

      <footer className="bg-neutral-400 mt-6 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6 text-right">
          <div>
            <h4 className="font-bold mb-2">خدمات مشتریان</h4>
            <ul className="flex flex-col gap-1">
              <li><Link to="#" className="hover:text-pink-300">قوانین و مقررات</Link></li>
              <li><Link to="#" className="hover:text-pink-300">شرایط مرجوعی</Link></li>
              <li><Link to="#" className="hover:text-pink-300">پیگیری سفارشات</Link></li>
              <li><Link to="#" className="hover:text-pink-300">سوالات متداول</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">دسترسی سریع</h4>
            <ul className="flex flex-col gap-1">
              <li><Link to="#" className="hover:text-pink-500">فروشگاه</Link></li>
              <li><Link to="#" className="hover:text-pink-500">مجله لاونت</Link></li>
              <li><Link to="#" className="hover:text-pink-500">راه ارتباطی</Link></li>
              <li><Link to="#" className="hover:text-pink-500">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">پشتیبانی مشتریان</h4>
            <p>ساعت پاسخگویی: ۸ الی ۱۸</p>
            <p className="bg-pink-200 rounded p-0.5">کد نویسی شده توسط فاطمه حیدری</p>
          </div>
        </div>
      </footer>
    </>
  );
}
