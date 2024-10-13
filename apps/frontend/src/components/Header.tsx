import Link from "next/link";
import Container from "./Container";
import Logo from "./icons/logo";

import SignInButton from "./SignInButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-20">
        <Link className="flex items-center text-3xl" href="/">
          <Logo color="#fff" className="w-16 h-16 mr-4 text-white" />Home
        </Link>
        <SignInButton />
      </Container>
    </header>
  );
}