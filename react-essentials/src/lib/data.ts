import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

const CORE_CONCEPTS = [
  {
    img: componentsImg,
    imgAlt: "Alt Text",
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    img: jsxImg,
    imgAlt: "Alt Text",
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    img: propsImg,
    imgAlt: "Alt Text",
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    img: stateImg,
    imgAlt: "Alt Text",
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export default CORE_CONCEPTS;
