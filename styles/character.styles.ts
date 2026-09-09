import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 55,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: theme.spacing.xl,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  backButtonText: {
    color: theme.colors.gold,
    fontSize: 32,
    lineHeight: 36,
    marginTop: -3,
  },

  headerContent: {
    flex: 1,
  },

  headerLabel: {
    color: theme.colors.primaryLight,
    fontSize: theme.fontSize.xs,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: theme.spacing.xs,
  },

  name: {
    color: theme.colors.gold,
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 38,
  },

  classRace: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.md,
    marginTop: theme.spacing.xs,
  },

  card: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },

  sectionTitle: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.lg,
    fontWeight: "800",
    marginBottom: theme.spacing.sm,
  },

  sectionText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.md,
    lineHeight: 25,
  },

  secretCard: {
    backgroundColor: "#161225",
    borderWidth: 1,
    borderColor: theme.colors.primaryDark,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },

  adventureCard: {
    backgroundColor: "#19150D",
    borderWidth: 1,
    borderColor: theme.colors.goldDark,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },

  adventureTitle: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.lg,
    fontWeight: "800",
    marginBottom: theme.spacing.sm,
  },

  button: {
    backgroundColor: theme.colors.primary,
    minHeight: 56,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: theme.colors.primaryLight,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 6,
  },

  buttonText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: "800",
  },

  errorContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
  },

  errorTitle: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.xl,
    fontWeight: "800",
    marginBottom: theme.spacing.sm,
  },

  errorText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.md,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
  },
});
