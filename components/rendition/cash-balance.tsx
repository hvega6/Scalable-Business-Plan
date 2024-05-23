import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

interface CashBalanceProps {
  value: string;
  leftLabel: string;
  rightLabel: string;
}

export const CashBalance: React.FC<
  CashBalanceProps &
    React.HTMLAttributes<HTMLDivElement> &
    Partial<{
      leftButton: React.ComponentPropsWithoutRef<typeof Button>;
      rightButton: React.ComponentPropsWithoutRef<typeof Button>;
    }>
> = ({
  value,
  leftLabel,
  rightLabel,
  leftButton,
  rightButton,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex w-full gap-4 px-4 py-3", className)} {...props}>
      <div className="flex w-full flex-col gap-4 text-2xl">
        <div className="font-bold">{value}</div>
        <div className="flex w-full gap-2">
          <Button
            variant={"secondary"}
            {...leftButton}
            className={cn("block w-full truncate", leftButton?.className)}
          >
            {leftLabel}
          </Button>
          <Button
            variant={"secondary"}
            {...rightButton}
            className={cn("block w-full truncate", rightButton?.className)}
          >
            {rightLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
