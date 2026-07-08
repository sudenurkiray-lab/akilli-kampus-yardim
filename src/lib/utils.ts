export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calculateResolutionTime(
  createdAt: Date | string,
  resolvedAt: Date | string | null
): string | null {
  if (!resolvedAt) return null;
  const start = new Date(createdAt).getTime();
  const end = new Date(resolvedAt).getTime();
  const diffMs = end - start;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days} gün ${remainingHours} saat`;
  }
  if (hours > 0) return `${hours} saat ${minutes} dakika`;
  return `${minutes} dakika`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
