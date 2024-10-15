'use client'
import { Manga } from "../lib/types";
import Container from "./Container";
import LinkButton from "./LinkButton";
import MangaComponent from "./MangaComponent";

const mangaList :Manga[] = [
  {
    id: "1",
    name: "One piece",
    description: "Manga 1 description",
    image: "https://m.media-amazon.com/images/I/91NxYvUNf6L._AC_UF1000,1000_QL80_.jpg",
    chapter: 1011,
    userId: "1",
  },
  {
    id: "2",
    name: "Naruto",
    description: "Manga 2 description",
    image: "https://m.media-amazon.com/images/I/91XCgBHoO8L._AC_UF1000,1000_QL80_.jpg",
    chapter: 267,
    userId: "1",
  },
  {
    id: "3",
    name: "Solo leveling",
    description: "Manga 3 description",
    image: "https://m.media-amazon.com/images/I/816hywlmu-L._AC_UF1000,1000_QL80_.jpg",
    chapter: 3,
    userId: "1",
  },
  {
    id: "4",
    name: "Manga 4",
    description: "Manga 4 description",
    image: "https://preview.redd.it/eleceed-what-would-you-guys-think-about-it-having-an-anime-v0-qwg8us9v4wpb1.jpg?auto=webp&s=2bdba462ca5b4f532870ca076347e98b5c23f994",
    chapter: 4,
    userId: "1",
  },
]

export default function MangaPage() {
  return (
    <Container>
      <div className="mt-40">
        <div className="flex justify-end"><LinkButton href={"/manga/add"}>Adicionar um Manga</LinkButton></div>
        <div className="p-2 flex flex-col gap-6">
          {mangaList.map(manga => <MangaComponent key={manga.id} manga={manga} />)}
        </div>
      </div>
    </Container>
  )
}