import { getServerSession } from "next-auth";
import NoLoggedHome from "../components/NoLoggedHome";
import MangaPage from "../components/MangaPage";
import { authOptions } from "../lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {!session ? <NoLoggedHome /> : <MangaPage />}
    </main>
  );
}
