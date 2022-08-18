import BaseButton from "./BaseButton";
import { tw } from "@lib";

const ButtonSecondary = (props) => {
  return (
    <BaseButton
      styles={{ root: tw`bg-yellow-500`, text: tw`text-stone-100` }}
      {...props}
    />
  );
};
export default ButtonSecondary;
