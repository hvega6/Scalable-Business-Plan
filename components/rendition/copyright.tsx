import { cn } from "@/lib/utils";

type CopyrightProps = {
  title: string;
};

export const Copyright: React.FC<
  CopyrightProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center px-3 py-4 text-muted-foreground",
        "text-center tracking-tight",
        className
      )}
      {...props}
    >
      {title}
    </div>
  );
};
