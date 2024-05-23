import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { renderIcon } from "../render-icon";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

/**
 * Lays out a selection grid, streamlining choice through icons in a space-efficient design.
 */
interface SelectableIconGridGroupProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right";
}

export const SelectableIconGridGroup: React.FC<
  SelectableIconGridGroupProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ children, textAlign, className, ...radioProps }) => {
  return (
    <RadioGroup
      className={cn(
        "group/parent grid grid-cols-3 gap-4 px-4 py-3 text-muted-foreground",
        className
      )}
      {...radioProps}
      data-textalign={textAlign}
    >
      {children}
    </RadioGroup>
  );
};

interface SelectableIconGridItemProps {
  title: string;
  icon: string;
  IconElement?: React.ElementType;
  textAlign?: "left" | "center" | "right";
}

export const SelectableIconGridItem: React.FC<SelectableIconGridItemProps> = ({
  title,
  icon,
  IconElement,
  textAlign,
}) => {
  return (
    <div>
      <RadioGroupItem
        value={title}
        id={`radio-group-item-${title}`}
        className="peer sr-only"
      />
      <Label
        htmlFor={`radio-group-item-${title}`}
        className={cn(
          "flex h-full flex-col gap-2",
          "items-start text-start",
          textAlign === "center"
            ? "items-center text-center"
            : textAlign === "right"
            ? "items-end text-end"
            : !textAlign
            ? cn(
                "group-data-[textalign=center]/parent:items-center group-data-[textalign=center]/parent:text-center",
                "group-data-[textalign=right]/parent:items-end group-data-[textalign=right]/parent:text-end"
              )
            : "",
          "rounded-md border-2 border-border bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
        )}
      >
        {renderIcon({ icon, IconElement }, "w-5 h-5 flex-shrink-0")}
        <div className="w-full truncate text-sm">{title}</div>
      </Label>
    </div>
  );
};
