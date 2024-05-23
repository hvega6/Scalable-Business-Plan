import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

interface RadioColorSelectorProps {
  data: string[];
}

export const RadioColorSelector: React.FC<
  RadioColorSelectorProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ data, className, ...props }) => {
  return (
    <RadioGroup
      className={cn(
        "flex w-full items-center justify-start px-4 py-3 text-muted-foreground",
        className
      )}
      defaultValue={data[0]}
      {...props}
    >
      {data.map((color, index) => (
        <div key={color + index} className="relative w-9 h-9">
          <RadioGroupItem
            value={color}
            id={`color-selector-item-${index}-${color}`}
            className="peer sr-only"
          />

          <div
            className={cn(
              "pointer-events-none absolute z-10 w-full h-full  rounded-lg border-0 border-foreground",
              "peer-data-[state=checked]:border-2"
            )}
          />
          <Label
            htmlFor={`color-selector-item-${index}-${color}`}
            className={cn(
              "relative flex cursor-pointer items-center justify-center",
              "group w-full h-full rounded-lg p-[2px]"
            )}
          >
            <div
              className={cn(
                "flex w-6 h-6 rounded-md transition-all duration-300 ease-out",
                "group-hover:w-full group-hover:h-full"
              )}
              style={{
                backgroundColor: color,
              }}
            ></div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
