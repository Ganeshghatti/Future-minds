import { useState } from "react";
import image1 from "../assets/gallery/IMG_7742.JPG";
import image2 from "../assets/gallery/C4A06ACD-3355-4BE6-A55A-D9455E321E8F_1_102_o (3).jpeg";
import image3 from "../assets/gallery/D808416C-12EF-41AE-9259-D48A1D746B6E_1_102_o (2).jpeg";
import image4 from "../assets/gallery/e81d4bc9-751b-40cc-86d5-c513b3fbc65b-copied-media~2.jpg";
import image5 from "../assets/gallery/IMG_8668.JPG";
import image6 from "../assets/gallery/IMG_9916.JPG";
import image7 from "../assets/gallery/IMG_0024 (2).jpg";
import image8 from "../assets/gallery/IMG_0030 (1).jpg";
import image9 from "../assets/gallery/IMG_0538.JPG";
import image10 from "../assets/gallery/IMG_0568.JPG";
import image11 from "../assets/gallery/IMG_0586.JPG";
import image12 from "../assets/gallery/IMG_4657.JPG";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: image1,
      alt: "Industrial robot assembling car parts",
    },
    {
      src: image2,
      alt: "Robotic arms working on manufacturing line",
    },
    {
      src: image3,
      alt: "Precision robotic arm in factory",
    },
    {
      src: image4,
      alt: "Smart factory with digital control",
    },
    {
      src: image5,
      alt: "Collaborative robot working with human",
    },
    {
      src: image6,
      alt: "Collaborative robot working with human",
    },
    {
      src: image7,
      alt: "Automated quality control system",
    },
    {
      src: image8,
      alt: "Flexible robotic production line",
    },
    {
      src: image9,
      alt: "Innovative robotics technology",
    },
    {
      src: image10,
      alt: "Efficient factory automation process",
    },
    {
      src: image11,
      alt: "Custom robotic automation solutions",
    },
    {
      src: image12,
      alt: "Smart industrial automation software",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-slate-900 px-6 lg:px-24 py-16 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Gallery
      </h2>{" "}
      <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
      <div className="mt-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" object-cover rounded-2xl"
                />
                {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                   
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view larger
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            {/* <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-xl">
              <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
