-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "orderType" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);
