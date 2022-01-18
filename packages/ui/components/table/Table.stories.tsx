import { Table } from "./Table"
import { TableProps } from "./Table.types"

export default {
    title: 'Table',
    component: Table,
  };

const Template = (args: TableProps) => <Table {...args} />;

export const InitialStory = Template.bind({});