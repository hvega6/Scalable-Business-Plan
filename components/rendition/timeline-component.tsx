import { cn } from "@/lib/utils";
import { renderIcon } from "../render-icon";

/**
 * Serves as a structural foundation for a sequence of events or steps, providing a linear narrative or process flow visualization.
 */
interface TimelineGroupProps {
  children: React.ReactNode; // Expect [TimelineItem]
}

export const TimelineGroup: React.FC<TimelineGroupProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

/**
 * Articulates a specific moment or phase within a timeline, suitable for milestones, steps, or historical events.
 */
interface TimelineItemProps {
  title: string;
  subtitle?: string;
  icon?: string;
  IconElement?: React.ElementType;
}

export const TimelineItem: React.FC<
  TimelineItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, subtitle, icon, IconElement, className, ...props }) => {
  return (
    <div className={cn("flex w-full gap-2 px-4", className)} {...props}>
      <div className="inline-flex h-[4.5rem] w-10 shrink-0 flex-col items-center justify-center gap-1">
        <div className={cn("w-0.5 bg-muted", icon ? "h-2" : "h-4")} />
        {icon ? (
          renderIcon({ icon, IconElement }, "w-6 h-6")
        ) : (
          <div className="w-2 h-2 rounded bg-foreground" />
        )}
        <div className="w-0.5 flex-1 bg-muted" />
      </div>

      <div className="mt-3 flex flex-1 flex-col items-stretch justify-start overflow-hidden">
        <div className="truncate text-base font-medium">{title}</div>
        <div className="truncate text-base font-normal text-muted-foreground">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
