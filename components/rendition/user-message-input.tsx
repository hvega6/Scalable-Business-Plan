import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { renderIcon } from "../render-icon";

type UserMessageInputComponentProps = {
  placeholder?: string;
  trailing?: {
    icon: string;
    IconElement?: React.ElementType;
  }[];

  imageDescription?: string;
  imageSrc?: string;
};

export const UserMessageInputComponent = ({
  placeholder,
  trailing,
  imageDescription,
  imageSrc,
}: UserMessageInputComponentProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 px-4 py-3 text-muted-foreground">
      <Avatar className="w-9 h-9">
        <AvatarImage
          src={imageSrc || "https://github.com/shadcn.png"}
          alt={imageDescription}
        />
      </Avatar>

      <div className="relative flex w-full justify-center text-muted-foreground">
        <Input
          placeholder={placeholder}
          className="w-full border-none bg-muted placeholder:text-muted-foreground "
          style={{
            paddingRight: `${2.5 * (trailing?.length ?? 0)}rem`,
          }}
        />
        <div className="absolute inset-y-0 right-0.5 flex items-center justify-center">
          {trailing?.map((item, index) => {
            return (
              <button
                key={index}
                className="flex w-9 h-9 items-center justify-center rounded-md hover:bg-background/80"
              >
                {renderIcon(item, "w-5 h-5 stroke-[1.25px]")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
