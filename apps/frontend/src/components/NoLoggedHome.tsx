import LinkButton from "./LinkButton";
import Container from "./Container";
import Hero, { HeroSubtitle, HeroTitle } from "./Hero";

export default function NoLoggedHome() {
  return (
    <div>
      <main className="pt-20">
        <Container>
          <Hero>
            <HeroTitle>A melhor forma de salvar<br /> o capitulo de seu manga favorito!</HeroTitle>
            <HeroSubtitle>Crie sua conta e comece agora!</HeroSubtitle>
            <LinkButton href="/signup" size={'large'}>Cadastrar</LinkButton>
            <img src="img/hero.webp" alt="Hero image" className="mt-20"/>
          </Hero>
        </Container>
      </main>
    </div>
  );
}
