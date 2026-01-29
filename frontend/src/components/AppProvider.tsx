import type { ReactNode } from "react";
import { Layout } from 'components/Layout'; // Import the Layout component

interface Props {
  children: ReactNode;
}

/**
 * A provider wrapping the whole app.
 *
 * You can add multiple providers here by nesting them,
 * and they will all be applied to the app.
 *
 * Note: ThemeProvider is already included in AppWrapper.tsx and does not need to be added here.
 */
export const AppProvider = ({ children }: Props) => {
  // Wrap children with the Layout component
  return <Layout>{children}</Layout>;
};
