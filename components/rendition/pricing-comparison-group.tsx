import { cn } from "@/lib/utils";
import { PricingComparisonCard } from "./pricing-comparison-card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

/**
 * Provides a component for side-by-side comparison of different pricing plans, facilitating an informed choice through radio group selection.
 */
interface PricingComparisonGroupProps {
  children: React.ReactNode;
  defaultValue?: string;
  theme: "filled" | "outlined" | "none";
}

export const PricingComparisonGroup: React.FC<
  PricingComparisonGroupProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ children, theme, defaultValue, ...radioProps }) => {
  return (
    <RadioGroup
      className="grid gap-4 px-4 py-3 grid-cols-1 md:grid-cols-2"
      {...radioProps}
      data-style={theme}
    >
      {children}
    </RadioGroup>
  );
};

/**
 * Displays a pricing option within the comparison group, detailing costs and associated features, enabling users to select based on comprehensive insights.
 */
type PricingComparisonItemProps = {
  title: string;
  price: string;
  featureList: string[];
};

export const PricingComparisonItem: React.FC<PricingComparisonItemProps> = ({
  title,
  price,
  featureList,
}) => {
  const inputId = `pricing-group-item-${title}`;
  return (
    <div className="col-span-1 md:last:odd:col-span-2">
      <RadioGroupItem value={title} id={inputId} className="peer sr-only" />
      <Label
        htmlFor={inputId}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-lg",
          "border peer-data-[state=checked]:border-muted-foreground",
          "transition-all ease-in-out peer-data-[state=checked]:bg-muted-foreground",
          "hover:bg-muted peer-data-[state=checked]:bg-muted"
        )}
      >
        <PricingComparisonCard
          title={title}
          price={price}
          featureList={featureList}
          style={"none"}
        />
      </Label>
    </div>
  );
};
