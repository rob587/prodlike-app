import prodotti from "@/data/prodotti";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenitore}>
      <Text style={styles.titoloPagina}>Catalogo</Text>
      <FlatList
        data={prodotti}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() =>
              router.push(
                `/dettaglio?id=${item.id}&nome=${item.nome}&prezzo=${item.prezzo}&categoria=${item.categoria}`,
              )
            }
          >
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <View style={styles.badgeCategoria}>
                <Text style={styles.categoriaText}>{item.categoria}</Text>
              </View>
            </View>
            <Text style={styles.prezzo}>{item.prezzo}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  titoloPagina: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 20,
  },
  lista: {
    gap: 12,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  cardPressed: {
    opacity: 0.7,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  badgeCategoria: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  categoriaText: {
    fontSize: 12,
    color: "#4f46e5",
    fontWeight: "500",
  },
  prezzo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4f46e5",
  },
});
