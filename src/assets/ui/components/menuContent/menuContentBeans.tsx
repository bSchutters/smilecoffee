import { Product } from "./product/product";
import { contentBeans } from "./contentBeans";

export default function MenuContentBeans() {
  return (
    <div className="grid grid-cols-4 gap-30">
      {contentBeans.map((item, index) => (
        <Product
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}
