import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Arranges gallery items in a dense grid for space-efficient display, optimal for showcasing collections with visual coherence.
 */
type CompactGridGalleryGroupProps = {
  children: React.ReactNode; // Expects [CompactGridGalleryItem]
  aspectRatio?: "landscape" | "square";
};

export const CompactGridGalleryGroup = ({
  children,
  aspectRatio = "landscape",
  className,
  ...props
}: CompactGridGalleryGroupProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "group/parent grid grid-cols-2 gap-4 px-4 py-3 md:grid-cols-4",
        className
      )}
      data-aspect={aspectRatio}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Constructs a grid item with an image background and a title overlay at the bottom.
 */
type CompactGridGalleryItemProps = {
  title: string;
  aspectRatio?: "landscape" | "square";
  imageDescription: string;
  imageSrc?: string;
};

export const CompactGridGalleryItem = ({
  title,
  aspectRatio,
  imageDescription,
  imageSrc,
  className,
  ...props
}: CompactGridGalleryItemProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      variant={"secondary"}
      className={cn(
        "group relative flex w-full h-auto items-end justify-start overflow-hidden rounded-lg p-4 text-start",
        "aspect-square",
        aspectRatio === "landscape"
          ? "aspect-video"
          : !aspectRatio
          ? "group-data-[aspect=landscape]/parent:aspect-video"
          : "",
        className
      )}
      {...props}
    >
      <img
        src={imageSrc}
        alt={imageDescription}
        className="absolute inset-0 w-full h-full  object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="z-10 w-full text-wrap text-base font-bold text-white">
        {title}
      </div>
    </Button>
  );
};
