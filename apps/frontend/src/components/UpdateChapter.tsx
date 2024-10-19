import ClickButton from "./ClickButton";

interface UpdateChapterProps {
  chapter: number;
  addChapter: () => void;
  substractChapter: () => void;
}

export default function UpdateChapter(props: UpdateChapterProps) {
  return (
    <div className="flex gap-4 items-center font-3xl">
      <ClickButton
        variant={"tertiary"}
        size={"small"}
        onClick={props.substractChapter}
      >
        <span className="text-3xl">-</span>
      </ClickButton>
      <span className="text-3xl">{props.chapter}</span>
      <ClickButton size={"small"} onClick={props.addChapter}>
        <span className="text-3xl">+</span>
      </ClickButton>
    </div>
  );
}
