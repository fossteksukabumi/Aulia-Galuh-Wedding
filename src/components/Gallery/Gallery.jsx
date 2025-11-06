import React, { useState } from "react";
import { GalleryWrapper, GalleryTitle, GalleryRow, GalleryItem, Modal, ModalImg, ModalClose } from "./Gallery.style";

import image1 from "../../assets/gallery/1.webp";
import image2 from "../../assets/gallery/2.webp";
import image3 from "../../assets/gallery/3.webp";
import image4 from "../../assets/gallery/4.webp";
import image6 from "../../assets/gallery/6.webp";
import image7 from "../../assets/gallery/7.webp";
import image8 from "../../assets/gallery/8.webp";
import image10 from "../../assets/gallery/10.webp";
import image11 from "../../assets/gallery/11.webp";
import image14 from "../../assets/gallery/14.webp";


const photos = [
  { id: 1, src: image1, alt: "Photo 1" },
  { id: 2, src: image2, alt: "Photo 2" },
  { id: 3, src: image3, alt: "Photo 3" },
  { id: 4, src: image4, alt: "Photo 4" },
  { id: 6, src: image6, alt: "Photo 6" },
  { id: 7, src: image7, alt: "Photo 7" },
  { id: 8, src: image8, alt: "Photo 8" },
  { id: 10, src: image10, alt: "Photo 10" },
  { id: 11, src: image11, alt: "Photo 11" },
  { id: 14, src: image14, alt: "Photo 14" },
 
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <GalleryWrapper>
      <GalleryTitle>Our Prewedding Moments</GalleryTitle>
      <GalleryRow>
        {photos.map((photo, index) => (
          <GalleryItem key={photo.id} $index={index} onClick={() => setSelectedPhoto(photo)}>
            <img src={photo.src} alt={photo.alt} />
          </GalleryItem>
        ))}
      </GalleryRow>

      {selectedPhoto && (
        <Modal onClick={() => setSelectedPhoto(null)}>
          <ModalImg src={selectedPhoto.src} alt={selectedPhoto.alt} />
          <ModalClose onClick={() => setSelectedPhoto(null)}>×</ModalClose>
        </Modal>
      )}
    </GalleryWrapper>
  );
}
