-- CreateTable
CREATE TABLE "Manga" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "chapter" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manga_userId_key" ON "Manga"("userId");

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
