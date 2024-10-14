import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NoLoggedHome from "../components/NoLoggedHome";
import MangaPage from "../components/MangaPage";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {!session ? <NoLoggedHome /> : <MangaPage />}
    </main>
  );
}
