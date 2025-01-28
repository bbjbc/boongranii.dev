export const formatDate = (date: string | Date): string => {
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const day = dateObj.getDate();
  const suffix = getOrdinalSuffix(day);

  return `${month} ${day}${suffix}, ${year}`;
};

const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
