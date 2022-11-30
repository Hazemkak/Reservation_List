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
import TextField from "@mui/material/TextField";
import { AiOutlineFilter } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import "./styles/List.css";
import { AREA, SHIFT, STATUS } from "../../interfaces/Values";

const ModalFilters = React.lazy(() => import("../Filters/ModalFilters"));

function List() {
  const [reservations, setReservations] = React.useState<ReservationType[]>([]);
  const [sortBy, setSortBy] = React.useState<ReservationKeys>("id");
  const [page, setPage] = React.useState<number>(0);
  const [perPage, setPerPage] = React.useState<number>(10);
  const [search, setSearch] = React.useState<string>("");
  const [area, setArea] = React.useState<string[]>([]);
  const [shifts, setShifts] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<string[]>([]);
  const [date, setDate] = React.useState<Date | null>(null);
  const [modal, setModal] = React.useState<boolean>(false);

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

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getFilteredData = () => {
    return reservations.filter((el) => {
      if (!el.customer.match(search)) return false;

      if (date)
        if (
          !(
            new Date(el.businessDate).toDateString() ===
            new Date(date).toDateString()
          )
        )
          return false;

      if (area?.length) if (!area.includes(el.area)) return false;

      if (shifts?.length) if (!shifts.includes(el.shift)) return false;

      if (status?.length) if (!status.includes(el.status)) return false;

      return true;
    });
  };

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "90%", mt: 4, mr: "auto", ml: "auto" }}>
        <div className="parent_div">
          <div className="search_div">
            <TextField
              fullWidth
              value={search}
              autoComplete="off"
              size="small"
              onChange={handleSearchName}
              required
              id="outlined-required"
              label="Search By Customer Name"
            />
          </div>
          <div className="filter_div">
            <IconButton
              onClick={openModal}
              color="inherit"
              aria-label="filter"
              component="label"
            >
              <AiOutlineFilter />
            </IconButton>
          </div>
        </div>
      </Paper>
      <Paper sx={{ width: "90%", mb: 4, mt: 4, mr: "auto", ml: "auto" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <ListHead sortedById={sortBy} SortData={SortData} />
            <ListBody
              reservations={getFilteredData()}
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
      <React.Suspense fallback={<></>}>
        {modal && (
          <ModalFilters
            date={date}
            setDate={setDate}
            closeModal={closeModal}
            area={area}
            setArea={setArea}
            shifts={shifts}
            setShifts={setShifts}
            status={status}
            setStatus={setStatus}
          />
        )}
      </React.Suspense>
    </Box>
  );
}

export default List;
