import { AppointmentModel, ChangeSet } from "@devexpress/dx-react-scheduler";

export type CapableCalendarProps = React.PropsWithChildren<{
  appointments: Array<AppointmentModel>;
  onCommitChanges: (changes: ChangeSet) => void;
}>;
