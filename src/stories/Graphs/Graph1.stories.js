// import { Tabler } from "Tabler";
import { action } from "@storybook/addon-actions";
import StarRating from "views/ReviewManagement/Components/snapshot/StarRating";
export default {
  title: "Graphs/StarRating",
  component: StarRating,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};
// export const Text = () => (
//   <StarRating onClick={action("clicked")}>HELLO BUTTON</StarRating>
// );
const Template = (args) => <StarRating {...args} />;
// StarRating.args = {
//   primary: true,
//   label: "Button",
//   ratingNum: 3.75,
// };

export const Default = Template.bind({});
