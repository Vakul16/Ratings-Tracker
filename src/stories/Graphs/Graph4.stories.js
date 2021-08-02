// import { Tabler } from "Tabler";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
export default {
  title: "Graphs/ReviewTrend",
  component: ReviewTrend,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <ReviewTrend {...args} />;

export const Default = Template.bind({});
