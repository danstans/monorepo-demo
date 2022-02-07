import CapableCalendar from "../components/capable-calendar//CapableCalendar";
import { CapableCalendarProps } from "../components/capable-calendar/CapableCalendar.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Shared/CapableCalendar",
  component: CapableCalendar,
} as Meta;

const Template = (args: CapableCalendarProps) => <CapableCalendar {...args} />;

export const InitialStory: Story<CapableCalendarProps> = Template.bind({});

InitialStory.args = {
  appointments: [
    {
      startDate: "2022-02-07T09:45",
      endDate: "2022-02-07T11:00",
      title: "Meeting",
      calendar: "Dr. Kariko",
      patient: "Daniel Stansberry",
      location: "https://capable.daily.com/meeting-123",
    },
    {
      startDate: "2022-02-08T12:00",
      endDate: "2022-02-08T13:30",
      title: "Go to a gym",
      calendar: "Dr. Kariko",
      patient: "Andreea Chidu",
      location: "https://capable.daily.com/meeting-123",
    },
  ],
};
