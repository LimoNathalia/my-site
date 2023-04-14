import Link from 'next/link';

import { Container } from './Container';

function NavLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-primary">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-black pb-16 pt-10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-black">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <p className="text-sm text-black">&copy; {new Date().getFullYear()} Nathalia Limo.</p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
