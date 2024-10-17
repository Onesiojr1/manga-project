'use client';
import Link from "next/link";
import ClickButton from "./ClickButton";
import InputBox from "./InputBox";
import { Manga } from "../lib/types";
import { FormInputs } from "../app/manga/add/page";


interface MangaFormProps {
  manga?: Manga;
  onSubmit: () => void;
  data: React.MutableRefObject<FormInputs>
}

export default function MangaForm(props: MangaFormProps) {
  return (
    <div className="mt-20 lg:mt-40 overflow-hidden shadow">
      <div className="p-2 flex flex-col gap-6">
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Nome do manga"
          required
          defaultValue={props.manga?.name ?? ''}
          onChange={(e) => (props.data.current.name = e.target.value)}
        />
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Descrição do manga"
          required
          defaultValue={props.manga?.description ?? ''}
          onChange={(e) => (props.data.current.description = e.target.value)}
        />
        <InputBox
          name="image"
          labelText="Url da imagem do manga"
          required
          defaultValue={props.manga?.image ?? ''}
          onChange={(e) => (props.data.current.image = e.target.value)}
        />
        <InputBox
          name="Chapter"
          labelText="Chapter"
          type="number"
          required
          defaultValue={props.manga?.chapter ?? ''}
          onChange={(e) => (props.data.current.chapter = parseInt(e.target.value))}
        />
        <div className="flex justify-center items-center gap-2">
          <ClickButton onClick={props.onSubmit}>Submit</ClickButton>
          <Link className="text-2xl" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
