import React from "react";
import PropTypes from "prop-types";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox
} from "@material-ui/core";

const headCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "رقم الطلب"
  },
  {
    id: "userName",
    numeric: false,
    disablePadding: false,
    label: "اسم المستخدم"
  },
  {
    id: "sellerName",
    numeric: true,
    disablePadding: false,
    label: "اسم البائع"
  },
  {
    id: "orderDate",
    numeric: true,
    disablePadding: false,
    label: "تاريخ الطلب"
  },
  {
    id: "orderTotal",
    numeric: true,
    disablePadding: false,
    label: "قيمة الطلب"
  },
  {
    id: "deliveryMethod",
    numeric: true,
    disablePadding: false,
    label: "طريقة التوصيل"
  },
  {
    id: "orderStatus",
    numeric: true,
    disablePadding: false,
    label: "حالة الطلب"
  },
  { id: "fees", numeric: true, disablePadding: false, label: "المصاريف" }
];

const TableHeader = props => {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="right"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default TableHeader;
