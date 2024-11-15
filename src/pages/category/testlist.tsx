import React from "react";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { List } from "@refinedev/mui";

interface IProduct {
  id: number;
  name: string;
  price: string;
}

export const TestList: React.FC = () => {
  const columns = React.useMemo<ColumnDef<IProduct>[]>(
    () => [
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
        meta: {
          filterOperator: "eq",
        },
      },
      {
        id: "name",
        header: "Name",
        accessorKey: "name",
        meta: {
          filterOperator: "contains",
        },
      },
      {
        id: "description",
        header: "Description",
        accessorKey: "description",
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
  } = useTable<IProduct>({
    refineCoreProps: {
      resource: "category",
    },
    columns,
  });

  return (
    <>
      <List>
        <div>
          <h1>Products</h1>
          <table>
            <thead>
              {getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id}>
                        {header.isPlaceholder ? null : (
                          <>
                            <div
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                              {{
                                asc: " 🔼",
                                desc: " 🔽",
                              }[header.column.getIsSorted() as string] ?? " ↕️"}
                            </div>
                          </>
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <input
                              value={
                                (header.column.getFilterValue() as string) ?? ""
                              }
                              onChange={(e) =>
                                header.column.setFilterValue(e.target.value)
                              }
                            />
                          </div>
                        ) : null}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <button
              onClick={() => setPageIndex(0)}
              disabled={!getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
              {">"}
            </button>
            <button
              onClick={() => setPageIndex(getPageCount() - 1)}
              disabled={!getCanNextPage()}
            >
              {">>"}
            </button>
            <span>
              Page
              <strong>
                {getState().pagination.pageIndex + 1} of {getPageCount()}
              </strong>
            </span>
            <span>
              | Go to page:
              <input
                type="number"
                defaultValue={getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  setPageIndex(page);
                }}
              />
            </span>{" "}
            <select
              value={getState().pagination.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </List>
    </>
  );
};
