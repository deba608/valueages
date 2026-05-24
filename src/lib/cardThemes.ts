/**
 * Shared card colour-theme tokens used by Services and WhyChooseUs.
 * Single source of truth — change here, both sections update.
 */
export const cardThemes = {
  teal: {
    iconBg:
      "bg-brand-teal/5 text-brand-teal border border-brand-teal/10 group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(16,155,130,0.4)]",
    badge:
      "bg-brand-teal/5 text-brand-teal border border-brand-teal/10 group-hover:bg-brand-teal/10",
    arrow: "group-hover:text-brand-teal",
    glowBase: "169 81 34",
    glowColors: ["#0f766e", "#109B82", "#5D9F9B"],
  },
  green: {
    iconBg:
      "bg-brand-green/5 text-brand-green border border-brand-green/10 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(79,143,123,0.4)]",
    badge:
      "bg-brand-green/5 text-brand-green border border-brand-green/10 group-hover:bg-brand-green/10",
    arrow: "group-hover:text-brand-green",
    glowBase: "162 29 43",
    glowColors: ["#4F8F7B", "#5D9F9B", "#109B82"],
  },
  rust: {
    iconBg:
      "bg-brand-rust/5 text-brand-rust border border-brand-rust/10 group-hover:bg-brand-rust group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(184,90,58,0.4)]",
    badge:
      "bg-brand-rust/5 text-brand-rust border border-brand-rust/10 group-hover:bg-brand-rust/10",
    arrow: "group-hover:text-brand-rust",
    glowBase: "16 52 47",
    glowColors: ["#B85A3A", "#C99A5A", "#B85A3A"],
  },
  tan: {
    iconBg:
      "bg-brand-tan/5 text-brand-tan border border-brand-tan/10 group-hover:bg-brand-tan group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(201,154,90,0.4)]",
    badge:
      "bg-brand-tan/5 text-brand-tan border border-brand-tan/10 group-hover:bg-brand-tan/10",
    arrow: "group-hover:text-brand-tan",
    glowBase: "35 52 57",
    glowColors: ["#C99A5A", "#5D9F9B", "#109B82"],
  },
};

export type CardThemeKey = keyof typeof cardThemes;
