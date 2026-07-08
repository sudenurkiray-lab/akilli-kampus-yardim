import { PRIORITY_LABELS, PRIORITY_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PriorityBadgeProps {
  priority: string;
  className?: string;
}

export default function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        PRIORITY_COLORS[priority] || "bg-gray-100 text-gray-800",
        className
      )}
    >
      {PRIORITY_LABELS[priority] || priority}
    </span>
  );
}
