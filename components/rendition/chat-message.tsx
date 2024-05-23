import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ChatMessageComponentProps = {
  author: string;
  content: string;
  timestamp: string;
  imageDescription?: string;
  imageSrc?: string;
};

export const ChatMessageComponent: React.FC<
  ChatMessageComponentProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  author,
  content,
  timestamp,
  imageDescription,
  imageSrc,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex w-full items-start gap-3 px-4 py-3", className)}
      {...props}
    >
      <Avatar className="w-10 h-10">
        <AvatarImage
          src={imageSrc || "https://github.com/shadcn.png"}
          alt={imageDescription}
        />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex w-auto flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <div className="text-[16px] font-bold leading-[20px] text-foreground">
            {author}
          </div>
          <div className="text-[14px] leading-[21px] text-muted-foreground">
            {timestamp}
          </div>
        </div>
        <div className="text-[16px] leading-[24px] text-foreground">
          {content}
        </div>
      </div>
    </div>
  );
};
