/**
 * Shared domain types for the Valueages site.
 * Import from here when a type is used across 2+ components.
 */
import type React from "react";

/** A section anchor ID — single source of truth for nav + scroll targets */
export type SectionId =
  | "hero"
  | "about"
  | "partnership"
  | "gsi-strategy"
  | "gcc-strategy"
  | "value-selling"
  | "product-expansion"
  | "cxo"
  | "services"
  | "gtm-console"
  | "clients"
  | "who-should-contact"
  | "why-us"
  | "contact";

/** Navigation link entry used in Navbar */
export interface NavLink {
  name: string;
  href: string;
  id: SectionId;
}

/** Stat/metric card display item used in TrustBar and stat grids */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  subLabel?: string;
}

/** Lucide-compatible icon component type */
export type LucideIcon = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;
