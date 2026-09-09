import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },

  content: {
    width: "100%",
    alignItems: "center",
  },

  dice: {
    fontSize: 64,
    marginBottom: theme.spacing.sm,
  },

  title: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.title,
    fontWeight: "900",
    letterSpacing: 8,
  },

  subtitle: {
    color: theme.colors.primaryLight,
    fontSize: theme.fontSize.lg,
    fontWeight: "700",
    letterSpacing: 4,
    marginTop: theme.spacing.xs,
  },

  divider: {
    width: 100,
    height: 2,
    backgroundColor: theme.colors.gold,
    marginVertical: theme.spacing.lg,
  },

  description: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.xl,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 38,
  },

  introduction: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.md,
    textAlign: "center",
    lineHeight: 24,
    marginTop: theme.spacing.lg,
    maxWidth: 330,
  },

  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderRadius: theme.borderRadius.md,
    marginTop: 35,

    shadowColor: theme.colors.primaryLight,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 6,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: "700",
  },

  footer: {
    position: "absolute",
    bottom: 25,
    color: theme.colors.textMuted,
    fontSize: theme.fontSize.xs,
  },
});
