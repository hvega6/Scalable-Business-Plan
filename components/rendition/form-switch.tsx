import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import * as SwitchPrimitives from "@radix-ui/react-switch";

type FormSwitchGroupProps = {
  children: React.ReactNode; // Expect [FormSwitchItem]
};

export const FormSwitchGroup: React.FC<FormSwitchGroupProps> = ({
  children,
}) => {
  return (
    <div className="w-full px-4 py-3">
      <form className="flex flex-col rounded-lg border border-border">
        {children}
      </form>
    </div>
  );
};

type FormSwitchItemProps = {
  title: string;
  description?: string;
};

export const FormSwitchItem: React.FC<
  FormSwitchItemProps &
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
> = ({ title, description, className, ...props }) => {
  return (
    <Label
      htmlFor={`item-switch-${title}`}
      className={cn(
        "flex flex-row items-center justify-between gap-2 p-4",
        "border-b border-border last:border-0 cursor-pointer",
        className
      )}
    >
      <div className="space-y-0.5">
        <div className="text-base">{title}</div>
        {description && (
          <div className="text-sm font-normal text-muted-foreground">
            {description}
          </div>
        )}
      </div>
      <Switch id={`item-switch-${title}`} {...props} />
    </Label>
  );
};
