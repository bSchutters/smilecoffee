import { Product } from "./product/product";

export default function MenuContentBeans() {
  let urlImg =
    "https://www.starbucks.fr/sites/starbucks-fr/files/styles/c04_image_text_grid_600x600/public/2020-07/Pike-Place-Coffee-Bag-C04-RESIZED.jpg.webp?itok=2iLDjmBl";

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
