export type User = {
  id: string;
  name: string;
  email: string;
};

export type Manga = {
  id: string;
  name: string
  description: string;
  image: string;
  chapter: number;
  userId: string;
}
