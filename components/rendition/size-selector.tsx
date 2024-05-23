import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

interface SizeSelectorProps {
  data: string[];
}

export const SizeSelector: React.FC<
  SizeSelectorProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ data, ...radioProps }) => {
  return (
    <RadioGroup
      defaultValue={data?.length > 0 ? data[0] : undefined}
      className="flex w-full flex-wrap items-center justify-start gap-4 px-4 py-3 text-muted-foreground"
      {...radioProps}
    >
      {data.map((d, i) => (
        <SizeSelectorItem key={d + i} title={d} />
      ))}
    </RadioGroup>
  );
};

const SizeSelectorItem: React.FC<
  {
    title: string;
  } & Partial<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>
> = ({ title, ...radioProps }) => {
  return (
    <div>
      <RadioGroupItem
        {...radioProps}
        value={title}
        id={`size-selector-item-${title}`}
        className="peer sr-only"
      />
      <Label
        htmlFor={`size-selector-item-${title}`}
        className={cn(
          "flex h-9 min-w-9 cursor-pointer items-center justify-center gap-3 rounded-lg px-2",
          "border-2 peer-data-[state=checked]:border-muted-foreground [&:has([data-state=checked])]:border-primary",
          "hover:text-muted-foreground peer-data-[state=checked]:text-muted-foreground",
          "bg-card hover:bg-accent peer-data-[state=checked]:bg-muted"
        )}
      >
        {title}
      </Label>
    </div>
  );
};
