export type StatusType =
  | "CONFIRMED"
  | "SEATED"
  | "CHECKED OUT"
  | "NOT CONFIRMED";

export type ShiftType = "BREAKFAST" | "LUNCH" | "DINNER";
export type AreaType = "BAR" | "MAIN ROOM";

export interface CustomerType {
  firstName: string;
  lastName: string;
}

export type ReservationKeys =
  | "id"
  | "businessDate"
  | "status"
  | "shift"
  | "start"
  | "end"
  | "quantity"
  | "customer"
  | "area"
  | "guestNotes";

export interface ReservationType {
  id: number;
  businessDate: Date;
  status: StatusType;
  shift: ShiftType;
  start: string;
  end: string;
  quantity: number;
  customer: string;
  area: AreaType;
  guestNotes: string;
}
