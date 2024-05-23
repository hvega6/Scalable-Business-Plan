import { cn } from "@/lib/utils";
import { renderIcon } from "../render-icon";

type ContentTilesGroupProps = {
  children: React.ReactNode; // Expects [ContentTilesItem]
};

export const ContentTilesGroup: React.FC<
  ContentTilesGroupProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 md:auto-rows-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type ContentTilesItemProps = {
  title: string;
  subtitle?: string;
  icon: string;
  IconElement?: React.ElementType;
};

export const ContentTilesItem: React.FC<ContentTilesItemProps> = ({
  title,
  subtitle,
  icon,
  IconElement,
}) => {
  return (
    <div
      className={cn(
        "flex rounded-lg border border-border bg-card p-4 last:odd:col-span-2 md:last:odd:col-span-1",
        subtitle ? "gap-2" : "gap-4",
        subtitle ? "flex-col" : "flex-row items-center gap-2"
      )}
    >
      {renderIcon({ icon, IconElement }, "w-5 h-5 flex-shrink-0")}
      <div>
        <div className="text-base font-bold">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
};

export default ContentTilesItem;
