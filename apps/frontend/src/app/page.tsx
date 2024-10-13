import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NoLoggedHome from "../components/NoLoggedHome";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {!session ? <NoLoggedHome /> : <h1> opa</h1>}
    </main>
  );
}