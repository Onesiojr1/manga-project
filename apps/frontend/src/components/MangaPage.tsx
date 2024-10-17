import { getServerSession } from "next-auth";
import { Backend_URL } from "../lib/Constants";
import { Manga } from "../lib/types";
import Container from "./Container";
import LinkButton from "./LinkButton";
import MangaComponent from "./MangaComponent";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export default async function MangaPage() {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    Backend_URL + `/manga/user/${session?.user.id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${session?.backendTokens.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const mangaList : Manga[] = await response.json();

  return (
    <Container>
      <div className="mt-40">
        <div className="flex justify-end">
          <LinkButton href={"/manga/add"}>Adicionar um Manga</LinkButton>
        </div>
        <div className="p-2 flex flex-col gap-6">
          {mangaList.length === 0 ? "Nenhum manga encontrado" : mangaList.map((manga) => (
            <MangaComponent key={manga.id} manga={manga} />
          ))}
        </div>
      </div>
    </Container>
  );
}