import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

interface TopTabSelectorProps {
  // This component either comes after TopAppBar or should not be used.
  data: { title: string }[];
  selectedIndex?: number;
}

export const TopTabSelector: React.FC<
  TopTabSelectorProps &
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
> = ({ data = [], selectedIndex = 0, ...tabsProps }) => {
  return (
    <Tabs
      defaultValue={
        data.length > selectedIndex - 1 ? data[selectedIndex].title : undefined
      }
      {...tabsProps}
    >
      <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b border-border bg-transparent p-0 px-4">
        {data.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.title}
            className={cn(
              "h-full rounded-none border-b-2 border-transparent p-2 text-xs font-bold",
              "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
              "data-[state=active]:border-foreground data-[state=active]:text-foreground",
              "hover:border-foreground/70 hover:text-foreground/70"
            )}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
