export function yearsSinceYear(yearSince: number) {
  const currentYear = new Date().getFullYear();
  if (yearSince > currentYear) {
    return "Invalid input";
  } else {
    return currentYear - yearSince;
  }
}
