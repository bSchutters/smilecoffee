import shop1 from "/shop/shop1.jpg";
import shop2 from "/shop/shop2.jpg";
import shop3 from "/shop/shop3.jpg";
import shop4 from "/shop/shop4.jpg";
import shop5 from "/shop/shop5.jpg";
import shop6 from "/shop/shop6.jpg";

const images = [shop1, shop2, shop3, shop4, shop5, shop6];

export default function GalleryComp() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          className="max-h-96 max-w-full w-full h-full rounded-lg object-cover"
          src={image}
          alt=""
        />
      ))}
    </div>
  );
}
