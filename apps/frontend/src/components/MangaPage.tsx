'use client'
import ClickButton from "./ClickButton";
import Container from "./Container";
import LinkButton from "./LinkButton";
import MangaComponent from "./MangaComponent";


export default function MangaPage() {
  return (
    <Container>
      <div className="mt-40">
        <div className="flex justify-end"><LinkButton href={"/"}>Adicionar um Manga</LinkButton></div>
        <div className="p-2 flex flex-col gap-6">
          <MangaComponent />
          <MangaComponent />
          <MangaComponent />
          <MangaComponent />
          <MangaComponent />
        </div>
      </div>
    </Container>
  )
}