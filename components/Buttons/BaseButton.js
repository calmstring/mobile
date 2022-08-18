import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "@lib/tailwind";

function Button({ children, onClick, styles, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onClick}
      style={[
        tw.style(`p-2 m-2 rounded-lg flex`, disabled && "opacity-50"),
        styles.root,
      ]}
    >
      <Text
        style={[
          tw`
            text-xl
            font-semibold
            text-center`,
          styles.text,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.elementType,
  styles: PropTypes.shape({
    root: PropTypes.object,
    text: PropTypes.object,
  }),
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
  styles: { root: {}, text: {} },
};

export default Button;
