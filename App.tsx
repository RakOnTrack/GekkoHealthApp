import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useHealthData from "./hooks/useHealthData";

export default function App() {
  const { steps, distance, flights } = useHealthData();

  console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

  return (
    <>
      <View style={styles.container}>
        <Text>Steps: {steps.toString()}</Text>
        <Text>Distance: {(distance / 1000).toFixed(2)}</Text>
        <Text>Flights: {flights.toString()}</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
