import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SmallInfoCardGroupProps = {
  children: React.ReactNode; // Expect [InfoCard]
  style?: "filled" | "outlined" | "none";
};

export const SmallInfoCardGroup = ({
  children,
  style,
}: SmallInfoCardGroupProps) => {
  return (
    <div
      className="group/parent grid grid-cols-1 gap-4 px-4 py-3 md:grid-cols-2"
      data-style={style}
    >
      {children}
    </div>
  );
};

/**
 * Unfolds information through a card, distinguished by size for depth variation. Small cards juxtapose concise text with an image, perfect for brief overviews. Large cards, featuring an image atop, invite deeper engagement with expanded content, making them ideal for detailed storytelling or comprehensive summaries.
 */
interface SmallInfoCardProps {
  title: string;
  subtitle: string;
  additionalInfo?: string;
  buttonText?: string;

  imageDescription: string;
  imageSrc?: string;

  style?: "filled" | "outlined" | "none";
}

export const SmallInfoCard: React.FC<SmallInfoCardProps & {
  className?: string;
  
}> = ({
  title,
  subtitle,
  additionalInfo,
  buttonText,
  style,
  imageDescription,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-lg",
        style === "none" ? "p-0" : "p-4",
        style === "filled"
          ? "bg-muted"
          : style === "outlined"
          ? "bg-card shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          : "group-data-[style=filled]/parent:bg-muted group-data-[style=outlined]/parent:bg-card group-data-[style=outlined]/parent:shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
      )}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="text-lg font-bold tracking-tight">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
        <div className="flex w-full flex-col items-start gap-2 text-muted-foreground">
          <div className="flex w-full flex-col gap-1">
            {additionalInfo && (
              <div className="text-sm text-muted-foreground">
                {additionalInfo}
              </div>
            )}
          </div>
          {buttonText && (
            <Button
              size={"sm"}
              variant={style === "filled" ? "default" : "secondary"}
              className={cn(
                "flex-0",
                style === "filled" ? "" : "bg-muted text-foreground"
              )}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
      <div
        className={cn(
          "aspect-video w-28 shrink-0 self-stretch rounded-lg bg-muted"
        )}
      >
        <img
          className="w-full h-full  rounded-lg object-cover"
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1682687220247-9f786e34d472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={imageDescription}
        />
      </div>
    </div>
  );
};
