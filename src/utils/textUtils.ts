export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }

  // Subtracting 3 to account for the length of the ellipsis
  return text.slice(0, maxLength - 3) + '...';
};

export const escapeRegExp = (text: string) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};