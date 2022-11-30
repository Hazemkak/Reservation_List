import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tooltip from "@mui/material/Tooltip";
import { ReservationKeys } from "../../interfaces/Types";

type HeaderType = Array<{ name: string; id: ReservationKeys }>;

const TableHeaders: HeaderType = [
  { name: "ID", id: "id" },
  { name: "Customer Name", id: "customer" },
  { name: "Date", id: "businessDate" },
  { name: "Status", id: "status" },
  { name: "Shift", id: "shift" },
  { name: "Quantity", id: "quantity" },
  { name: "Area", id: "area" },
  { name: "Starts at", id: "start" },
  { name: "Ends at", id: "end" },
];

interface ListHeadProps {
  sortedById: ReservationKeys;
  SortData: Function;
}

function ListHead(props: ListHeadProps) {
  const { sortedById, SortData } = props;
  return (
    <TableHead className="header_div">
      <TableRow>
        {TableHeaders.map((header, i) => (
          <TableCell key={i} align="left" padding="normal">
            <Tooltip title={`sort by ${header.name}`}>
              <TableSortLabel
                active={sortedById === header.id}
                direction="desc"
                onClick={SortData(header.id)}
              >
                {header.name}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default ListHead;
