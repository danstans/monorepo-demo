import { CapableCalendarProps } from "./CapableCalendar.types";
import Paper from "@mui/material/Paper";
import {
  SchedulerDateTime,
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  MonthView,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { WeekViewTimeTableCell } from "./styled/WeekViewTimeTableCell";
import { WeekViewDayScaleCell } from "./styled/WeekViewDayScaleCell";
import { Content } from "./styled/AppointmentTooltipContent";
import moment from ".pnpm/moment@2.29.1/node_modules/moment";
import { Button } from "../button";
import { ViewSwitcherComponent } from "./styled/ViewSwitcherComponent";

const CapableCalendar = (props: CapableCalendarProps): JSX.Element => {
  const [currentDate, setCurrentDate] = useState<SchedulerDateTime>(moment().format("YYYY-MM-DD"));

  const { appointments, onCommitChanges } = props;

  const StyledTimeScale = styled(WeekView.TimeScaleLayout)(() => ({
    height: "75px",
  }));

  const FlexibleSpaceComponent = styled(Toolbar.FlexibleSpace)(() => ({
    paddingRight: "12px",
  }));

  const StyledNavigationButton = ({ type, onClick }: any) => {
    return (
      <Button
        color="secondary"
        onClick={onClick}
        sx={{
          marginLeft: "12px",
          padding: "6.4px 0",
          minWidth: "42px",
        }}
      >
        {type === "forward" ? ">" : "<"}
      </Button>
    );
  };

  return (
    <Paper variant="outlined">
      <Scheduler data={appointments}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={(date) => setCurrentDate(date)}
          defaultCurrentViewName="Week"
        />
        <DayView startDayHour={9} endDayHour={14} />

        <WeekView
          startDayHour={8}
          endDayHour={18}
          cellDuration={60}
          timeScaleLayoutComponent={StyledTimeScale}
          timeTableCellComponent={WeekViewTimeTableCell}
          dayScaleCellComponent={WeekViewDayScaleCell}
        />

        <MonthView />
        <Toolbar flexibleSpaceComponent={() => <FlexibleSpaceComponent></FlexibleSpaceComponent>} />
        <ViewSwitcher switcherComponent={ViewSwitcherComponent} />
        <DateNavigator navigationButtonComponent={StyledNavigationButton} />
        <TodayButton />
        <Appointments />
        <EditingState onCommitChanges={onCommitChanges} />
        <IntegratedEditing />
        <ConfirmationDialog
          ignoreCancel
          messages={{
            cancelButton: "No, go back",
            deleteButton: "Yes, cancel appointmnet",
            confirmDeleteMessage: "Are you sure you want to cancel this appointment?",
          }}
        />

        <AppointmentTooltip contentComponent={Content} showDeleteButton showCloseButton />
      </Scheduler>
    </Paper>
  );
};

export default CapableCalendar;
