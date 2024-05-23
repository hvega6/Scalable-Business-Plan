import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormInputComponentProps = {
  title?: string;
  placeholder: string;
  size?: "sm" | "lg";
  style?: "outlined" | "filled";
};

export const FormInputComponent = ({
  title,
  placeholder,
  size = "sm",
  style = "outlined",
}: FormInputComponentProps) => {
  if (size === "lg") {
    return (
      <form className="flex flex-col px-4 py-3">
        {title && <span className="leading-7 text-foreground">{title}</span>}

        <Textarea
          placeholder={placeholder}
          className={cn(
            "bg-transparent placeholder:text-muted-foreground",
            style === "filled" ? "border-none bg-muted" : "bg-transparent"
          )}
        />
      </form>
    );
  }

  return (
    <form className="flex flex-col px-4 py-3">
      {title && <span className="leading-7 text-foreground">{title}</span>}

      <Input
        placeholder={placeholder}
        className={cn(
          "placeholder:text-muted-foreground",
          style === "filled" ? "border-none bg-muted" : "bg-transparent"
        )}
      />
    </form>
  );
};
