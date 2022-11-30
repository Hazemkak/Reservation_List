import { ReservationKeys, ReservationType } from "../interfaces/Types";
import { businessDateToDate } from "./dateHelper";

export const sortComparator = (orderBy: ReservationKeys) => {
  // if (orderBy === "businessDate")
  //   return (a: ReservationType, b: ReservationType) => {
  //     const aa = businessDateToDate(a[orderBy]);
  //     const bb = businessDateToDate(b[orderBy]);
  //     return bb < aa ? -1 : bb > aa ? 1 : 0;
  //   };
  // if (orderBy === "customer")
  //   return (a: ReservationType, b: ReservationType) => {
  //     const aa = `${a[orderBy].firstName} ${a[orderBy].lastName}`;
  //     const bb = `${b[orderBy].firstName} ${b[orderBy].lastName}`;
  //     return bb < aa ? -1 : bb > aa ? 1 : 0;
  //   };

  return (a: ReservationType, b: ReservationType) =>
    b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0;
};
