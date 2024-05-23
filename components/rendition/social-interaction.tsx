import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { renderIcon } from "../render-icon";

type SocialInteractionGroupProps = {
  children: React.ReactNode;
  itemSpacing: "start" | "center" | "between";
};

export const SocialInteractionGroup: React.FC<SocialInteractionGroupProps> = ({
  children,
  itemSpacing,
}) => {
  return (
    <div className="px-4 py-3">
      <TooltipProvider>
        <div
          className={cn(
            "flex gap-6",
            itemSpacing === "start"
              ? "justify-start"
              : itemSpacing === "center"
              ? "justify-center"
              : "justify-between"
          )}
        >
          {children}
        </div>
      </TooltipProvider>
    </div>
  );
};

/**
 * Defines an interactive symbol within a social context, coupling visual cues with quantitative insights, aimed at fostering community interaction.
 */
type SocialInteractionItemProps = {
  title: string;
  icon: string;
  IconElement?: React.ElementType;
  count?: string;
};

export const SocialInteractionItem: React.FC<
  SocialInteractionItemProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ title, count, icon, IconElement }) => {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="flex items-center gap-2 text-muted-foreground"
          >
            {renderIcon({ icon, IconElement }, "w-5 h-5")}
            <span className="sr-only">{title}</span>
            {count && <span className="">{count}</span>}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </div>
  );
};
