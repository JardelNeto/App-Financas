import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import { AuthContext } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0F4FF",
        }}
      >
        <ActivityIndicator size="large" color="#121212" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
