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
    alignItems: "center",
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

  headerText: {
    flex: 1,
  },

  title: {
    color: theme.colors.gold,
    fontSize: theme.fontSize.xl,
    fontWeight: "800",
  },

  subtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.sm,
    marginTop: theme.spacing.xs,
  },

  form: {
    gap: theme.spacing.lg,
  },

  field: {
    width: "100%",
  },

  label: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: "700",
    marginBottom: theme.spacing.sm,
  },

  hint: {
    color: theme.colors.textMuted,
    fontSize: theme.fontSize.xs,
    marginBottom: theme.spacing.sm,
  },

  select: {
    minHeight: 54,
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
  },

  placeholder: {
    color: theme.colors.textMuted,
  },

  arrow: {
    color: theme.colors.primaryLight,
    fontSize: 12,
  },

  options: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    marginTop: theme.spacing.xs,
    overflow: "hidden",
  },

  option: {
    paddingVertical: 14,
    paddingHorizontal: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  optionText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
  },

  textArea: {
    minHeight: 130,
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
  },

  generateButton: {
    backgroundColor: theme.colors.primary,
    minHeight: 56,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.sm,

    shadowColor: theme.colors.primaryLight,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 6,
  },

  generateButtonDisabled: {
    opacity: 0.4,
  },

  generateButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  generateButtonText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: "800",
  },

  loadingContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
});
