import { Grid, Typography, Divider } from "@mui/material";

const Summary = () => {
  return (
    <Grid container marginBottom={2}>
      <Grid xs={4}>
        <Typography variant="body1">Inflow</Typography>
      </Grid>
      <Grid xs={8} textAlign="right" paddingRight={2}>
        <Typography variant="body1">+S$ 0000.000</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="body1">Outflow</Typography>
      </Grid>
      <Grid xs={8} textAlign="right" paddingRight={2}>
        <Typography variant="body1">-S$ 0000.000</Typography>
        <Divider variant="fullWidth" sx={{ border: 1 }} />
      </Grid>
      <Grid xs={12} textAlign="right" paddingRight={2}>
        <Typography variant="body1">+S$ 0000.000</Typography>
      </Grid>
    </Grid>
  );
};

export default Summary;
