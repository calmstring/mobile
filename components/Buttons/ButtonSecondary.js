import BaseButton from "./BaseButton";
import { tw } from "@lib";

const ButtonSecondary = (props) => {
  return (
    <BaseButton
      styles={{
        root: tw`bg-secondary-light dark:bg-secondary-dark`,
        text: tw`text-secondary-text-light dark:text-secondary-text-dark`,
      }}
      {...props}
    />
  );
};
export default ButtonSecondary;
