import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>Logo</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>Search</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Toggle
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
