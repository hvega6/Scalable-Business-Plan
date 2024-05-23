import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterProps {
  title: string;
  description: string;
  buttonText: string;
}

export const Newsletter: React.FC<
  NewsletterProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, description, buttonText }) => {
  return (
    <form
      className="flex flex-col items-center px-4 py-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <p className="mb-4 text-center text-sm">{description}</p>
      <div className="flex w-full max-w-96 items-center rounded-lg bg-muted p-2">
        <Input
          type="email"
          placeholder="Email Address"
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button className="flex-0 font-medium" type="submit">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
