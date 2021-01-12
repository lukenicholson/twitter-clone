export function toDateString(dateObj) {
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return month + "/" + day + "/" + year;
}
