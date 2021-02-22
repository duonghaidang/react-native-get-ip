import { NativeModules, Platform } from "react-native";

const GetIP = Platform.select({
  ios: "Not support",
  android: NativeModules.IPModule.getIP(),
});

export default {
  return GetIP
};
