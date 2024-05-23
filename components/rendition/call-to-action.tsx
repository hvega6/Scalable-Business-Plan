import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CallToActionComponentProps {
  title: string;
  content?: string;
  buttonText: string;
  textAlign: "start" | "center";
  style: "outlined" | "filled" | "none";
}

export const CallToActionComponent: React.FC<CallToActionComponentProps> = ({
  title,
  content,
  buttonText,
  textAlign = "start",
  style = "none",
}) => {
  return (
    <div className="w-full px-4 py-3">
      <div
        className={cn(
          "flex flex-col gap-3",
          textAlign === "start" ? "items-start" : "items-center",
          style === "outlined"
            ? "rounded-lg border border-border bg-card p-6"
            : style === "filled"
            ? "rounded-lg bg-muted p-6"
            : "p-0",
          "overflow-hidden"
        )}
      >
        <h2
          className={cn(
            "text-2xl font-bold leading-7 tracking-tight",
            textAlign === "start" ? "text-start" : "text-center"
          )}
        >
          {title}
        </h2>
        {content && (
          <span
            className={cn(
              textAlign === "start" ? "text-start" : "text-center",
              "text-base"
            )}
          >
            {content}
          </span>
        )}

        {buttonText && (
          <Button size="sm" className="text-primary-foreground">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
