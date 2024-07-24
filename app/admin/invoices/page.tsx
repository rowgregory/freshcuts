"use client";

import InvoiceTable from "@/app/components/tables/InvoiceTable";
import { useGetInvoicesQuery } from "@/redux/services/invoiceApi";
import { RootState, useAppSelector } from "@/redux/store";
import useForm from "@/utils/useForm";
import {
  faBell,
  faMagnifyingGlass,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Invoices = () => {
  const { inputs, handleInput } = useForm(["email"]);
  useGetInvoicesQuery();
  const invoice = useAppSelector((state: RootState) => state.invoice);

  const filteredInvoices = invoice?.invoices?.filter((obj: any) =>
    obj?.email?.toLowerCase().includes(inputs.email.toLowerCase())
  );

  return (
    <div className="p-3 md:p-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold md:pl-6">Invoices</h1>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-slate-500"
          />
          <FontAwesomeIcon icon={faBell} className="text-slate-500" />
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between mb-10 gap-3">
        <div className="bg-gray-50 md:ml-6 px-4 py-3 rounded-lg w-full md:w-fit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            name="email"
            onChange={handleInput}
            alt="Invoice"
            className="bg-transparent ml-2"
            placeholder="Search invoices"
          />
        </div>
        <Link
          href={{ pathname: "/admin/invoice", query: { isEditMode: false } }}
          className="bg-lime-400 px-5 py-2.5 rounded-md font-semibold text-sm w-full md:w-fit whitespace-nowrap h-12 flex items-center"
        >
          <FontAwesomeIcon
            icon={faNewspaper}
            className="text-zinc-800 mr-2 fa-sm"
          />
          Create Invoice
        </Link>
      </div>
      <div className="w-full mt-3 overflow-x-scroll md:overflow-auto">
        <InvoiceTable invoices={filteredInvoices} />
      </div>
    </div>
  );
};

export default Invoices;
