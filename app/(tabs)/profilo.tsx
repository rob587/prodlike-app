import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.contenitore}>
        <View style={styles.box}>
          <View style={styles.boxName}>
            <Text style={styles.iniziali}>RC</Text>
          </View>
          <Text style={styles.mainNome}>Roberto Cammarata</Text>
          <Text style={styles.subName}>Junior Frontend Developer</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    borderRadius: 15,
    height: 200,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },

  boxName: {
    borderRadius: 28,
    borderColor: "#818cf8",
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "#818cf8",
  },

  iniziali: {
    color: "#1e1b4b",
    fontWeight: "500",
    fontSize: 16,
  },

  mainNome: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },

  subName: {
    color: "#9bb4fc",
    margin: 5,
  },
});
