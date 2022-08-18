import { render } from "@testing-library/react-native";
import BaseButton from "./BaseButton";

test("renders correctly", () => {
  const { getByText } = render(<BaseButton children={"Test Button"} />);
  const element = getByText("Test Button");
  expect(Boolean(element)).toBe(true);
});
