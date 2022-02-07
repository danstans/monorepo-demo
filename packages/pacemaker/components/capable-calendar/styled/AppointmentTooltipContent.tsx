import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Room from "@mui/icons-material/Room";

const PREFIX = "capable";

const classes = {
  icon: `${PREFIX}-icon`,
  grid: `${PREFIX}-grid`,
  gridIcon: `${PREFIX}-gridIcon`,
  gridText: `${PREFIX}-gridText`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.grid}`]: {
    paddingBottom: "12px",
    maxHeight: "32px",
  },
  [`&.${classes.gridIcon}`]: {
    height: "20px",
    textAlign: "center",
  },
  [`&.${classes.gridText}`]: {
    height: "20px",
    display: "flex",
    alignItems: "center",
  },
}));

const StyledRoom = styled(Room)(({ theme: { palette } }) => ({
  [`&.${classes.icon}`]: {
    color: palette.action.active,
  },
}));

export const Content = ({ appointmentData, ...restProps }: any) => {
  return (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
      {appointmentData?.patient && (
        <StyledGrid container alignItems="center" className={classes.grid}>
          <StyledGrid item xs={2} className={classes.gridIcon}>
            <StyledRoom className={classes.icon} />
          </StyledGrid>
          <StyledGrid item xs={10} className={classes.gridText}>
            <span>{appointmentData?.patient}</span>
          </StyledGrid>
        </StyledGrid>
      )}
      {appointmentData?.location && (
        <StyledGrid container alignItems="center" className={classes.grid}>
          <StyledGrid item xs={2} className={classes.gridIcon}>
            <StyledRoom className={classes.icon} />
          </StyledGrid>
          <StyledGrid item xs={10} className={classes.gridText}>
            <span>{appointmentData?.location}</span>
          </StyledGrid>
        </StyledGrid>
      )}
      {appointmentData?.calendar && (
        <StyledGrid container alignItems="center" className={classes.grid}>
          <StyledGrid item xs={2} className={classes.gridIcon}>
            <StyledRoom className={classes.icon} style={{ height: "20px" }} />
          </StyledGrid>
          <StyledGrid item xs={10} className={classes.gridText}>
            <span>{appointmentData?.calendar}</span>
          </StyledGrid>
        </StyledGrid>
      )}
    </AppointmentTooltip.Content>
  );
};
