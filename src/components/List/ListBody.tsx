import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ReservationType } from "../../interfaces/Types";
import { businessDateToDate } from "../../helpers/dateHelper";

interface ListBodyProps {
  page: number;
  perPage: number;
  reservations: Array<ReservationType>;
}

function ListBody(props: ListBodyProps) {
  const { reservations, perPage, page }: ListBodyProps = props;
  return (
    <TableBody>
      {reservations
        ?.slice(page * perPage, page * perPage + perPage)
        ?.map((reservation) => (
          <TableRow key={reservation?.id}>
            <TableCell align="left" padding="normal">
              {reservation?.customer}
            </TableCell>
            <TableCell align="left" padding="normal">
              {reservation?.businessDate?.toDateString()}
            </TableCell>
            <TableCell align="left" padding="normal">
              {reservation?.status}
            </TableCell>
            <TableCell align="left" padding="normal">
              {reservation?.shift}
            </TableCell>
            <TableCell align="left" padding="normal">
              {reservation?.quantity}
            </TableCell>
            <TableCell align="left" padding="normal">
              {reservation?.area}
            </TableCell>
            <TableCell align="left" padding="normal">
              {new Date(reservation?.start).toLocaleTimeString()}
            </TableCell>
            <TableCell align="left" padding="normal">
              {new Date(reservation?.end).toLocaleTimeString()}
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export default ListBody;
