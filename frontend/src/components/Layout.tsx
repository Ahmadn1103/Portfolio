import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// Basic placeholder Layout component
// It renders the main content passed to it.
// We can add Navbar, Footer, and other common elements here later.
export const Layout = ({ children }: Props) => {
  return (
    <>
      {/* Example: Placeholder for Navbar */}
      {/* <Navbar /> */}

      {/* Main page content */}
      <main className="flex-grow"> {/* Add flex-grow if using flex column layout */}
        {children}
      </main>

      {/* Example: Placeholder for Footer */}
      {/* <Footer /> */}
    </>
  );
};
