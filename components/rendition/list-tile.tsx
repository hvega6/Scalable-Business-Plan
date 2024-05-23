import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GenericIcon } from "../generic_icon";
import { renderIcon } from "../render-icon";

type ListTileLeadingType =
  | {
      type: "icon";
      icon: string;
      IconElement?: React.ElementType;
    }
  | {
      type: "image";
      imageDescription: string;
      imageSrc?: string;
    };

type ListTileTrailingType =
  | {
      type: "icon";
      icon: string;
      IconElement?: React.ElementType;
    }
  | {
      type: "string";
      content: string;
    }
  | {
      type: "none";
    };

/**
 * Constructs a flexible list tile for displaying primary text, optional secondary text, and additional information. It supports leading visuals like icons or images to enrich content representation, and trailing elements for interactive or informative purposes, suitable for diverse application contexts.
 */
export interface ListTileProps {
  title: string;
  subtitle?: string;
  additionalInfo?: string;
  leading?: ListTileLeadingType;
  trailing?: ListTileTrailingType;
}

export const ListTile: React.FC<
  ListTileProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  title,
  subtitle,
  additionalInfo,
  leading,
  trailing,
  className,
  ...props
}) => {
  return (
    <ListTileBase
      className={className}
      title={title}
      subtitle={subtitle}
      additionalInfo={additionalInfo}
      leading={extractListTileLeading(leading)}
      trailing={extractListTileTrailing(trailing)}
      {...props}
    />
  );
};

/**
 * Offers interactive numeric values, ideal for adjustable settings or quantities.
 */
export interface ListTileCountProps {
  title: string;
  subtitle?: string;
  additionalInfo?: string;
  leading?: ListTileLeadingType;
  value: number;
}

export const ListTileCount: React.FC<ListTileCountProps> = ({
  title,
  subtitle,
  additionalInfo,
  leading,
  value,
}) => {
  return (
    <ListTileBase
      title={title}
      subtitle={subtitle}
      additionalInfo={additionalInfo}
      leading={extractListTileLeading(leading)}
      trailing={
        <div className="flex items-center justify-center gap-3">
          <Button variant={"secondary"} className="w-8 h-8 rounded-full p-0">
            <IconPlus />
          </Button>
          <span className="flex min-w-6 items-center justify-center font-bold">
            {value}
          </span>
          <Button variant={"secondary"} className="w-8 h-8 rounded-full p-0">
            <IconMinus />
          </Button>
        </div>
      }
    />
  );
};

/**
 * Combines information with an action button, tailored for direct user engagement.
 */
export interface ListTileButtonProps {
  title: string;
  subtitle?: string;
  additionalInfo?: string;
  leading?: ListTileLeadingType;
  buttonText: string;
}

export const ListTileButton: React.FC<
  ListTileButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ title, subtitle, additionalInfo, leading, buttonText, ...props }) => {
  return (
    <ListTileBase
      title={title}
      subtitle={subtitle}
      additionalInfo={additionalInfo}
      leading={extractListTileLeading(leading)}
      trailing={
        <Button
          size={"sm"}
          variant={"secondary"}
          className="shrink-0 bg-muted text-sm text-foreground hover:bg-muted-foreground/20"
          {...props}
        >
          {buttonText}
        </Button>
      }
    />
  );
};

const extractListTileLeading = (leading?: ListTileLeadingType) => {
  switch (leading?.type) {
    case "image":
      return (
        <img
          className="w-full h-full  rounded-lg object-cover"
          src={
            leading.imageSrc ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZSxwaG90byxDYWxlYnx8fHx8fDE3MTQ0MjQ3OTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          }
        />
      );
    case "icon":
      const size = "w-5 h-5";
      if (!leading.IconElement) {
        return (
          <GenericIcon
            strokeWidth={1.5}
            className={cn(size, "text-foreground")}
          />
        );
      }
      return renderIcon(leading, size);
  }
};

const extractListTileTrailing = (
  trailing: ListTileTrailingType | undefined
) => {
  switch (trailing?.type) {
    case "icon":
      if (!trailing.IconElement) {
        return (
          <GenericIcon
            strokeWidth={1.5}
            className={cn("w-5 h-5", "text-foreground")}
          />
        );
      }
      return renderIcon(trailing, "w-4 h-4");
    case "string":
      return (
        <span className="shrink-0 text-sm font-light text-muted-foreground">
          {trailing.content}
        </span>
      );
    case "none":
      return null;
  }
};

const ListTileBase: React.FC<
  {
    title: string;
    subtitle?: string;
    additionalInfo?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  title,
  subtitle,
  additionalInfo,
  leading,
  trailing,
  className,
  ...props
}) => {
  // Logic for calculating rowsClass based on subtitle and additionalInfo
  let rows: 1 | 2 | 3 = 1;
  if (additionalInfo) rows = 3;
  else if (subtitle) rows = 2;

  const rowsClass = ["w-10 h-10", "w-12 h-12", "w-16 h-16"][rows - 1];

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-4 px-4",
        rows > 1 ? "py-3" : "py-2",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        {leading && (
          <div
            className={cn(
              rowsClass,
              "flex shrink-0 items-center justify-center rounded-md bg-muted"
            )}
          >
            {leading}
          </div>
        )}
        <div className="flex flex-1 flex-col justify-center">
          <div className="text-base">{title}</div>
          {subtitle && (
            <div className="text-sm font-light text-muted-foreground">
              {subtitle}
            </div>
          )}
          {additionalInfo && (
            <div className="text-sm font-light text-muted-foreground">
              {additionalInfo}
            </div>
          )}
        </div>
      </div>
      {trailing}
    </div>
  );
};

function IconPlus() {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function IconMinus() {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}
