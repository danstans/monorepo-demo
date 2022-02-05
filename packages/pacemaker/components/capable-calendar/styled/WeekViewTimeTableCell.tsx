import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import { alpha, styled } from "@mui/material";

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
  [`&.capable-weekview-timetablecell`]: {
    // height: "75px",
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.14),
    },
    "&:focus": {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
  },
  [`&.capable-weekview-timetablecell__weekend`]: {
    // height: "75px",
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    "&:hover": {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    },
    "&:focus": {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    },
  },
}));

export const WeekViewTimeTableCell = (props: any) => {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return <StyledWeekViewTimeTableCell {...props} className={"capable-weekview-timetablecell"} />;
  }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return (
      <StyledWeekViewTimeTableCell
        {...props}
        className={"capable-weekview-timetablecell__weekend"}
      />
    );
  }
  return <StyledWeekViewTimeTableCell {...props} />;
};
