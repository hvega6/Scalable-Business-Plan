import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchComponentProps = {
  placeholder: string;
  style?: "outlined" | "filled";
};

export const SearchComponent: React.FC<SearchComponentProps & InputProps> = ({
  placeholder,
  style = "filled",
  className,
  ...inputProps
}) => {
  return (
    <div className="px-4 py-3">
      <div className="relative flex justify-center text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          className="absolute left-3 w-5 h-5 self-center"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <Input
          type="search"
          placeholder={placeholder}
          className={cn(
            "pl-10 placeholder:text-muted-foreground",
            style === "outlined"
              ? "rounded-lg border border-border bg-transparent"
              : "border-none bg-muted",
            className
          )}
          {...inputProps}
        />
      </div>
    </div>
  );
};
