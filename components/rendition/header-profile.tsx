import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

/**
 * Showcases a profile header with a customizable avatar and layout options for text alignment.
 * Ideal for user profiles, author introductions, or speaker highlights, where the visual identity is as important as the textual content.
 */
type HeaderProfileProps = {
  title: string;
  subtitle?: string;
  additionalInfo?: string;
  imageDescription: string;
  imageSrc?: string;

  imageShape?: "circle" | "square";
  textAlign?: "start" | "center" | "compact";
};

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  title,
  subtitle,
  additionalInfo,
  imageDescription,
  imageSrc,
  imageShape = "circle",
  textAlign = "center",
}) => {
  if (textAlign === "compact") {
    return (
      <div className="flex items-center px-4 py-3">
        {imageDescription && (
          <img
            className={cn(
              "w-24 h-24 shrink-0 bg-muted object-cover",
              imageShape === "circle" ? "rounded-full" : "rounded-lg"
            )}
            src={
              imageSrc ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyLGRpc2NvcmQtdXNlcnx8fHx8fDE3MTAzNjk2NzA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            }
            alt={imageDescription}
          />
        )}
        <div className="ml-4">
          <div className="text-2xl font-bold leading-7 tracking-tight">
            {title}
          </div>
          {subtitle && (
            <div className="text-base leading-6 text-muted-foreground">
              {subtitle}
            </div>
          )}
          {additionalInfo && (
            <div className="text-base leading-6 text-muted-foreground">
              {additionalInfo}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-2 p-4",
        textAlign === "start" ? "items-start" : "items-center"
      )}
    >
      {imageDescription && (
        <img
          className={cn(
            "w-32 h-32 shrink-0 bg-muted object-cover",
            imageShape === "circle" ? "rounded-full" : "rounded-lg"
          )}
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyLGRpc2NvcmQtdXNlcnx8fHx8fDE3MTAzNjk2NzA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          }
          alt={imageDescription}
        />
      )}

      <div
        className={cn(
          "flex w-full flex-col",
          textAlign === "start" ? "text-start" : "text-center"
        )}
      >
        <div className="text-lg font-semibold">{title}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        )}
        {additionalInfo && (
          <div className="text-sm text-muted-foreground">{additionalInfo}</div>
        )}
      </div>
    </div>
  );
};
