import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { List, useDataGrid } from "@refinedev/mui";
import React from "react";

export const CategoryList = () => {
  const { dataGridProps } = useDataGrid({});

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "name",
        flex: 1,
        headerName: "Name",
        type: "string",
        minWidth: 100,
      },
      {
        field: "description",
        flex: 1,
        headerName: "Description",
        type: "string",
        minWidth: 150,
      },
      {
        field: "type",
        flex: 1,
        headerName: "Type",
        type: "string",
        minWidth: 100,
      },
    ],
    [],
  );

  return (
    <>
      <List>
        <DataGrid
          {...dataGridProps}
          columns={columns}
          getRowHeight={() => "auto"}
        />
      </List>
    </>
  );
};
