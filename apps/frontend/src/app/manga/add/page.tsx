'use client';
import { useRef } from "react";
import Container from "../../../components/Container";
import { useSession } from "next-auth/react";
import MangaForm from "../../../components/MangaForm";
import { useRouter } from "next/navigation";

export type FormInputs = {
  name: string
  description: string;
  image: string;
  chapter: number;
};

export default function AddMangaPage() {
  const router = useRouter()
  const { data: session } = useSession();

  const register = async () => {
    const res = await fetch(process.env.Backend_URL + "/manga", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        description: data.current.description,
        image: data.current.image,
        chapter: data.current.chapter,
        userId: session?.user.id,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("manga added!");
    console.log({ response });
    router.push('/')
  };

  const data = useRef<FormInputs>({
    name: "",
    description: "",
    image: "",
    chapter: 0,
  });

  return (
    <Container>
      <MangaForm onSubmit={register} data={data} />
    </Container>
  );
}
