import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

/**
 * Encases a collection of categorized data within a table structure, emphasizing clarity and organization.
 */
interface CategoryTableGroupProps {
  children: React.ReactNode; // Expects [CategoryTableItem]
  style?: "outlined" | "none";
}

export const CategoryTableGroup: React.FC<CategoryTableGroupProps> = ({
  children,
  style = "outlined",
}) => {
  return (
    <div className="px-4 py-3">
      <Table
        className={cn(
          style === "outlined"
            ? "rounded-lg ring-1 ring-inset ring-border"
            : "",
          "overflow-hidden"
        )}
      >
        <TableBody>{children}</TableBody>
      </Table>
    </div>
  );
};

/**
 * Displays a category as a row in the table, for detailed categorization.
 */
interface CategoryTableItemProps {
  title: string;
  subtitle: string;
}

export const CategoryTableItem: React.FC<
  CategoryTableItemProps & React.HTMLAttributes<HTMLTableRowElement>
> = ({ title, subtitle, className, ...props }) => {
  return (
    <TableRow className={cn("border-border text-sm", className)} {...props}>
      <TableCell className="text-muted-foreground">{title}</TableCell>
      <TableCell>{subtitle}</TableCell>
    </TableRow>
  );
};
