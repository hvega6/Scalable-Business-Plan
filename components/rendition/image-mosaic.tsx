import { cn } from "@/lib/utils";

interface ImageMosaicProps {
  // Either 3 or 5 images. Each imageDescription must be unique.
  images: {
    imageDescription: string;
    imageSrc?: string;
  }[];
}

export const ImageMosaic: React.FC<
  ImageMosaicProps & React.HTMLAttributes<HTMLDivElement>
> = ({ images, className, ...props }) => {
  const defaultImageSrc =
    "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className={cn(
        "px-4 py-3",
        "grid h-64 w-full grid-cols-2 gap-2",
        "overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      <img
        className="h-64 w-full object-cover"
        src={images[0]?.imageSrc || defaultImageSrc}
        alt={images[0]?.imageDescription || "Image description"}
      />
      {images.length === 2 ? (
        <img
          className="w-full h-full  object-cover"
          src={images[1].imageSrc || defaultImageSrc}
          alt={images[1].imageDescription}
        />
      ) : images.length === 3 ? (
        <div className="grid h-64 w-full grid-rows-2 gap-2">
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              className="w-full h-full  object-cover"
              src={image.imageSrc || defaultImageSrc}
              alt={image.imageDescription}
            />
          ))}
        </div>
      ) : (
        <div className="grid h-64 grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div key={image.imageDescription + index} className="relative">
              <img
                key={index}
                className="absolute w-full h-full  object-cover"
                src={image.imageSrc || defaultImageSrc}
                alt={image.imageDescription}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
