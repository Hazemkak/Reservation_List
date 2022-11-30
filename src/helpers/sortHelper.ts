import { ReservationKeys, ReservationType } from "../interfaces/Types";

export const sortComparator = (orderBy: ReservationKeys) => {
  return (a: ReservationType, b: ReservationType) =>
    b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0;
};
