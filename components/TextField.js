import PropTypes from "prop-types";
import { TextInput, Platform } from "react-native";
import { View } from "react-native";
import tw from "twrnc";

function TextField({ value, onChange, placeholder, type, styles }) {
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
      default:
        return {
          keyboardType: "default",
          autoComplete: "email",
        };
    }
  };

  return (
    <View style={[tw`flex p-3 bg-gray-200 text-xl m-2`, styles.root]}>
      <TextInput
        style={[
          tw.style("text-xl text-black", Platform.OS == "ios" && "leading-0"),
          styles.input,
        ]}
        {...getFieldType()}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
      />
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
};

TextField.defaultProps = {
  type: "text",
  placeholder: "",
  styles: { root: {}, input: {} },
};

export default TextField;
