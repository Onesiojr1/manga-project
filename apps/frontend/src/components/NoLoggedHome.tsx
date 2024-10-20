import LinkButton from "./LinkButton";
import Container from "./Container";
import Hero, { HeroSubtitle, HeroTitle } from "./Hero";
import Image from "next/image";

export default function NoLoggedHome() {
  return (
    <div>
      <main className="pt-20 bg-background-dark">
        <Container>
          <Hero>
            <HeroTitle>A melhor forma de salvar<br /> o capitulo de seu manga favorito!</HeroTitle>
            <HeroSubtitle>Crie sua conta e comece agora!</HeroSubtitle>
            <LinkButton href="/signup" size={'large'}>Cadastrar</LinkButton>
            <Image src="img/hero.png" alt="Hero image" className="mt-20"/>
          </Hero>
        </Container>
      </main>
    </div>
  );
}
