import React from "react";
import TableHeader from "./components/TableHeader";
import TableToolbar from "./components/TableToolbar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Typography,
  Checkbox,
  makeStyles
} from "@material-ui/core";
import CustomSelect from "../CustomSelect";
import UsersTableActions from "../UsersTableActions";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import { ORDERS_STATUS } from "app/constants";
import { updateOrderStatus } from "api/Orders";
import { API_COMMON_STATUS } from "helpers/api-helper";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  // eslint-disable-next-line no-unused-expressions
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis?.map(el => el[0]);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  tableContainer: {
    minHeight: "300px"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EnhancedTable({ data, updateTableData, usersTable }) {
  const classes = useStyles();
  const [ordersStatuses, setOrdersStatuses] = React.useState({});
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    message: "",
    variant: ""
  });
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = data.map(item => item.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState(prevSnackbarState => ({
      ...prevSnackbarState,
      open: false
    }));
  };

  const orderStatusChangeHandler = (event, orderId) => {
    const updatedValue = event.target.value;
    const updatePaylod = {
      orderId,
      updatedValue
    };
    updateOrderStatus(updatePaylod)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setOrdersStatuses(prevOrdersStatuses => ({
            ...prevOrdersStatuses,
            [orderId]: updatedValue
          }));
          setSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
        } else {
          setSnackbarState({
            open: true,
            message: response.message,
            variant: "error"
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  };

  React.useEffect(() => {
    if (data && !usersTable) {
      const formatedOrdersStatuses = {};
      data.forEach(order => {
        formatedOrdersStatuses[order.id] = order.order_status;
      });
      setOrdersStatuses(formatedOrdersStatuses);
    }
  }, [data, usersTable]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          selected={selected}
          updateTableData={updateTableData}
          usersTable={usersTable}
        />
        <TableContainer className={classes.tableContainer}>
          {data?.length ? (
            <Table className={classes.table} size="medium">
              <TableHeader
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data ? data?.length : 0}
                usersTable={usersTable}
              />

              <TableBody>
                {stableSort(data, getComparator(order, orderBy))
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((item, index) => {
                    const isItemSelected = isSelected(item.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={item.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={event => handleClick(event, item.id)}
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {!usersTable ? item.order_number : index + 1}
                        </TableCell>
                        <TableCell align="center">
                          {!usersTable ? item.user_name : item.name}
                        </TableCell>
                        <TableCell align="center">
                          {!usersTable
                            ? item.seller_name
                            : item.account_name || "account name"}
                        </TableCell>
                        <TableCell align="right">
                          {!usersTable
                            ? item.order_date
                            : item.email || "email@gmail.com"}
                        </TableCell>
                        <TableCell align="center">
                          {!usersTable ? item.order_total : item.phone}
                        </TableCell>
                        <TableCell align="center">
                          {!usersTable ? item.delivery_method : item.type}
                        </TableCell>
                        <TableCell align="center">
                          {usersTable ? (
                            <UsersTableActions
                              user={item}
                              updateSnackbarState={setSnackbarState}
                            />
                          ) : (
                            <CustomSelect
                              data={ORDERS_STATUS}
                              value={
                                ordersStatuses[item.id]
                                  ? ordersStatuses[item.id]
                                  : item.order_status
                              }
                              onChange={event =>
                                orderStatusChangeHandler(event, item.id)
                              }
                              fullWidth
                            />
                          )}
                        </TableCell>
                        {!usersTable && (
                          <TableCell align="center">{item.fees}</TableCell>
                        )}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          ) : (
            <>
              {!data && (
                <Box
                  height="250px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress size={50} />
                </Box>
              )}

              {data && !data.length && (
                <Typography align="center" variant="h4">
                  عذرا لايوجد أي طلب حاليا
                </Typography>
              )}
            </>
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data ? data?.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{ direction: "ltr" }}
        />
      </Paper>
      <Snackbar
        open={!!snackbarState.open}
        handleClose={handleCloseSnackbar}
        type={snackbarState.variant}
        text={snackbarState.message}
      />
    </div>
  );
}
