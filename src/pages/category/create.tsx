import { Box, MenuItem, TextField } from "@mui/material";
import { useSelect } from "@refinedev/core";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

interface Profile {
  first_name: string;
  last_name: string;
  id: string;
}
export const CategoryCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
  } = useForm({
    defaultValues: {
      profile_id: "501",
      name: "",
      description: "",
      type: "EXPENSE",
    },
  });

  const { options } = useSelect<Profile>({
    resource: "profile",
    optionLabel: (item) => `${item.first_name} ${item.last_name}`,
    optionValue: "id",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Name"}
          name="name"
        />
        <TextField
          {...register("description", {
            required: "This field is required",
          })}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Description"}
          name="description"
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <TextField select label="type" {...field} margin="normal" fullWidth>
              <MenuItem key={"INCOME"} value={"INCOME"}>
                INCOME
              </MenuItem>
              <MenuItem key={"EXPENSE"} value={"EXPENSE"}>
                EXPENSE
              </MenuItem>
            </TextField>
          )}
        />
        {/* <Controller
          name="profile_id"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Profile"
              {...field}
              margin="normal"
              fullWidth
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        /> */}
      </Box>
    </Create>
  );
};
