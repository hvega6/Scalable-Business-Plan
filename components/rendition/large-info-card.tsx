import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LargeInfoCardGroupProps = {
  children: React.ReactNode; // Expect [InfoCard]
  style?: "filled" | "outlined" | "none";
};

export const LargeInfoCardGroup = ({
  children,
  style,
}: LargeInfoCardGroupProps) => {
  return (
    <div
      className="group/parent grid grid-cols-1 gap-4 px-4 py-3 md:grid-cols-2"
      data-style={style}
    >
      {children}
    </div>
  );
};

interface LargeInfoCardProps {
  title: string;
  subtitle: string;
  additionalInfo?: string;
  buttonText?: string;

  imageDescription: string;
  imageSrc?: string;

  style?: "filled" | "outlined" | "none";
}

export const LargeInfoCard: React.FC<LargeInfoCardProps> = ({
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
        "flex flex-col items-start rounded-lg",
        style === "filled"
          ? "bg-muted"
          : style === "outlined"
          ? "bg-card shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          : "group-data-[style=filled]/parent:bg-muted group-data-[style=outlined]/parent:bg-card group-data-[style=outlined]/parent:shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
      )}
    >
      <div className="h-56 w-full rounded-lg bg-card">
        <img
          className="w-full h-full  rounded-lg object-cover"
          src={
            imageSrc ||
            "https://images.unsplash.com/photo-1682687220247-9f786e34d472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={imageDescription}
        />
      </div>
      <div
        className={cn(
          "flex w-full flex-col gap-1 py-4",
          style === "none" ? "px-0" : "px-4"
        )}
      >
        <div className="flex w-full items-end gap-2">
          <div className="flex w-full flex-col">
            <div className="text-lg font-bold tracking-[-0.33px]">{title}</div>
            <div className="mt-2 flex w-full flex-col gap-1 text-sm text-muted-foreground">
              {subtitle && <div className="">{subtitle}</div>}
              {additionalInfo && <div className="">{additionalInfo}</div>}
            </div>
          </div>

          {buttonText && (
            <Button size={"sm"} className="shrink-0">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
