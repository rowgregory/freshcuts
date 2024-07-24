"use client";

import React from "react";
import { RootState, useAppSelector } from "../../../redux/store";
import { useGetMyInvoicesQuery } from "../../../redux/services/invoiceApi";
import InvoiceTable from "@/app/components/tables/InvoiceTable";

const Invoices = () => {
  const invoice = useAppSelector((state: RootState) => state.invoice);
  const auth = useAppSelector((state: RootState) => state.auth);
  useGetMyInvoicesQuery(auth.email);

  return (
    <div className="p-3 md:p-10">
      <h1 className="text-xl font-bold pl-6">Invoices</h1>
      <div className="w-full mt-3 overflow-x-scroll md:overflow-auto">
        <InvoiceTable invoices={invoice.invoices} />
      </div>
    </div>
  );
};

export default Invoices;
