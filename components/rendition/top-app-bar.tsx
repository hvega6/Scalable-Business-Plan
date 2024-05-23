import { Button } from "@/components/ui/button";
import { renderIcon } from "../render-icon";

interface TopAppBarProps {
  title: string;
  leading?:
    | {
        type: "icon";
        icon: string;
        IconElement?: React.ElementType;
      }
    | {
        type: "image";
        imageDescription: string;
      };
  trailing?:
    | {
        type: "icon";
        icon: string;
        IconElement?: React.ElementType;
      }
    | {
        type: "text";
        text: string;
      }
    | {
        type: "none";
      };
  mode?: "sm" | "lg";
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  mode = "sm",
  leading,
  trailing,
}) => {
  const isCompact = mode === "sm";

  if (isCompact) {
    return (
      <div className="flex w-full items-center justify-between p-4 text-foreground">
        {leading?.type === "icon" ? (
          wrapButton(renderIcon(leading, "w-5 h-5"))
        ) : (
          <div className="w-10 h-10" />
        )}
        <h1 className="grow text-center font-bold tracking-[-0.25px]">
          {title}
        </h1>
        {trailing?.type === "icon" ? (
          wrapButton(renderIcon(trailing, "w-5 h-5"))
        ) : (
          <div className="w-10 h-10" />
        )}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 px-4 py-3 text-foreground">
      <div className="flex w-full justify-between">
        {leading?.type === "icon" ? (
          wrapButton(renderIcon(leading, "w-5 h-5"))
        ) : (
          <div className="w-10 h-10" />
        )}
        {trailing?.type === "icon" ? (
          wrapButton(renderIcon(trailing, "w-5 h-5"))
        ) : (
          <div className="w-10 h-10" />
        )}
      </div>
      <h1 className="grow text-center text-[28px] font-bold leading-[35px] tracking-[-0.7px]">
        {title}
      </h1>
    </div>
  );
};

export const wrapButton = (icon: React.ReactNode) => {
  return (
    <Button variant={"ghost"} size={"icon"}>
      {icon}
    </Button>
  );
};
