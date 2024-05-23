import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

type CalendarComponentProps = {
  style?: "outlined" | "none" | "filled";
};

export const CalendarComponent = ({
  style = "none",
}: CalendarComponentProps) => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-3 text-muted-foreground">
      <div
        className={cn(
          style === "outlined"
            ? "rounded-lg border border-border bg-card px-4 py-3"
            : style === "filled"
            ? "rounded-lg bg-muted/20 px-4 py-3 ring-1 ring-muted"
            : "p-0",
          "overflow-hidden"
        )}
      >
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={new Date(2024, 2, 4)}
          selected={{
            from: new Date(2024, 2, 4),
            to: new Date(2024, 2, 12),
          }}
        />
      </div>
    </div>
  );
};
