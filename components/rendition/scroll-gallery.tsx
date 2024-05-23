"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Organizes content into a horizontally scrollable format, spanning the full viewport width.
 */
interface ScrollGalleryGroupProps {
  children: React.ReactNode; // Expect ScrollGalleryItem[]
  aspectRatio?: "landscape" | "square" | "portrait";
  size?: "sm" | "md" | "lg";
  style?: "outlined" | "none";
}

export const ScrollGalleryGroup = ({
  children,
  aspectRatio = "square",
  size = "md",
  style = "none",
}: ScrollGalleryGroupProps) => {
  return (
    <ScrollArea className="w-full py-3">
      <div
        className="group/parent flex gap-4 px-4"
        data-aspect={aspectRatio}
        data-style={style}
        data-size={size}
      >
        {children}
      </div>
      <div className="pt-1">
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
};

/**
 * Forms a gallery card featuring an image, underlaid by a title and optional subtitle, with a call-to-action at the bottom when needed.
 */
interface ScrollGalleryItemProps {
  title: string;
  subtitle?: string;
  // when buttonText exists, style should be "outlined"
  buttonText?: string;
  imageDescription?: string;
  imageSrc?: string;

  aspectRatio?: "landscape" | "portrait" | "square";
  style?: "outlined" | "none";
  size?: "sm" | "md" | "lg";
}

export const ScrollGalleryItem = ({
  title,
  subtitle,
  buttonText,
  imageDescription,
  imageSrc,

  aspectRatio,
  size,
  style,
}: ScrollGalleryItemProps) => {
  let w = 200;
  switch (size) {
    case "sm":
      w = 160;
      break;
    case "md":
      w = 200;
      break;
    case "lg":
      w = 240;
      break;
  }

  return (
    <div
      className={cn(
        "space-y-3 rounded-lg",
        style === "outlined"
          ? "bg-card shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          : "group-data-[style=outlined]/parent:bg-card group-data-[style=outlined]/parent:shadow-[0_0_4px_0_rgba(0,0,0,0.1)]",

        !size &&
          "group-data-[size=lg]/parent:w-60 group-data-[size=md]/parent:w-[200px] group-data-[size=sm]/parent:w-40"
      )}
      style={
        size && {
          width: w,
        }
      }
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcGVyJTIwdG93ZWtsfGVufDB8fDB8fHww"
          }
          loading="lazy"
          decoding="async"
          alt={imageDescription}
          className={cn(
            "w-full overflow-hidden rounded-lg bg-muted object-cover transition-all hover:scale-105",
            aspectRatio === "portrait"
              ? "aspect-[3/4]"
              : aspectRatio === "square"
              ? "aspect-square"
              : aspectRatio === "landscape"
              ? "aspect-video"
              : "aspect-[3/4] group-data-[aspect=landscape]/parent:aspect-video group-data-[aspect=square]/parent:aspect-square"
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-y-1",
          subtitle ? "text-sm" : "text-base",
          style === "outlined"
            ? "px-4 pb-3"
            : "group-data-[style=outlined]/parent:px-4 group-data-[style=outlined]/parent:pb-3"
        )}
      >
        <h3 className={cn("w-full font-medium", buttonText && "truncate")}>
          {title}
        </h3>
        <div
          className={cn(
            "w-full text-xs tracking-wide text-muted-foreground",
            buttonText && "truncate"
          )}
        >
          {subtitle}
        </div>
        {buttonText && (
          <Button
            variant={"secondary"}
            size={"sm"}
            className={cn(
              "mt-2 w-full bg-muted text-sm font-bold text-foreground hover:bg-muted-foreground/20"
            )}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
