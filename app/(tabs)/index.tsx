import prodotti from "@/data/prodotti";
import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={prodotti}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="flex-row items-center justify-between p-4 mb-3 rounded-xl bg-gray-100"
            onPress={() =>
              router.push(
                `/dettaglio?id=${item.id}&nome=${item.nome}&prezzo=${item.prezzo}`,
              )
            }
          >
            <Text className="text-lg font-bold">{item.nome}</Text>
            <Text className="text-base text-indigo-600">{item.prezzo}</Text>
            <Text className="text-sm text-gray-500">{item.categoria}</Text>
            <Text></Text>
          </Pressable>
        )}
      ></FlatList>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
