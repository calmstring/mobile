import BaseButton from "./BaseButton";
import { tw } from "@lib";

const ButtonPrimary = (props) => {
  return (
    <BaseButton
      styles={{
        root: tw`bg-primary-light dark:bg-primary-dark`,
        text: tw`text-primary-text-light dark:text-primary-text-dark`,
      }}
      {...props}
    />
  );
};
export default ButtonPrimary;
