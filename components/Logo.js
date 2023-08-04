import { Image, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";

const Logo = ({ styles, bare = false }) => {
  const scheme = useColorScheme();
  const ImageBareLight = () => (
    <Image
      source={require("../assets/Calmstring-512-light.png")}
      style={[_styles.bareImage, styles]}
    />
  );

  const ImageBareDark = () => (
    <Image
      source={require("../assets/Calmstring-512-dark.png")}
      style={[_styles.bareImage, styles]}
    />
  );

  const ImageNormalLight = () => (
    <Image
      style={[_styles.image, styles]}
      source={require("../assets/Calmstring-with-logo-light.png")}
    />
  );

  const ImageNormalDark = () => (
    <Image
      style={[_styles.image, styles]}
      source={require("../assets/Calmstring-with-logo-dark.png")}
    />
  );

  const dark = scheme === "dark";

  return (
    <>
      {bare ? (
        dark ? (
          <ImageBareLight />
        ) : (
          <ImageBareDark />
        )
      ) : dark ? (
        <ImageNormalLight />
      ) : (
        <ImageNormalDark />
      )}
    </>
  );
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
