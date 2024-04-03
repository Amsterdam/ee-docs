import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';

export default function Navbar(): JSX.Element {
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
