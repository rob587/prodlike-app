import { StyleSheet, Text, View } from "react-native";

export default function preferiti() {
  return (
    <View style={styles.contenitore}>
      <Text>Nessun preferito selezionato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
