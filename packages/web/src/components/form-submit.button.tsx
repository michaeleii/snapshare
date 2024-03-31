import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function FormSubmitButton({
  className,
  disabled,
  loadingValue = "Submitting...",
  value = "Submit",
  ...props
}: {
  className?: string;
  loadingValue?: string;
  value?: string;
  disabled: boolean;
}) {
  return (
    <Button className={cn("", className)} disabled={disabled} {...props}>
      {disabled ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{loadingValue}</span>
        </div>
      ) : (
        value
      )}
    </Button>
  );
}
