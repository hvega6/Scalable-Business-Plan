import { cn } from "@/lib/utils";

type MapsComponentProps = {
  imageDescription: string;
  imageSrc?: string;
};

export const MapsComponent = ({
  imageDescription,
  imageSrc,
  className,
  ...props
}: MapsComponentProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between px-4 py-3 text-muted-foreground",
        className
      )}
      {...props}
    >
      <img
        src={
          imageSrc ||
          "https://images.unsplash.com/photo-1544830826-4ccc3bf5ceb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={imageDescription}
        className="aspect-video h-56 w-full rounded-lg object-cover"
      />
    </div>
  );
};
