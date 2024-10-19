"use client";
import { Backend_URL } from "../../../../lib/Constants";
import Container from "../../../../components/Container";
import MangaForm from "../../../../components/MangaForm";
import { useEffect, useRef, useState } from "react";
import { FormInputs } from "../../add/page";
import { Manga } from "../../../../lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function EditMangaPage(props: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [manga, setManga] = useState<Manga>();

  useEffect(() => {
    fetch(Backend_URL + `/manga/${props.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setManga(data);
      });
  }, []);

  const editManga = async () => {
    const res = await fetch(Backend_URL + `/manga/${props.params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: data.current.name == "" ? manga?.name : data.current.name,
        description:
          data.current.description == ""
            ? manga?.description
            : data.current.description,
        image: data.current.image == "" ? manga?.image : data.current.image,
        chapter:
          data.current.chapter == 0 ? manga?.chapter : data.current.chapter,
        userId: session?.user.id ?? manga?.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("manga Edited!");
    console.log({ response });
    router.push("/");
  };

  const data = useRef<FormInputs>({
    name: manga?.name ?? "",
    description: manga?.description ?? "",
    image: manga?.image ?? "",
    chapter: manga?.chapter ?? 0,
  });

  return (
    <Container>
      <MangaForm onSubmit={editManga} manga={manga} data={data} />
    </Container>
  );
}
