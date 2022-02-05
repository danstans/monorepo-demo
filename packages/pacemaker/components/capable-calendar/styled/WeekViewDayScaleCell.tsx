import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import { alpha, styled } from "@mui/material/styles";

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(({ theme }) => ({
  [`&.capable-weekview-dayscalecell__today`]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.16),
  },
  [`&.capable-weekview-dayscalecell__weekend`]: {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
  },
}));

export const WeekViewDayScaleCell = (props: any) => {
  const { startDate, today } = props;

  if (today) {
    return (
      <StyledWeekViewDayScaleCell {...props} className={"capable-weekview-dayscalecell__today"} />
    );
  }
  return <StyledWeekViewDayScaleCell {...props} />;
};
