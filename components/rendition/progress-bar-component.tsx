import { Progress } from "@/components/ui/progress";
import React from "react";

type ProgressBarComponentProps = {
  title: string;
  description?: string;
  value: number; // Assume the value to be between 0 and 100
};

export const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  title,
  description,
  value,
}) => {
  const progressValue = Math.min(100, Math.max(0, value));

  return (
    <div className="flex flex-col gap-2 px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{title}</span>
        <span className="">{progressValue}%</span>
      </div>
      <Progress className="h-2" value={progressValue} />
      {description && (
        <span className="text-sm tracking-wide text-muted-foreground">
          {description}
        </span>
      )}
    </div>
  );
};
