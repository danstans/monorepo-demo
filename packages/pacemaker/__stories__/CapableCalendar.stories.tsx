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
    { startDate: "2018-11-01T09:45", endDate: "2018-11-01T11:00", title: "Meeting" },
    { startDate: "2018-11-01T12:00", endDate: "2018-11-01T13:30", title: "Go to a gym" },
  ],
};
