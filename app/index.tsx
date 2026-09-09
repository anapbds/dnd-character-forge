import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { styles } from "../styles/home.styles";

export default function Index() {
  function criarPersonagem() {
    router.push("/criar-personagem");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dice}>🎲</Text>

        <Text style={styles.title}>D&D</Text>

        <Text style={styles.subtitle}>CHARACTER FORGE</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Sua história.{"\n"}
          Sua lenda.{"\n"}
          Seu personagem.
        </Text>

        <Text style={styles.introduction}>
          Crie um personagem único para sua próxima aventura usando o poder da
          inteligência artificial.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={criarPersonagem}
        >
          <Text style={styles.buttonText}>✨ Criar meu personagem</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>Powered by Gemini AI</Text>
    </View>
  );
}
