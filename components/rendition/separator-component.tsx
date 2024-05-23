import { cn } from "@/lib/utils";

type TitleSeparatorComponentProps = {
  title: string;
};

export const TitleSeparatorComponent = ({
  title,
}: TitleSeparatorComponentProps) => {
  return (
    <div className="flex w-full items-center gap-1 px-4 py-3 text-center text-sm">
      <div className="h-[0.5px] flex-1 bg-gradient-to-r from-border/50 via-border to-border/50"></div>
      <span className="px-2">{title}</span>
      <div className="h-[0.5px] flex-1 bg-gradient-to-l from-border/50 via-border to-border/50"></div>
    </div>
  );
};
