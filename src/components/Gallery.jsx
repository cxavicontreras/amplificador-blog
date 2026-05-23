import img1 from "../assets/images/gallery1.png";
import img2 from "../assets/images/gallery2.png";
import img3 from "../assets/images/gallery3.png";
import img4 from "../assets/images/gallery4.png";
import img5 from "../assets/images/gallery5.png";

export default function Gallery() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl"
        >

          <img
            src={img}
            className="hover:scale-105 transition duration-300"
          />

        </div>
      ))}

    </div>
  );
}