import { cn } from "@/lib/utils";

interface CountdownTimerGroupProps {
  // Max 4 items.
  children: React.ReactNode;
  style?: "filled" | "outlined";
}

export const CountdownTimerGroup: React.FC<CountdownTimerGroupProps> = ({
  children,
  style = "filled",
}) => {
  return (
    <div
      className="group/parent flex items-stretch justify-between gap-4 px-4 py-3"
      data-style={style}
    >
      {children}
    </div>
  );
};

interface CountdownTimerItemProps {
  title: string;
  value: number;
  style?: "filled" | "outlined";
}

export const CountdownTimerItem: React.FC<
  CountdownTimerItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, value, style, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center rounded-lg p-4",
        "border border-transparent bg-muted",
        style === "outlined"
          ? "border-border bg-card"
          : !style
          ? cn(
              "group-data-[style=outlined]/parent:border-border group-data-[style=outlined]/parent:bg-card"
            )
          : "",
        className
      )}
      {...props}
    >
      <div className="text-3xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  );
};
