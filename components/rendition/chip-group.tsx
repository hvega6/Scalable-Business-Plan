"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { renderIcon } from "../render-icon";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

/**
 * Organizes selections into a dynamic chip display, enabling horizontal scrolling or wrapping for space management. This component is suited for filters, tags, or any categorization requiring compact and interactive representation.
 */
interface ChipGroupProps {
  children: React.ReactNode; // Expect [ChipItem]
  wrapMode?: "wrap" | "scroll";
  style?: "filled" | "outlined";
}

export const ChipGroup: React.FC<
  ChipGroupProps &
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
> = ({ children, style = "outlined", wrapMode = "wrap", ...props }) => {
  if (!("type" in props)) {
    (props as { type: "single" | "multiple" }).type = "multiple";
  }

  if (wrapMode === "scroll") {
    return (
      <ScrollArea className="py-3">
        <div className="relative flex w-full gap-2 px-3">
          {/* ToggleGroup */}
          <RadioGroup
            className="group/parent flex w-full justify-start"
            data-style={style}
            {...props}
          >
            {children}
          </RadioGroup>
        </div>
        <div className="pt-1">
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    );
  } else {
    return (
      <RadioGroup
        className={cn(
          "flex w-full flex-wrap gap-2 px-4 py-3",
          "group/parent justify-start"
        )}
        data-style={style}
        {...props}
      >
        {children}
      </RadioGroup>
    );
  }
};

/**
 * Crafts an interactive chip for single or grouped selections, featuring an optional icon and label. Ideal for concise, clickable elements within a categorization or filtering context.
 */
interface ChipItemProps {
  title: string;
  icon?: string;
  IconElement?: React.ElementType;
}

export const ChipItem: React.FC<
  ChipItemProps &
    Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "value"
    >
> = ({ title, icon, IconElement, ...props }) => {
  // return (
  //   <ToggleGroupItem
  //     size={"sm"}
  //     variant={"default"}
  //     className={cn(
  //       "flex gap-2 flex-shrink-0 w-auto",
  //       "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  //       "group-data-[style=filled]/parent:bg-muted data-[state=on]:group-data-[style=filled]/parent:bg-primary data-[state=on]:group-data-[style=filled]/parent:text-background"
  //     )}
  //     {...props}
  //     value={title}
  //   >
  //     {icon && renderIcon({ icon, IconElement }, "w-4 h-4")}
  //     {title}
  //   </ToggleGroupItem>
  // );
  const inputId = `chip-item-${title}`;

  return (
    <div className="">
      <RadioGroupItem
        className="peer sr-only"
        value={title}
        id={inputId}
        {...props}
      />

      <Label
        htmlFor={inputId}
        className={cn(
          "cursor-pointer text-nowrap rounded-lg p-2",
          "flex w-auto shrink-0 flex-row items-center justify-start gap-2",
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-muted",
          "group-data-[style=filled]/parent:bg-muted group-data-[style=filled]/parent:peer-data-[state=checked]:bg-primary group-data-[style=filled]/parent:peer-data-[state=checked]:text-primary-foreground"
        )}
      >
        {icon && renderIcon({ icon, IconElement }, "w-4 h-4")}
        {title}
      </Label>
    </div>
  );
};
