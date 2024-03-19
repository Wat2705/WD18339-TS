
'use client';

import { Footer } from 'flowbite-react';

function Component() {
  return (
    <Footer container>
      <Footer.Copyright by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link>About</Footer.Link>
        <Footer.Link>Privacy Policy</Footer.Link>
        <Footer.Link>Licensing</Footer.Link>
        <Footer.Link>Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default Component;