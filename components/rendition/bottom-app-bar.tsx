"use client";

import { cn } from "@/lib/utils";
import { renderIcon } from "../render-icon";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type BottomAppBarProps = {
  showText?: boolean;
  selectedIndex: number;
  actions: {
    title: string;
    icon?: string;
    IconElement?: React.ElementType;
  }[];
};

export const BottomAppBar: React.FC<
  BottomAppBarProps & React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
> = ({ showText = true, selectedIndex, actions, ...tabsProps }) => {
  return (
    <Tabs defaultValue={actions[selectedIndex]?.title} {...tabsProps}>
      <TabsList className="flex h-auto justify-center gap-2 rounded-none border-t border-muted bg-card px-4 pb-3 pt-2 text-muted-foreground">
        {actions.map((action) => (
          <TabsTrigger
            key={action.title}
            value={action.title}
            className={cn(
              "flex h-auto w-20 flex-col items-center justify-center gap-1 text-xs hover:cursor-pointer",
              "hover:text-primary/80 data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:shadow-none",
              "group p-0 text-center"
            )}
          >
            {action.icon && (
              <div className="relative h-8 w-16 flex items-center justify-center">
                <div className="absolute group-data-[state=active]:bg-muted h-full w-0 group-data-[state=active]:w-full rounded-full transition-all"></div>

                <div className="absolute flex items-center justify-center py-0 inset-0">
                  {renderIcon(action, "w-5 h-5")}
                </div>
              </div>
            )}

            {showText && (
              <span className="w-full truncate text-xs">{action.title}</span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
