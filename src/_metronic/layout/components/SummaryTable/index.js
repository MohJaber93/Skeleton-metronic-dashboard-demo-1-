import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper
} from "@material-ui/core";

import { useStyles, StyledTableRow, StyledTableCell } from "./style";

const SummaryTable = () => {
  const classes = useStyles();
  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    {
      title: "إجمالي الطلبات",
      value: "2"
    },
    {
      title: "المبيعات",
      value: "R$ 801.59"
    },
    {
      title: "الطلبات المعلقة",
      value: "1"
    },
    {
      title: "الطلبات المستلمة",
      value: "1"
    },
    {
      title: "الطلبات المرفوضة",
      value: "2"
    }
  ];

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
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
