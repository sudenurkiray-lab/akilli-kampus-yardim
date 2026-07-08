import { STATUS_LABELS, STATUS_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        STATUS_COLORS[status] || "bg-gray-100 text-gray-800",
        className
      )}
    >
      {STATUS_LABELS[status] || status}
    </span>
  );
}
