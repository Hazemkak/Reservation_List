export const businessDateToDate = (businessDate: Date | string) => {
  const dayMonthYear = String(businessDate).split(".");
  return new Date(
    Number(dayMonthYear[2]),
    Number(dayMonthYear[1]) - 1,
    Number(dayMonthYear[0])
  );
};
