import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Dettaglio() {
  const { id, nome, prezzo, categoria } = useLocalSearchParams();

  return (
    <View style={styles.contenitore}>
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{categoria}</Text>
        </View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.prezzo}>{prezzo}</Text>
        <View style={styles.divider} />
        <Text style={styles.idText}>ID prodotto: #{id}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        onPress={() => router.back()}
      >
        <Text style={styles.btnTesto}>← Torna indietro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 24,
    paddingTop: 60,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
    marginBottom: 20,
  },
  badge: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 13,
    color: "#4f46e5",
    fontWeight: "500",
  },
  nome: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  prezzo: {
    fontSize: 32,
    fontWeight: "700",
    color: "#4f46e5",
    marginBottom: 20,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#e0e0e0",
    marginBottom: 16,
  },
  idText: {
    fontSize: 13,
    color: "#aaa",
  },
  btn: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  btnPressed: {
    opacity: 0.7,
  },
  btnTesto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
