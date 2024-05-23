import { cn } from "@/lib/utils";

type PricingComparisonCardProps = {
  title: string;
  price: string;
  featureList: string[];

  style?: "filled" | "outlined" | "none";
};

export const PricingComparisonCard = ({
  title,
  price,
  featureList,
  style = "outlined",
}: PricingComparisonCardProps) => {
  return (
    <div className="w-full px-4 py-3">
      <div
        className={cn(
          "flex w-full flex-col px-6 py-5 mx-4 my-3",
          "gap-1 rounded-lg",
          style === "outlined"
            ? "border border-border bg-card"
            : style === "filled"
            ? "bg-card shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            : "p-0"
        )}
      >
        <div className="text-base font-bold">{title}</div>
        <div className="text-3xl font-black">{price}</div>

        {featureList?.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {featureList?.map((feature, index) => (
              <div key={index} className={cn("flex gap-2 text-xs")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
