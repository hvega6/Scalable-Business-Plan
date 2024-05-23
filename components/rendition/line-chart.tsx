import { cn } from "@/lib/utils";

type LineChartProps = {
  title: String;
  subtitle: string;
  timePeriod: string;
  // Always start with + or - sign
  percentageChange: string;
  dates: string[];
  style: "outlined" | "none";
};

export const LineChart: React.FC<LineChartProps> = ({
  title,
  subtitle,
  timePeriod,
  percentageChange,
  dates,
  style,
}) => {
  return (
    <div className="px-4 py-3">
      <div
        className={cn(
          "flex flex-col items-stretch justify-start",
          style === "outlined" ? "rounded-lg border p-6" : ""
        )}
      >
        <div className="flex flex-col gap-2 text-start">
          <div className="text-sm font-medium">{title}</div>
          <div className="text-3xl font-bold">{subtitle}</div>
          <div className="text-sm">
            <span className="text-primary">{timePeriod}</span>{" "}
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
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-2">
          <svg
            viewBox="0 0 200 50"
            className="h-32 w-full text-muted"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="gradientFill"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="10%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="90%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M2 46.5C7 46.5 6.5 6.50007 15 6.50007C18.8333 6.00007 21 36.9997 30 37C35 37 37 28.5 45 28.5C53 28.5 51.5 36.5 59 36.5C66.5 36.5 65.5 31 73.5 31C81.5 31 82 16 90 16C98 16 96 23.5 104 23.5C112 23.5 111 36.5 119 36.5C127 36.5 126 1 135 1C144 1 142 31 150 31C158 31 156.5 38.5 165 38.5C173.5 38.5 172.5 16 180.5 16C188.5 16 195 46 195 46"
              fill="url(#gradientFill)"
            />
            <path
              d="M2 46.5C7 46.5 6.5 6.50007 15 6.50007C18.8333 6.00007 21 36.9997 30 37C35 37 37 28.5 45 28.5C53 28.5 51.5 36.5 59 36.5C66.5 36.5 65.5 31 73.5 31C81.5 31 82 16 90 16C98 16 96 23.5 104 23.5C112 23.5 111 36.5 119 36.5C127 36.5 126 1 135 1C144 1 142 31 150 31C158 31 156.5 38.5 165 38.5C173.5 38.5 172.5 16 180.5 16C188.5 16 195 46 195 46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-muted-foreground"
            />
          </svg>
          <div className="flex w-full justify-between text-xs font-semibold text-muted-foreground">
            {dates.map((date, index) => (
              <span key={index}>{date}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
