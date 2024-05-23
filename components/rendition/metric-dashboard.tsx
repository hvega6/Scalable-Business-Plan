import { cn } from "@/lib/utils";

/**
 * Structures a dashboard into a grid, ideal for showcasing diverse data points like sales figures, user statistics, or performance metrics, helping an intuitive and comparative overview.
 */
interface MetricDashboardGroupProps {
  children: React.ReactNode; // Expect [MetricDashboardItem]
  style?: "filled" | "outlined";
  textAlign?: "left" | "center";
}

export const MetricDashboardGroup: React.FC<
  MetricDashboardGroupProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  style = "filled",
  textAlign = "left",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group/parent grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3",
        className
      )}
      {...props}
      data-style={style}
      data-textalign={textAlign}
    >
      {children}
    </div>
  );
};

/**
 * Defines an individual data tile displaying key figures, such as revenue growth or active users, enhanced with visual cues for immediate insight.
 */
interface MetricDashboardItemProps {
  title: string;
  subtitle: string;
  style?: "filled" | "outlined";
  textAlign?: "left" | "center";
}

export const MetricDashboardItem: React.FC<MetricDashboardItemProps> = ({
  title,
  subtitle,
  style,
  textAlign,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-lg border p-4 last:odd:col-span-2 md:last:odd:col-span-1 w-full",
        style === "filled"
          ? "border-transparent bg-muted"
          : style === "outlined"
          ? "flex-col-reverse border-border bg-card text-muted-foreground"
          : cn(
              "group-data-[style=filled]/parent:border-transparent group-data-[style=filled]/parent:bg-muted",
              "group-data-[style=outlined]/parent:flex-col-reverse group-data-[style=outlined]/parent:border-border group-data-[style=outlined]/parent:bg-card group-data-[style=outlined]/parent:text-muted-foreground"
            ),
        textAlign === "center"
          ? "items-center text-center"
          : textAlign === "left"
          ? "items-start text-start"
          : cn(
              "group-data-[textalign=left]/parent:items-start group-data-[textalign=center]/parent:items-center group-data-[textalign=center]/parent:text-center"
            ),
        "place-content-start"
      )}
    >
      <div className="text-sm">{title}</div>
      <div className="text-xl font-bold text-foreground">{subtitle}</div>
    </div>
  );
};
