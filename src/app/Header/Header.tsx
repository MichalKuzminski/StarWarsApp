import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar className="backgroundColor: bg-black border-b-4 border-amber-400">
      <NavbarBrand>
        <Link href="/" className="font-bold text-amber-400">
          STAR WARS
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link className="text-white" href="/People">
            Postacie
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/Planets">
            Planety
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/Starships">
            Statki kosmiczne
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
