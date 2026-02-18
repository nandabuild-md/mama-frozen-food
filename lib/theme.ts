/**
 * Ramadan theme flag.
 * Set NEXT_PUBLIC_THEME=ramadan in .env.local to enable seasonal decorations.
 * After Ramadan, remove or change the env var in Vercel → redeploy → ornaments gone.
 */
export const isRamadanTheme =
  process.env.NEXT_PUBLIC_THEME === 'ramadan'
