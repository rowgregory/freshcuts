"use client";

import {
  useCreateInvoiceMutation,
  useGetCustomersQuery,
} from "@/redux/services/invoiceApi";
import { RootState, useAppSelector } from "@/redux/store";
import useForm from "@/utils/useForm";
import { useRouter } from 'next/navigation';
import React from "react";

const Invoice = () => {
  const navigate = useRouter();
  useGetCustomersQuery();
  const [createInvoice] = useCreateInvoiceMutation();
  const invoice = useAppSelector((state: RootState) => state.invoice);

  const { inputs, handleInput } = useForm([
    "email",
    "orderType",
    "amount",
  ]);

  const handleCreateInvoice = async (e: any) => {
    e.preventDefault();
    await createInvoice({ ...inputs, status: 'Pending' })
      .unwrap()
      .then(() => navigate.push('/admin/invoices'))
      .catch((err: any) => console.error(err));
  };

  return (
    <div className="pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3 max-w-screen-sm">
      <div className="font-Matter-Medium text-xl mb-3.5">Create invoice</div>
      <form className="flex flex-col gap-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">
            Customer
          </label>
          <select
            name="email"
            onChange={handleInput}
            className="px-3 py-1 border-[1px] border-gray-300 h-10 rounded-lg focus:outline-none"
          >
            <option value="">
              Choose One
            </option>
            {invoice.customers?.map((obj: any, i: number) => (
              <option value={obj.email} key={i}>
                {obj.email}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="orderType" className="text-sm">
            Order Type
          </label>
          <select
            name="orderType"
            onChange={handleInput}
            className="px-3 py-1 border-[1px] border-gray-300 h-10 rounded-lg focus:outline-none"
          >
            <option value="">Choose one</option>
            <option value="landscape-design">Landscape Design</option>
            <option value="paving">Paving</option>
            <option value="hardscaping">Hardscaping</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm">
            Amount
          </label>
          <input
            name="amount"
            type='number'
            onChange={handleInput}
            alt=""
            className="px-3 py-1 border-[1px] border-gray-300 h-10 rounded-lg focus:outline-none"
          />
        </div>
        <button onClick={handleCreateInvoice} className='py-3 px-8 bg-lime-500 font-semibold text-white'>Create Invoice</button>
      </form>
    </div>
  );
};

export default Invoice;
