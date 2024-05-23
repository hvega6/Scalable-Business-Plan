import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

/**
 * Presents a visually striking header card combining a background image with overlayed text, customizable for vertical text alignment. This component is designed to make a strong visual impact at the top of a page or section, with optional interactivity through a button, ideal for welcome banners, feature highlights, or call-to-action prompts.
 * This component should only appear, at most, once per generation.
 */
interface HeaderImageCardProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  textAlign?: "top" | "center" | "bottom";
  imageDescription: string;
  imageSrc?: string;
}

export const HeaderImageCard = ({
  title,
  subtitle,
  buttonText,
  textAlign = "center",
  imageDescription,
  imageSrc,
  onButtonClick,
}: HeaderImageCardProps & {
  onButtonClick?: () => void;
}) => {
  return (
    <div className="group relative h-[480px] w-full text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcGVyJTIwdG93ZWtsfGVufDB8fDB8fHww"
          }
          alt={imageDescription}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-center gap-2 bg-black/30 p-6",
          textAlign === "bottom" ? "justify-end" : "justify-center",
          textAlign === "center" ? "items-center" : "items-start"
        )}
      >
        <div
          className={cn(
            "w-full break-words text-4xl font-black tracking-tight",
            textAlign === "center" ? "text-center" : "text-start"
          )}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className={cn(
              "text-base",
              textAlign === "center" ? "text-center" : "text-start"
            )}
          >
            {subtitle}
          </div>
        )}
        {buttonText && (
          <Button onClick={onButtonClick} className="font-bold">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
