import { useState, useEffect } from "react";
import { contentBeans } from "./contentBeans";
import { Product } from "./product/product";
import Spinner from "../../design-sytem/spinner";

interface BeansItem {
  title: string;
  price: number;
  img: string;
}

export default function MenuContentCoffee() {
  const [beansData, setBeansData] = useState<BeansItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement de données
    setTimeout(() => {
      setBeansData(contentBeans);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-30">
          {beansData.map((item, index) => (
            <Product
              key={index}
              title={item.title}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      )}
    </div>
  );
}
