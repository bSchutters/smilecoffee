import { Product } from "./product/product";

export default function MenuContentCoffee() {
  let urlImg =
    "https://www.starbucks.fr/sites/starbucks-fr/files/styles/c04_image_text_grid_600x600/public/2023-11/SBX_DEL_1200x1200_Toffee_Nut_Latte.jpg.webp?itok=CsOjhDWb";

  return (
    <div className="grid grid-cols-4 gap-30">
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
      <Product title="Test1" price={2} img={urlImg} />
    </div>
  );
}
