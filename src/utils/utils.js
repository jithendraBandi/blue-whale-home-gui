import { Carousel } from "antd";

export const carouselImages = (imagesData) => (
  <Carousel autoplay>
    {imagesData?.map((imageData, index) => (
      <div key={index}>
        <img
          src={imageData?.src}
          alt={imageData?.alt}
          style={{ width: imageData?.width, height: imageData?.height }}
        />
      </div>
    ))}
  </Carousel>
);
