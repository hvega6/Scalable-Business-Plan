import { Progress } from "@/components/ui/progress";
import React from "react";
import { cn } from "@/lib/utils";

type RatingSummaryProps = {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: number[];
  style: "outlined" | "none";
};

export const RatingSummary: React.FC<RatingSummaryProps> = ({
  totalReviews,
  averageRating,
  ratingDistribution,
  style,
}) => {
  return (
    <div className="px-4 py-3 max-w-[600px]">
      <div
        className={cn(
          "flex items-start gap-8",
          style === "outlined" ? "rounded-lg border border-border p-6" : ""
        )}
      >
        <div className="flex flex-col gap-2">
          <div className="text-5xl font-bold text-foreground">
            {averageRating}
          </div>
          <div className="mt-2 flex text-primary">
            {Array.from({ length: 5 }, (_, i) =>
              i < averageRating ? (
                <RatingSummaryStar
                  key={i}
                  fill="currentColor"
                  className="w-5 h-5"
                />
              ) : (
                <RatingSummaryStar key={i} className="w-5 h-5" />
              )
            )}
          </div>
          <span className="text-lg text-muted-foreground">
            {totalReviews} reviews
          </span>
        </div>

        <div className="flex w-full flex-col gap-2">
          {ratingDistribution.map((dist, index) => (
            <div key={index} className="mt-1 flex items-center justify-between">
              <div className="text-right text-sm font-medium text-gray-700">
                {5 - index}
              </div>
              <div className="mx-2 h-2.5 w-full rounded-full bg-gray-200">
                <Progress className="h-2.5" value={dist} />
              </div>
              <div className="text-left text-sm font-medium text-muted-foreground">
                {dist}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function RatingSummaryStar(props: any) {
  return (
    <svg
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
