import BaseButton from "./BaseButton";
import { tw } from "@lib";

const ButtonPrimary = (props) => {
  return (
    <BaseButton
      styles={{ root: tw`bg-slate-900`, text: tw`text-stone-100` }}
      {...props}
    />
  );
};
export default ButtonPrimary;
