import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";

import { gerarPersonagem } from "../services/characterService";
import { theme } from "../constants/theme";
import { styles } from "../styles/create-character.styles";

const RACAS = [
  "Humano",
  "Elfo",
  "Anão",
  "Halfling",
  "Meio-Elfo",
  "Tiefling",
  "Orc",
];

const CLASSES = [
  "Bárbaro",
  "Bardo",
  "Bruxo",
  "Clérigo",
  "Druida",
  "Feiticeiro",
  "Guerreiro",
  "Ladino",
  "Mago",
  "Monge",
  "Paladino",
  "Patrulheiro",
];

const ESTILOS = [
  "Épico",
  "Sombrio",
  "Misterioso",
  "Trágico",
  "Divertido",
  "Aventureiro",
];

export default function CriarPersonagem() {
  const [raca, setRaca] = useState("");
  const [classe, setClasse] = useState("");
  const [estilo, setEstilo] = useState("");
  const [ideia, setIdeia] = useState("");

  const [racaAberta, setRacaAberta] = useState(false);
  const [classeAberta, setClasseAberta] = useState(false);
  const [estiloAberto, setEstiloAberto] = useState(false);

  const [carregando, setCarregando] = useState(false);

  async function handleGerarPersonagem() {
    if (!raca || !classe || !estilo || carregando) {
      return;
    }

    try {
      setCarregando(true);

      const personagem = await gerarPersonagem({
        raca,
        classe,
        estilo,
        ideia,
      });

      router.push({
        pathname: "/personagem",
        params: {
          personagem: JSON.stringify(personagem),
        },
      });
    } catch (error) {
      console.error("Erro ao gerar personagem:", error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
            disabled={carregando}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </Pressable>

          <View style={styles.headerText}>
            <Text style={styles.title}>Criar personagem</Text>

            <Text style={styles.subtitle}>
              Dê vida ao seu próximo aventureiro
            </Text>
          </View>
        </View>

        <View style={styles.form}>
          {/* RAÇA */}
          <View style={styles.field}>
            <Text style={styles.label}>Raça</Text>

            <Pressable
              style={styles.select}
              onPress={() => {
                setRacaAberta(!racaAberta);
                setClasseAberta(false);
                setEstiloAberto(false);
              }}
              disabled={carregando}
            >
              <Text style={[styles.selectText, !raca && styles.placeholder]}>
                {raca || "Escolha uma raça"}
              </Text>

              <Text style={styles.arrow}>{racaAberta ? "▲" : "▼"}</Text>
            </Pressable>

            {racaAberta && (
              <View style={styles.options}>
                {RACAS.map((item) => (
                  <Pressable
                    key={item}
                    style={styles.option}
                    onPress={() => {
                      setRaca(item);
                      setRacaAberta(false);
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* CLASSE */}
          <View style={styles.field}>
            <Text style={styles.label}>Classe</Text>

            <Pressable
              style={styles.select}
              onPress={() => {
                setClasseAberta(!classeAberta);
                setRacaAberta(false);
                setEstiloAberto(false);
              }}
              disabled={carregando}
            >
              <Text style={[styles.selectText, !classe && styles.placeholder]}>
                {classe || "Escolha uma classe"}
              </Text>

              <Text style={styles.arrow}>{classeAberta ? "▲" : "▼"}</Text>
            </Pressable>

            {classeAberta && (
              <View style={styles.options}>
                {CLASSES.map((item) => (
                  <Pressable
                    key={item}
                    style={styles.option}
                    onPress={() => {
                      setClasse(item);
                      setClasseAberta(false);
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* ESTILO */}
          <View style={styles.field}>
            <Text style={styles.label}>Estilo da história</Text>

            <Pressable
              style={styles.select}
              onPress={() => {
                setEstiloAberto(!estiloAberto);
                setRacaAberta(false);
                setClasseAberta(false);
              }}
              disabled={carregando}
            >
              <Text style={[styles.selectText, !estilo && styles.placeholder]}>
                {estilo || "Escolha um estilo"}
              </Text>

              <Text style={styles.arrow}>{estiloAberto ? "▲" : "▼"}</Text>
            </Pressable>

            {estiloAberto && (
              <View style={styles.options}>
                {ESTILOS.map((item) => (
                  <Pressable
                    key={item}
                    style={styles.option}
                    onPress={() => {
                      setEstilo(item);
                      setEstiloAberto(false);
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* IDEIA */}
          <View style={styles.field}>
            <Text style={styles.label}>Tem alguma ideia?</Text>

            <Text style={styles.hint}>
              Opcional — conte algo que você gostaria de ver no personagem.
            </Text>

            <TextInput
              style={styles.textArea}
              value={ideia}
              onChangeText={setIdeia}
              placeholder="Ex.: perdeu a família para um dragão..."
              placeholderTextColor={theme.colors.textMuted}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              editable={!carregando}
            />
          </View>

          {/* BOTÃO */}
          <Pressable
            style={({ pressed }) => [
              styles.generateButton,
              (!raca || !classe || !estilo) && styles.generateButtonDisabled,
              pressed && styles.generateButtonPressed,
            ]}
            onPress={handleGerarPersonagem}
            disabled={!raca || !classe || !estilo || carregando}
          >
            {carregando ? (
              <View style={styles.loadingContent}>
                <ActivityIndicator size="small" color={theme.colors.text} />

                <Text style={styles.generateButtonText}>
                  Criando seu personagem...
                </Text>
              </View>
            ) : (
              <Text style={styles.generateButtonText}>✨ Gerar personagem</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
