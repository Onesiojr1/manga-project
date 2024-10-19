"use client";
import { useState } from "react";
import { Backend_URL } from "../lib/Constants";
import { Manga } from "../lib/types";
import Image from "next/image";
import Link from "next/link";
import UpdateChapter from "./UpdateChapter";

interface MangaComponentProps {
  manga: Manga;
}

export default function MangaComponent(props: MangaComponentProps) {
  const [chapter, setChapter] = useState(props.manga.chapter);
  const addChapter = () => {
    fetch(Backend_URL + `/manga/chapter/add/${props.manga.id}`, {
      method: "PUT",
    });
    setChapter(chapter + 1);
  };
  
  const substractChapter =  () => {
    if (chapter <= 0) return;
    fetch(Backend_URL + `/manga/chapter/subtract/${props.manga.id}`, {
      method: "PUT",
    });
    setChapter(chapter - 1);
  };
  
  return (
    <div className="flex flex-row justify-between items-center p-6 border border-slate-400 rounded-xl bg-gray-950">
      <Link href={`/manga/${props.manga.id}`}>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
          <Image
            width={100}
            height={100}
            alt={props.manga.name}
            src={props.manga.image}
          />
          <span className="text-4xl">{props.manga.name}</span>
        </div>
      </Link>
      <UpdateChapter addChapter={addChapter} substractChapter={substractChapter} chapter={chapter} />
    </div>
  );
}
