import { useState, useEffect } from "react";
import { contentCoffee } from "./contentCoffee"; // Importez les données depuis votre fichier
import Spinner from "../../design-sytem/spinner";
import { Product } from "./product/product";

interface CoffeeItem {
  title: string;
  price: number;
  img: string;
}

export default function MenuContentCoffee() {
  const [coffeeData, setCoffeeData] = useState<CoffeeItem[]>([]); // Modifiez le nom de la variable et du state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement de données
    const timer = setTimeout(() => {
      setCoffeeData(contentCoffee);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-30">
          {coffeeData.map((item, index) => (
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
