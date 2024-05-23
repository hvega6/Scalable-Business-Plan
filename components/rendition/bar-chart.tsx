import { cn } from "@/lib/utils";

type BarChartProps = {
  title: String;
  subtitle: string;
  timePeriod: string;
  // Always start with + or - sign
  percentageChange: string;
  dates: string[];
  orientation?: "row" | "column";
  style?: "outlined" | "none";
};

export const BarChart: React.FC<BarChartProps> = ({
  title,
  subtitle,
  timePeriod,
  percentageChange,
  dates,
  orientation = "row",
  style = "none",
}) => {
  return (
    <div className="px-4 py-3">
      <div
        className={cn(
          "flex flex-col items-start justify-start ",
          orientation === "column" ? "gap-4" : "gap-6",
          style === "outlined" ? "rounded-lg border border-border p-6" : ""
        )}
      >
        <div className="text-start">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-3xl font-bold">{subtitle}</div>
          <div className="text-sm">
            <span className="text-muted-foreground">{timePeriod}</span>{" "}
            <span
              className={cn(
                percentageChange.includes("+")
                  ? "text-green-600 dark:text-green-300"
                  : percentageChange.includes("-")
                  ? "text-red-600 dark:text-red-300"
                  : "text-primary"
              )}
            >
              {percentageChange}
            </span>
          </div>
        </div>
        <div
          className={cn(
            "flex w-full",
            orientation === "row" && "justify-center"
          )}
        >
          <div className="max-w-full overflow-x-auto">
            <div
              className={cn(
                " flex text-xs font-semibold text-muted-foreground",
                orientation === "column"
                  ? "flex-col items-start gap-2"
                  : "flex-row items-end gap-6"
              )}
            >
              {dates.map((date, index) => (
                <span
                  key={index}
                  className={cn(
                    "flex items-center gap-2",
                    orientation === "column" ? "flex-row-reverse" : "flex-col"
                  )}
                >
                  <div
                    className={cn(
                      "border-muted-foreground bg-muted",
                      orientation === "column" ? "border-r-2" : "border-t-2",
                      orientation === "column" &&
                        (index % 2 === 0 ? "h-8 w-24" : "h-8 w-48"),
                      orientation === "row" &&
                        (index % 2 === 0 ? "h-24 w-16" : "h-36 w-16")
                    )}
                  />
                  <div className={cn(orientation === "column" && "min-w-16")}>
                    {date}
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
