import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../theme";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};
