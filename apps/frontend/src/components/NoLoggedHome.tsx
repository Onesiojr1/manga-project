import LinkButton from "./LinkButton";
import Container from "./Container";
import Hero, { HeroSubtitle, HeroTitle } from "./Hero";
import Image from "next/image";
import heroImg from "../../public/img/hero.png"

export default function NoLoggedHome() {
  return (
    <div>
      <main className="pt-20 bg-background-dark">
        <Container>
          <Hero>
            <HeroTitle>A melhor forma de salvar<br /> o capitulo de seu manga favorito!</HeroTitle>
            <HeroSubtitle>Crie sua conta e comece agora!</HeroSubtitle>
            <LinkButton href="/signup" size={'large'}>Cadastrar</LinkButton>
            <Image src={heroImg} alt="Hero image" className="mt-20" width={1080} height={1080}/>
          </Hero>
        </Container>
      </main>
    </div>
  );
}
