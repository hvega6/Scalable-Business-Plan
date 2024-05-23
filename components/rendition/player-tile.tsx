import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlayerTileProps {
  title: string;
  subtitle?: string;
  leading: {
    type: "image";
    imageDescription: string;
    imageSrc?: string;
  };
  style: "filled" | "outlined" | "none";
}

export const PlayerTile: React.FC<PlayerTileProps> = ({
  title,
  subtitle,
  leading,
  style,
}) => {
  return (
    <div className="px-4 py-3">
      <div
        className={cn(
          "hap-4 flex items-center justify-between rounded-lg px-4 py-3",
          style === "filled"
            ? "bg-muted"
            : style === "outlined"
            ? "border bg-transparent"
            : "p-0"
        )}
      >
        <div className="flex items-center gap-4">
          <img
            src={
              leading?.imageSrc ||
              "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcGVyJTIwdG93ZWtsfGVufDB8fDB8fHww"
            }
            className={cn(
              "size-12",
              "flex items-center justify-center rounded-md bg-muted-foreground"
            )}
          />

          <div className="flex flex-col justify-center gap-1">
            <div className="text-sm font-bold leading-none">{title}</div>

            {subtitle && (
              <div className="text-xs text-muted-foreground">{subtitle}</div>
            )}
          </div>
        </div>
        <Button className="flex w-10 h-10 cursor-pointer items-center justify-center rounded-full bg-primary p-0 text-primary-foreground">
          {/* <PlayIcon fill="black" size={24} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
