"use client";
import Container from "../../../components/Container";
import { Manga } from "../../../lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Backend_URL } from "../../../lib/Constants";
import ClickButton from "../../../components/ClickButton";
import LinkButton from "../../../components/LinkButton";
import { useRouter } from "next/navigation";
import UpdateChapter from "../../../components/UpdateChapter";

type Props = {
  params: {
    id: string;
  };
};

export default function MangaPage(props: Props) {
  const router = useRouter()
  const [manga, setManga] = useState<Manga>();
  const [chapter, setChapter] = useState(0);

  const addChapter = () => {
    fetch(Backend_URL + `/manga/chapter/add/${props.params.id}`, {
      method: "PUT",
    });
    setChapter(chapter + 1);
  };

  const substractChapter = () => {
    if (chapter <= 0) return;
    fetch(Backend_URL + `/manga/chapter/subtract/${props.params.id}`, {
      method: "PUT",
    });
    setChapter(chapter - 1);
  };

  const deleteManga = () => {
    fetch(Backend_URL + `/manga/${props.params.id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  useEffect(() => {
    fetch(Backend_URL + `/manga/${props.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setManga(data);
        setChapter(data.chapter);
      });
  }, []);

  return (
    <div>
      <Container className="mt-20">
        <div className="flex flex-row p-10 gap-10 w-full">
          <Image
            width={200}
            height={200}
            alt={manga?.name ?? "manga image"}
            src={manga?.image ?? ""}
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row justify-between">
              <span className="text-9xl">{manga?.name}</span>
              <div className="flex flex-col gap-4">
              <LinkButton href={`/manga/edit/${manga?.id}`} size={"medium"}>
                Editar
              </LinkButton>
              <ClickButton
                onClick={deleteManga}
                size={"medium"}
                variant={"tertiary"}
              >
                Excluir
              </ClickButton>
              </div>
            </div>
            <span className="text-3xl text-zinc-500">{manga?.description}</span>
            <UpdateChapter addChapter={addChapter} substractChapter={substractChapter} chapter={chapter} />
          </div>
        </div>
      </Container>
    </div>
  );
}
