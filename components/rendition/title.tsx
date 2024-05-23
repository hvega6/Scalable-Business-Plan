import { cn } from "@/lib/utils";

type TitleComponentProps = {
  title: string;
  size?: "sm" | "lg" | "xl";
  textAlign?: "left" | "center";
};

export const TitleComponent = ({
  title,
  size = "lg",
  textAlign = "left",
  className,
  ...props
}: TitleComponentProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-3 pt-5",
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          "font-bold tracking-tight",
          size === "sm"
            ? "text-[18px] leading-[22.5px] tracking-[-0.27px]"
            : size === "lg"
            ? "text-[22px] leading-[27.5px] tracking-[-0.33px]"
            : "text-[28px] leading-[35px] tracking-[-0.7px]",
          textAlign === "center" ? "text-center" : "text-start"
        )}
      >
        {title}
      </h2>
    </div>
  );
};
