import React from "react";
import { getData } from "../../helpers/fetchHelper";
import { ReservationKeys, ReservationType } from "../../interfaces/Types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import ListHead from "./ListHead";
import { sortComparator } from "../../helpers/sortHelper";
import ListBody from "./ListBody";
import SearchBar from "../Filters/SearchBar";

function List() {
  const [reservations, setReservations] = React.useState<ReservationType[]>([]);
  const [sortBy, setSortBy] = React.useState<ReservationKeys>("id");
  const [page, setPage] = React.useState<number>(0);
  const [perPage, setPerPage] = React.useState<number>(10);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    SortData("businessDate", getData())();
  }, []);

  const SortData =
    (id: ReservationKeys, data?: Array<ReservationType>) =>
    (_e?: React.MouseEvent) => {
      if (id === sortBy) return;
      const sortedData = (data ?? reservations).sort(sortComparator(id));
      setReservations(sortedData);
      setSortBy(id);
    };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "90%", mt: 4, mr: "auto", ml: "auto" }}>
        <SearchBar search={search} setSearch={setSearch} />
      </Paper>
      <Paper sx={{ width: "90%", mb: 4, mt: 4, mr: "auto", ml: "auto" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <ListHead sortedById={sortBy} SortData={SortData} />
            <ListBody
              reservations={reservations}
              page={page}
              perPage={perPage}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={reservations.length}
          rowsPerPage={perPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default List;
