import { useState, useEffect } from "react";
import { contentFood } from "./contentFood";
import { Product } from "./product/product";
import Spinner from "../../design-sytem/spinner";

interface FoodItem {
  title: string;
  price: number;
  img: string;
}

export default function MenuContentCoffee() {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement de données
    setTimeout(() => {
      setFoodData(contentFood);
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
          {foodData.map((item, index) => (
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
