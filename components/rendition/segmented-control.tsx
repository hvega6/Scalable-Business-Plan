import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

interface SegmentedControlProps {
  // 3 items max, single word
  data: string[];
}

export const SegmentedControl: React.FC<
  SegmentedControlProps &
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
> = ({ data, ...tabsProps }) => {
  return (
    <div className="px-4 py-3">
      <Tabs
        defaultValue={
          data && data?.length > 0 ? `segmented-item-${data[0]}-0` : undefined
        }
        {...tabsProps}
      >
        <TabsList className="w-full">
          {data.map((title, index) => (
            <TabsTrigger
              key={index}
              value={`segmented-item-${title}-${index}`}
              className="w-full"
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
