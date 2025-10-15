/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon file resolution:
 * - Single icon: use `icon` URL directly
 * - Themed (when `theme === true`):
 *   - Dark:  `darkIcon` URL
 *   - Light: `lightIcon` URL
 */
export type TechStack = {
  /** Unique identifier used for keys and lookups. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
  /** Optional single icon URL (used if `theme` is false or no themed icons provided). */
  icon?: string;
  /** Optional light mode icon URL (used if `theme` is true). */
  lightIcon?: string;
  /** Optional dark mode icon URL (used if `theme` is true). */
  darkIcon?: string;
};
