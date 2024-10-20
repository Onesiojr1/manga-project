import Footer from "../components/Footer";
import Header from "../components/Header";
import Providers from "../components/Providers";

export const metadata = {
  title: "MangaZone",
  description: "Um site para salvar seu manga!",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className="h-full">
        <Providers>
          <Header />
          {props.children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
