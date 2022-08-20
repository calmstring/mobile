import PropTypes from "prop-types";
import { TextInput, Platform } from "react-native";
import { View, useColorScheme } from "react-native";
import { tw } from "@lib/";

import FieldLabel from "./FieldLabel";
import FieldMessage from "./FieldMessage";

function TextField({
  value,
  onChange,
  placeholder,
  type,
  styles,
  disabled,
  label,
  error,
}) {
  const colorScheme = useColorScheme(); // couse fields do not update instantly
  const getFieldType = () => {
    switch (type) {
      case "email":
        return {
          keyboardType: "email-address",
        };
      case "password":
        return {
          secureTextEntry: true,
          autoComplete: "password",
          keyboardType: "password-visible",
        };
      case "number":
        return {
          keyboardType: "number-pad",
        };
      default:
        return {
          keyboardType: "default",
          autoComplete: "email",
        };
    }
  };

  return (
    <View>
      {label && <FieldLabel text={label} />}
      <View
        style={[
          tw.style(
            `
          flex 
          p-3 
          text-xl 
          m-2 
          border rounded 
          bg-neutral-200
          border-neutral-500
          dark:bg-neutral-900 
          dark:border-neutral-500`,
            disabled && "opacity-50"
          ),
          styles.root,
        ]}
      >
        <TextInput
          editable={!disabled}
          style={[
            tw.style(
              "text-xl text-black dark:text-primary-text-dark",
              Platform.OS == "ios" && "leading-0"
            ),
            styles.input,
          ]}
          {...getFieldType()}
          placeholder={placeholder}
          placeholderTextColor={
            colorScheme == "dark"
              ? tw.color("neutral-500")
              : tw.color("neutral-500")
          }
          value={value}
          onChangeText={onChange}
          autoCapitalize="none"
        />
      </View>
      {error && <FieldMessage text={error} severity="error" />}
    </View>
  );
}

TextField.propsTypes = {
  type: PropTypes.oneOf(["email", "password", "text"]),
  placeholder: PropTypes.string,
  styles: PropTypes.shape({
    root: PropTypes.object,
    input: PropTypes.object,
  }),
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  placeholder: "",
  styles: { root: {}, input: {} },
};

export default TextField;
