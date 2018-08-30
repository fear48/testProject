import { Navigation } from "react-native-navigation";
import Hometab from "./homeTab";
import ProfilePage from "./profilePage";

export default (store, Provider) => {
  Navigation.registerComponent(
    "ReactNativeReduxExample.Hometab",
    () => Hometab,
    store,
    Provider
  );
  Navigation.registerComponent(
    "ReactNativeReduxExample.ProfilePage",
    () => ProfilePage,
    store,
    Provider
  );
};
