import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Baner from "../assets/img/لاونت-بنر-عریض.webp";
import Towels from "../assets/img/بنر-دسته-حوله.webp";
import Accessori from "../assets/img/-اکسسوری.webp";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://68bd4aa5227c48698f842caf.mockapi.io/products")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        const productsWithImage = data.map((item) => ({
          ...item,
          image: item.images && item.images.length > 0 ? item.images[0] : "",
        }));
        setProducts(productsWithImage);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setProducts([]);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="p-6">

    
      <section className="w-full flex justify-center mt-10 mb-10">
        <img
          src={Baner}
          className="w-full max-w-[1200px] h-[250px] sm:h-[450px] object-cover rounded-2xl shadow-md"
          
        />
      </section>

      <section className="mt-[100px] flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] md:w-[22%] bg-white rounded-xl overflow-hidden transition"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover rounded-t-xl"
              />
            ) : (
              <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center rounded-t-xl">
                No Image
              </div>
            )}

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-center">{item.title}</h3>
              <p className="text-gray-700 font-medium text-center">$ {item.price}</p>
              <Link
                to={`/product/${item.id}`}
                className="mt-2 inline-block text-center bg-white text-black px-4 py-2 rounded-full hover:bg-pink-200 transition"
              >
                مشاهده
              </Link>
            </div>
          </div>
        ))}
      </section>

     
      <section className="my-16 flex flex-wrap justify-center gap-6">
        <img
          src={Towels}
          className="w-full sm:w-[48%] md:w-[45%] h-[200px] md:h-[300px] object-cover rounded-xl"
          
        />
        <img
          src={Accessori}
          className="w-full sm:w-[48%] md:w-[45%] h-[200px] md:h-[300px] object-cover rounded-xl"
          
        />
      </section>
    </main>
  );
}
