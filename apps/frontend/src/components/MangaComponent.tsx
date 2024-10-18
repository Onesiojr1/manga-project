"use client";
import { useState } from "react";
import { Backend_URL } from "../lib/Constants";
import { Manga } from "../lib/types";
import ClickButton from "./ClickButton";
import Image from "next/image";

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
    fetch(Backend_URL + `/manga/chapter/subtract/${props.manga.id}`, {
      method: "PUT",
    });
    setChapter(chapter - 1);
  };
  
  return (
    <div className="flex flex-row justify-between items-center p-6 border border-slate-400 rounded-xl bg-gray-950">
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
        <Image
          width={100}
          height={100}
          alt={props.manga.name}
          src={props.manga.image}
        />
        <span className="text-4xl">{props.manga.name}</span>
      </div>
      <div className="flex gap-4 items-center font-3xl">
        <ClickButton
          variant={"tertiary"}
          size={"small"}
          onClick={substractChapter}
        >
          <span className="text-3xl">-</span>
        </ClickButton>
        <span className="text-3xl">{chapter}</span>
        <ClickButton size={"small"} onClick={addChapter}>
          <span className="text-3xl">+</span>
        </ClickButton>
      </div>
    </div>
  );
}
