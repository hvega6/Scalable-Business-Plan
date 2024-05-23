import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

/**
 * Structures content into expandable sections, for flexible information display.
 * The style "filled" behaves like independent bubbles, while "none" sets the items more closely.
 */
interface AccordionComponentGroupProps {
  children: React.ReactNode; // Expect [AccordionComponentItem]
  style: "filled" | "none";
}

export const AccordionComponentGroup: React.FC<
  AccordionComponentGroupProps &
    Partial<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>>
> = ({ children, type = "single", style = "none", className, ...props }) => {
  if (type === "single" && !("collapsible" in props)) {
    (props as { collapsible: boolean }).collapsible = true;
  }

  const accordionProps = {
    type,
    ...props,
  } as
    | AccordionPrimitive.AccordionSingleProps
    | AccordionPrimitive.AccordionMultipleProps;

  return (
    <Accordion
      className={cn("group/parent space-y-4 px-4 py-3", className)}
      {...accordionProps}
      data-style={style}
    >
      {children}
    </Accordion>
  );
};

/**
 * Creates a section with a title and more details hidden until requested, making information easier to digest.
 */
interface AccordionComponentItemProps {
  title: string;
  subtitle: string;
  style?: "filled" | "none";
}

export const AccordionComponentItem: React.FC<
  AccordionComponentItemProps &
    Partial<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>
> = ({ title, subtitle, style, className, ...props }) => {
  return (
    <AccordionItem
      value={`item-${title}`}
      className={cn(
        "border-border",
        style === "filled"
          ? "rounded-lg border-none bg-muted px-4"
          : !style
          ? "group-data-[style=filled]/parent:rounded-lg group-data-[style=filled]/parent:border-none group-data-[style=filled]/parent:bg-muted group-data-[style=filled]/parent:px-4"
          : "",
        className
      )}
      {...props}
    >
      <AccordionTrigger className="text-start">{title}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {subtitle}
      </AccordionContent>
    </AccordionItem>
  );
};
