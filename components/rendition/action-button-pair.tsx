import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

interface ActionButtonPairProps {
  // Space is constrained for labels, max 2 or 3 short words.
  leftLabel: string;
  rightLabel: string;
  primaryPosition?: "left" | "right";
}

export const ActionButtonPair: React.FC<
  ActionButtonPairProps &
    React.HTMLAttributes<HTMLDivElement> &
    Partial<{
      leftButton: React.ComponentPropsWithoutRef<typeof Button>;
      rightButton: React.ComponentPropsWithoutRef<typeof Button>;
    }>
> = ({
  leftLabel,
  rightLabel,
  primaryPosition = "right",
  leftButton,
  rightButton,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("grid w-full grid-cols-2 gap-4 px-4 py-3", className)}
      {...props}
    >
      <Button
        {...leftButton}
        className={cn(
          "block truncate",
          primaryPosition === "right"
            ? "bg-muted text-muted-foreground hover:bg-muted-foreground/20 dark:border dark:border-muted dark:bg-transparent dark:text-foreground dark:hover:bg-muted"
            : "text-primary-foreground hover:bg-primary/80",
          leftButton?.className
        )}
      >
        {leftLabel}
      </Button>
      <Button
        {...rightButton}
        className={cn(
          "block truncate",
          primaryPosition === "left"
            ? "bg-muted text-muted-foreground hover:bg-muted-foreground/20 dark:border dark:border-muted dark:bg-transparent dark:text-foreground dark:hover:bg-muted"
            : "text-primary-foreground hover:bg-primary/80",
          rightButton?.className
        )}
      >
        {rightLabel}
      </Button>
    </div>
  );
};
