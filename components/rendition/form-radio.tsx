import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

type FormRadioGroupProps = {
  children: React.ReactNode; // Expect [FormRadioItem]
  defaultValue?: string;
};

export const FormRadioGroup: React.FC<
  FormRadioGroupProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ children, defaultValue, className, ...radioProps }) => {
  return (
    <div className="w-full px-4 py-3">
      <RadioGroup
        className={cn(
          "flex flex-col gap-0 rounded-lg border border-border",
          className
        )}
        {...radioProps}
      >
        {children}
      </RadioGroup>
    </div>
  );
};

type FormRadioItemProps = {
  title: string;
  description?: string;
};

export const FormRadioItem: React.FC<
  FormRadioItemProps &
    Partial<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>
> = ({ title, description, className, ...props }) => {
  return (
    <Label
      htmlFor={`item-radio-${title}`}
      className={cn(
        "flex cursor-pointer flex-row items-center justify-start gap-4 p-4",
        "border-b border-border last:border-none",
        className
      )}
    >
      <RadioGroupItem id={`item-radio-${title}`} value={title} {...props} />
      <div className="space-y-0.5">
        <div className="text-base">{title}</div>
        {description && (
          <div className="text-sm font-normal text-muted-foreground">
            {description}
          </div>
        )}
      </div>
    </Label>
  );
};
