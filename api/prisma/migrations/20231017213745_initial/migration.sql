-- CreateTable
CREATE TABLE "Upload" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "deteted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);
