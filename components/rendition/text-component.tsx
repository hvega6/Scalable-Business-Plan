import { cn } from "@/lib/utils";

type TextComponentProps = {
  content: string;
  textAlign?: "left" | "center";
};

export const TextComponent = ({
  content,
  textAlign = "left",
  className,
  ...props
}: TextComponentProps & React.HTMLAttributes<HTMLDivElement>) => {
  if (!content) return null;

  return (
    <div
      className={cn(
        "flex w-full flex-col items-start justify-between",
        "px-4 pb-3 pt-1 text-base leading-6",
        textAlign === "center" ? "text-center" : "text-start",
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
};
