import { CapableCalendarProps } from "./CapableCalendar.types";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { SchedulerDateTime, ViewState } from "@devexpress/dx-react-scheduler";
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
} from "@devexpress/dx-react-scheduler-material-ui";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import { WeekViewTimeTableCell } from "./styled/WeekViewTimeTableCell";
import { WeekViewDayScaleCell } from "./styled/WeekViewDayScaleCell";

const CapableCalendar = (props: CapableCalendarProps): JSX.Element => {
  const [currentDate, setCurrentDate] = useState<SchedulerDateTime>("2018-11-01");

  const { appointments } = props;

  const StyledTimeScale = styled(WeekView.TimeScaleLayout)(({ theme }) => ({
    height: "75px",
  }));

  const FlexibleSpaceComponent = styled(Toolbar.FlexibleSpace)(({ theme }) => ({
    paddingRight: "12px",
  }));

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
        <Toolbar
          flexibleSpaceComponent={() => <FlexibleSpaceComponent>Dropdown</FlexibleSpaceComponent>}
        />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default CapableCalendar;
