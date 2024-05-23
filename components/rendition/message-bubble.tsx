import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type MessageBubbleComponentProps = {
  author: string;
  content: string;
  role: "user" | "agent";

  imageDescription: string;
  imageSrc?: string;
};

export const MessageBubbleComponent = ({
  author,
  content,
  role,
  imageDescription,
  imageSrc,
  className,
  ...props
}: MessageBubbleComponentProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-full items-end gap-4 px-4 py-3 text-muted-foreground",
        role === "user" ? "flex-row-reverse" : "",
        className
      )}
      {...props}
    >
      <Avatar className="w-9 h-9">
        <AvatarImage
          src={imageSrc || "https://github.com/shadcn.png"}
          alt={imageDescription}
        />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>

      <div
        className={cn(
          "flex w-auto flex-col gap-2",
          role === "user" ? "items-end" : "items-start"
        )}
      >
        <div className="text-xs text-muted-foreground">{author}</div>
        <div
          className={cn(
            "w-full rounded-lg p-4",
            role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
