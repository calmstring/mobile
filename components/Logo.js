import { Image, StyleSheet } from "react-native";

const Logo = ({ styles, bare = false }) => {
  const ImageBare = () => (
    <Image
      source={require("../assets/Calmstring-512.png")}
      style={[_styles.bareImage, styles]}
    />
  );

  const ImageNormal = () => (
    <Image
      style={[_styles.image, styles]}
      source={require("../assets/Calmstring-with-logo.png")}
    />
  );

  return <>{bare ? <ImageBare /> : <ImageNormal />}</>;
};

const _styles = StyleSheet.create({
  image: {
    width: 170,
    height: 169,
  },
  bareImage: {
    width: 170,
    height: 142,
  },
});

export default Logo;
