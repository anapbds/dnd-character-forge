import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { styles } from "../styles/character.styles";
import { Character } from "../types/Character";

export default function Personagem() {
  const { personagem } = useLocalSearchParams<{
    personagem: string;
  }>();

  let character: Character;

  try {
    character = JSON.parse(personagem);
  } catch {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Ops! 😕</Text>

        <Text style={styles.errorText}>
          Não foi possível carregar o personagem.
        </Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CABEÇALHO */}

        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>‹</Text>
          </Pressable>

          <View style={styles.headerContent}>
            <Text style={styles.headerLabel}>SEU NOVO AVENTUREIRO</Text>

            <Text style={styles.name}>{character.nome}</Text>

            <Text style={styles.classRace}>
              {character.raca} • {character.classe}
            </Text>
          </View>
        </View>

        {/* PERSONALIDADE */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>✦ Personalidade</Text>

          <Text style={styles.sectionText}>{character.personalidade}</Text>
        </View>

        {/* APARÊNCIA */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>◈ Aparência</Text>

          <Text style={styles.sectionText}>{character.aparencia}</Text>
        </View>

        {/* HISTÓRIA */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📖 História</Text>

          <Text style={styles.sectionText}>{character.historia}</Text>
        </View>

        {/* MOTIVAÇÃO */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>⚔️ Motivação</Text>

          <Text style={styles.sectionText}>{character.motivacao}</Text>
        </View>

        {/* MEDO */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>☠️ Medo</Text>

          <Text style={styles.sectionText}>{character.medo}</Text>
        </View>

        {/* SEGREDO */}

        <View style={styles.secretCard}>
          <Text style={styles.sectionTitle}>🔮 Segredo</Text>

          <Text style={styles.sectionText}>{character.segredo}</Text>
        </View>

        {/* GANCHO */}

        <View style={styles.adventureCard}>
          <Text style={styles.adventureTitle}>✨ Gancho para aventura</Text>

          <Text style={styles.sectionText}>{character.ganchoAventura}</Text>
        </View>

        {/* NOVO PERSONAGEM */}

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/criar-personagem")}
        >
          <Text style={styles.buttonText}>🎲 Criar outro personagem</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
