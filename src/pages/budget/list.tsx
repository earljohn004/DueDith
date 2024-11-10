import { List } from "@refinedev/mui";
import React from "react";
import Summary from "../../components/summary/index.";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Box, Grid, Typography } from "@mui/material";
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
    getRowModel,
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
      sorters: {
        initial: [{ field: "currency", order: "asc" }],
      },
    },
    columns,
  });

  return (
    <>
      <List>
        <DatePickerView />
        <Summary />
        <Box>
          <Typography align="right" variant="body1">
            -S$ 12345
          </Typography>
          {getRowModel().rows.map((row, index) => (
            <>
              <Grid container sx={{ margin: 2 }}>
                <Grid item xs={1} />
                <Grid item xs={7}>
                  <Typography variant="h6">
                    {row.original.category.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.original.category.description}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="text.secondary">
                    {row.original.currency} {row.original.amount}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ))}
        </Box>
      </List>
    </>
  );
};

export default BudgetList;
