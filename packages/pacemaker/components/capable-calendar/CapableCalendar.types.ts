import { AppointmentModel } from "@devexpress/dx-react-scheduler";

export type CapableCalendarProps = React.PropsWithChildren<{
  appointments: Array<AppointmentModel>;
}>;
