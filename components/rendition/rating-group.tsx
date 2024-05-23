import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "@/components/ui/button";

/**
 * Collects individual reviews into a cohesive vertical layout.
 */
type ReviewGroupProps = {
  children: React.ReactNode; // Expect [ReviewItem]
};

export const ReviewGroup: React.FC<ReviewGroupProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-4 py-3">
      {children}
    </div>
  );
};

type ReviewItemProps = {
  author: string;
  imageDescription?: string;
  imageSrc?: string;
  date: string;
  review: string;
  likes?: number;
  dislikes?: number;
  stars?: number;
};

/**
 * Offers a narrative snapshot combining personal insight and quantitative feedback, punctuated by visual identity and user reactions.
 */
export const ReviewItem: React.FC<ReviewItemProps> = ({
  author,
  date,
  stars,
  review,
  likes,
  dislikes,
  imageDescription,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-3">
        {(imageDescription || imageSrc) && (
          <Avatar>
            <AvatarImage
              src={imageSrc || "https://github.com/shadcn.png"}
              alt={author}
            />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
        )}

        <div className="flex w-full flex-col">
          <span className="text-base font-medium leading-6 text-foreground">
            {author}
          </span>
          <span className="text-sm leading-5 text-muted-foreground">
            {date}
          </span>
        </div>
      </div>

      {stars !== undefined && stars !== null && (
        <div className="flex gap-0.5 text-primary">
          {Array.from({ length: 5 }, (_, i) =>
            i < stars ? (
              <RatingStar
                key={i}
                fill="currentColor"
                className="w-5 h-5 fill-current"
              />
            ) : (
              <RatingStar key={i} className="w-5 h-5" />
            )
          )}
        </div>
      )}

      <div className="text-base leading-6 text-foreground">{review}</div>
      <div className="flex items-center gap-9">
        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex items-center space-x-2 text-muted-foreground"
        >
          {likes && likes > 0 && <span className="text-sm">{likes}</span>}
          <ThumbsUp className="w-4 h-4" />
        </Button>

        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex items-center space-x-2 text-muted-foreground"
        >
          {dislikes && dislikes > 0 && (
            <span className="text-sm">{dislikes}</span>
          )}
          <ThumbsDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

function RatingStar(props: any) {
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

function ThumbsUp(props: any) {
  return (
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
      {...props}
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ThumbsDown(props: any) {
  return (
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
      {...props}
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}
