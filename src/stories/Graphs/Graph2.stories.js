// import { Tabler } from "Tabler";
import RatingsRollup from "views/ReviewManagement/Components/snapshot/RatingsRollup";
export default {
  title: "Graphs/RatingsRollup",
  component: RatingsRollup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <RatingsRollup {...args} />;

export const Default = Template.bind({});
