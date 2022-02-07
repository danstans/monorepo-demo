import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const PREFIX = "Demo";

const classes = {
  icon: `${PREFIX}-icon`,
  textCenter: `${PREFIX}-textCenter`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledAppointmentTooltipHeader = styled(AppointmentTooltip.Header)(() => ({
  [`&.${classes.firstRoom}`]: {
    background: "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)",
  },
  [`&.${classes.secondRoom}`]: {
    background: "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)",
  },
  [`&.${classes.thirdRoom}`]: {
    background: "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)",
  },
  [`&.${classes.header}`]: {
    height: "260px",
    backgroundSize: "cover",
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
}));

export const Header = (props: any) => {
  console.log(props);
  return (
    <StyledAppointmentTooltipHeader {...props} appointmentData={props.appointmentData}>
      <StyledIconButton className={classes.commandButton} size="large">
        {/* <MoreIcon /> */}
      </StyledIconButton>
    </StyledAppointmentTooltipHeader>
  );
};
