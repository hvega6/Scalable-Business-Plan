import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface ButtonComponentProps {
  title: string;
  style?: "primary" | "muted";
  fontWeight?: "normal" | "bold";
  size?: "md" | "lg";
}

export const ButtonComponent: React.FC<ButtonComponentProps & ButtonProps> = ({
  title,
  style = "primary",
  fontWeight = "normal",
  size = "md",
  ...buttonProps
}) => {
  return (
    <div className="px-4 py-3">
      <Button
        variant={style === "primary" ? "default" : "secondary"}
        className={cn(
          "w-full text-base tracking-[0.24px]",
          fontWeight === "bold" ? "font-bold" : "font-normal",
          size === "md" ? "h-10" : "h-12"
        )}
        {...buttonProps}
      >
        {title}
      </Button>
    </div>
  );
};
