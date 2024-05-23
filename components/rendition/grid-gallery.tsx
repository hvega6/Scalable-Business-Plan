import { cn } from "@/lib/utils";

/**
 * Displays a grid of GridGalleryItem components with a configurable shape.
 * Adjusts grid layout based on screen size (2 cols on small, 4 cols on large).
 */
type GridGalleryGroupProps = {
  children: React.ReactNode; // Expect [GridGalleryItem]
  shape?: "landscape" | "square" | "circle";
};

export const GridGalleryGroup = ({
  children,
  shape = "square",
}: GridGalleryGroupProps) => {
  return (
    <div
      className="group/parent grid grid-cols-2 gap-4 px-4 py-3 md:grid-cols-4"
      data-shape={shape}
    >
      {children}
    </div>
  );
};

/**
 * Represents a single item in a grid gallery as a column with an image followed by an
 * optional title/subtitle. Provides hover effects, behaves like a button.
 */
interface GridGalleryItem {
  title?: string;
  subtitle?: string;
  imageDescription?: string;
  imageSrc?: string;

  shape?: "landscape" | "square" | "circle";
}
export const GridGalleryItem = ({
  title,
  subtitle,
  imageDescription,
  imageSrc,
  shape,
  className,
  ...props
}: GridGalleryItem & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group relative flex w-full flex-col items-start",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-200",
          // "border border-border",
          "rounded-lg bg-gradient-to-b from-muted/70 via-muted/80 to-muted/20",
          "pointer-events-none scale-105 opacity-0 group-hover:opacity-100"
        )}
      />

      <img
        alt={imageDescription}
        src={
          imageSrc ||
          "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        loading="lazy"
        width="1280"
        height="720"
        decoding="async"
        className={cn(
          "w-fill block scale-100 rounded-lg border border-muted bg-card object-cover shadow-sm transition-transform will-change-transform group-hover:scale-[1.0125]",
          shape === "landscape" ? "aspect-video" : "aspect-square",
          shape === "circle" ? "rounded-full" : "rounded-lg",
          !shape &&
            "aspect-square rounded-lg group-data-[shape=landscape]/parent:aspect-video group-data-[shape=circle]/parent:rounded-full"
        )}
      />

      {title && (
        <div
          className={cn(
            "relative mt-2 flex w-full flex-col pb-0.5 text-sm transition-all",
            shape === "circle" ? "text-center" : "text-start",
            !shape && "group-data-[shape=circle]/parent:text-center"
          )}
        >
          {title && <h3 className="w-full text-base font-medium">{title}</h3>}
          {subtitle && (
            <div className="w-full text-xs tracking-wide text-muted-foreground">
              {subtitle}
            </div>
          )}
        </div>
      )}
    </button>
  );
};
