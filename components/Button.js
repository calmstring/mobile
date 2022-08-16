import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

function Button({ children, onClick, styles }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[tw`p-2 m-2 bg-black rounded-lg`, styles.root]}
    >
      <Text
        style={[
          tw`
            text-white 
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
