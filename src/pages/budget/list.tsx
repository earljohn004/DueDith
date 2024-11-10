import { List } from "@refinedev/mui";
import React, { useMemo, useState } from "react";
import Summary from "../../components/summary/index.";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { gridRowsDataRowIdToIdLookupSelector } from "@mui/x-data-grid";
import DatePickerView from "../../components/datepicker/datepicker";

interface ICategory {
  name: string;
  description: string;
}
interface IBudget {
  amount: number;
  currency: string;
  start_date: string;
  end_date: string;
  interval: number;
  created_at: string;
  category: ICategory;
}

const BudgetList = () => {
  const columns = React.useMemo<ColumnDef<IBudget>[]>(
    () => [
      {
        id: "category",
        header: "Category",
        accessorKey: "category",
        meta: {
          filterOperator: "contains",
        },
      },
      {
        id: "amount",
        header: "Amount",
        accessorKey: "amount",
        meta: {
          filterOperator: "eq",
        },
      },
      {
        id: "currency",
        header: "Currency",
        accessorKey: "currency",
        meta: {
          filterOperator: "contains",
        },
      },
    ],
    [],
  );
  const {
    getHeaderGroups,
    getRowModel,
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
    refineCore: { setFilters },
  } = useTable<IBudget>({
    refineCoreProps: {
      resource: "budget",
      meta: {
        select: "*, category!inner(*)",
      },
      filters: {
        initial: [
          {
            field: "profile_id",
            operator: "eq",
            value: "501",
          },
          {
            field: "end_date",
            operator: "gte",
            value: "2024-11-01",
          },
        ],
      },
    },
    columns,
  });

  const handlePreviousPage = () => {
    if (getCanPreviousPage()) setPageIndex(0);
  };

  const handleNextPage = () => {
    if (getCanNextPage()) setPageIndex(getPageCount() - 1);
  };

  return (
    <>
      <List>
        <DatePickerView />
        <Summary />
        <Box display="flex" flexWrap="wrap" gap={2}>
          {getRowModel().rows.map((row) => (
            <Card
              key={row.id}
              variant="outlined"
              sx={{ minWidth: 350, maxWidth: 360 }}
            >
              <CardContent>
                <Typography color="text.secondary">
                  <strong>Category:</strong> {row.original.category.name}
                </Typography>
                <Typography color="text.secondary">
                  <strong>Description:</strong>{" "}
                  {row.original.category.description}
                </Typography>
                <Typography color="text.secondary">
                  <strong>Amount:</strong> {row.original.amount}{" "}
                  {row.original.currency}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            onClick={handlePreviousPage}
            disabled={!getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNextPage}
            disabled={!getCanNextPage()}
          >
            Next
          </Button>
        </Box>
      </List>
    </>
  );
};

export default BudgetList;
