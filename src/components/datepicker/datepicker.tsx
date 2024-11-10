import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, TextField } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const DatePickerView = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom={3}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          defaultValue={dayjs("2024-11-01")}
          label={"Select Month and Year"}
          views={["month", "year"]}
          minDate={dayjs("2020-01-01")}
          maxDate={dayjs("2030-01-01")}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerView;
