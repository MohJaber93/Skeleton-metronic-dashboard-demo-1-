import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress
} from "@material-ui/core";

import { useStyles, StyledTableRow, StyledTableCell } from "./style";

const SummaryTable = ({ data, weekly }) => {
  const classes = useStyles();

  const rows = useMemo(
    () => [
      {
        title: "إجمالي الطلبات",
        value: data?.totalOrders
      },
      {
        title: "الطلبات المعلقة",
        value: data?.pendingOrders
      },
      {
        title: "الطلبات المستلمة",
        value: data?.deliveredOrders
      },
      {
        title: "الطلبات المرفوضة",
        value: data?.rejectedOrders
      }
    ],
    [data]
  );

  if (weekly) {
    rows.push({
      title: "الزبائن الجدد",
      value: data?.newCustomer
    });
  }

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.title} hover>
              <StyledTableCell
                style={{ borderLeft: "1px solid #ccc" }}
                align="right"
                component="th"
                scope="row"
              >
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">
                {renderCardValue(row.value)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
