import { List } from "@refinedev/mui";
import React from "react";
import Summary from "../../components/summary/index.";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";

interface IBudget {
  amount: number;
  currency: string;
  start_date: string;
  end_date: string;
  interval: number;
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
  } = useTable<IBudget>({
    refineCoreProps: {
      resource: "budget",
      meta: {
        select: "*, category!inner(*)",
      },
    },
    columns,
  });
  return (
    <>
      <List>
        <Summary />
        <div className="card-container">
          {getRowModel().rows.map((row) => (
            <div key={row.id} className="card">
              <div className="card-content">
                <h3>Transaction ID: {row.original.id}</h3>
                <p>
                  <strong>Category:</strong> {row.original.category.name}
                </p>
                <p>
                  <strong>Category Type:</strong> {row.original.category.type}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {row.original.category.description}
                </p>
                <p>
                  <strong>Amount:</strong> {row.original.amount}{" "}
                  {row.original.currency}
                </p>
                <p>
                  <strong>Interval:</strong> {row.original.interval}
                </p>
                <p>
                  <strong>Start Date:</strong> {row.original.start_date}
                </p>
                <p>
                  <strong>End Date:</strong> {row.original.end_date}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(row.original.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </List>
    </>
  );
};

export default BudgetList;
