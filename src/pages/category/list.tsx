import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const CategoryList = () => {
  const { dataGridProps } = useDataGrid({});

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "string",
      },
      {
        field: "profile_id",
        flex: 1,
        headerName: "Profile",
        type: "number",
      },
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
        minWidth: 100,
      },
      {
        field: "type",
        flex: 1,
        headerName: "Type",
        type: "string",
        minWidth: 100,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
