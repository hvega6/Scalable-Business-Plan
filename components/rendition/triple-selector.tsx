import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

interface TripleSequentialSelectorComponentProps {
  // This component consumes a bit of vertical space. Recommended for timing (9am, 10am, 11am), days ("yesterday", "today", "tomorrow"), etc.
  data: {
    title: string;
  }[]; // Only 3 items
}

export const TripleSequentialSelectorComponent: React.FC<
  TripleSequentialSelectorComponentProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ data, ...radioProps }) => {
  return (
    <RadioGroup
      defaultValue={data.length > 2 ? data[1].title : undefined}
      className="grid items-center justify-stretch gap-0 px-4 py-3"
      {...radioProps}
    >
      {data.map((item, index) => (
        <div key={index}>
          <RadioGroupItem
            value={item.title}
            id={`triple-selector-item-${item.title}-${index}`}
            className="peer sr-only"
          />
          <Label
            htmlFor={`triple-selector-item-${item.title}-${index}`}
            className={cn(
              "flex flex-col items-center justify-between rounded-md p-4",
              "font-bold text-muted-foreground",
              "hover:bg-muted hover:peer-data-[state=checked]:bg-muted/60",
              "cursor-pointer hover:text-accent-foreground peer-data-[state=checked]:bg-muted peer-data-[state=checked]:text-foreground"
            )}
          >
            {item.title}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
