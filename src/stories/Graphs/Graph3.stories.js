// import { Tabler } from "Tabler";
import RatingsBreakdown from "views/ReviewManagement/Components/snapshot/RatingsBreakdown";
export default {
  title: "Graphs/RatingsBreakdown",
  component: RatingsBreakdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <RatingsBreakdown {...args} />;

export const Default = Template.bind({});
