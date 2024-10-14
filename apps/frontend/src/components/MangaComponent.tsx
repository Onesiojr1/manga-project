import ClickButton from "./ClickButton";
import Image from 'next/image'

export default function MangaComponent() {
  return (
    <div className="flex flex-row justify-between items-center p-6 border border-slate-400 rounded-xl bg-gray-950">
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
      <Image
        width={100}
        height={100}
        alt="Picture of the author"
        src={
          "https://preview.redd.it/qwg8us9v4wpb1.jpg?auto=webp&s=103aeeef91f02b5ed0e079ceb80eb38425e419ec"
        }
      />
      <span className="text-4xl">Akuyaku Reijou desu ga, Watashi o Anata no Seidorei ni Shite Kudasai!</span>
      </div>
      <div className="flex gap-4 items-center font-3xl">
        <ClickButton
          variant={"tertiary"}
          size={"small"}
          onClick={() => console.log("menos")}
        >
          <span className="text-3xl">-</span>
        </ClickButton>
        <span className="text-3xl">20</span>
        <ClickButton size={"small"} onClick={() => console.log("mais")}>
          <span className="text-3xl">+</span>
        </ClickButton>
      </div>
    </div>
  );
}
