'use client'
import { Manga } from "../lib/types";
import ClickButton from "./ClickButton";
import Image from "next/image";

interface MangaComponentProps {
  manga: Manga;
}

export default function MangaComponent(props: MangaComponentProps) {
  return (
    <div className="flex flex-row justify-between items-center p-6 border border-slate-400 rounded-xl bg-gray-950">
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
        <Image
          width={100}
          height={100}
          alt={props.manga.name}
          src={props.manga.image}
        />
        <span className="text-4xl">
          {props.manga.name}
        </span>
      </div>
      <div className="flex gap-4 items-center font-3xl">
        <ClickButton
          variant={"tertiary"}
          size={"small"}
          onClick={() => console.log("menos")}
        >
          <span className="text-3xl">-</span>
        </ClickButton>
        <span className="text-3xl">{props.manga.chapter}</span>
        <ClickButton size={"small"} onClick={() => console.log("mais")}>
          <span className="text-3xl">+</span>
        </ClickButton>
      </div>
    </div>
  );
}
