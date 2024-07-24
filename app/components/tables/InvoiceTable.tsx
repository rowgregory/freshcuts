import { formatDateWithTimezone } from '@/utils/dateFunctions';
import React from "react";

const InvoiceTable = ({ invoices }: any) => {
  return (
    <table className="w-full max-w-screen-xl">
      <thead className="whitespace-nowrap px-4 pb-4 pt-2">
        <tr className="">
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs -mx-1.5 -my-1 w-fit px-1.5 py-1 flex flex-nowrap items-center gap-2">
              EMAIL
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              DATE
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              ORDERS/TYPE
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              AMOUNT
            </div>
          </th>
          <th className="px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none">
            <div className="text-xs flex flex-nowrap items-center gap-2">
              STATUS
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {invoices
          ?.map((invoice: any, i: number) => (
            <tr
              key={i}
              className="z-1 h-[3.25rem] group [&_td]:focus-within:bg-zinc-100 [&_td]:hover:bg-zinc-100 relative"
            >
              <td className="px-2">
                <div className="m-0 w-full p-0 decoration-inherit hover:text-inherit hover:decoration-inherit !flex h-[3.25rem] items-center px-4 whitespace-nowrap">
                  <div className="overflow-hidden">
                    <span className="text-xs font-Matter-Regular truncate">
                      {invoice?.email}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-xs font-Matter-Regular items-center px-4 whitespace-nowrap">
                  {formatDateWithTimezone(invoice?.createdAt)}
                </p>
              </td>
              <td>
                <p className="text-xs font-Matter-Regular items-center px-4 whitespace-nowrap">
                  {invoice.orderType}
                </p>
              </td>
              <td>
                <p className="text-xs font-semibold font-Matter-Regular items-center px-4 whitespace-nowrap">
                  ${invoice.amount}
                </p>
              </td>
              <td>
                <p
                  className={`text-xs rounded-md items-center px-4 py-2 whitespace-nowrap w-fit ${invoice.status === "Cancelled"
                    ? "bg-red-100 text-red-500"
                    : invoice.status === "Pending"
                      ? "bg-orange-100 text-orange-500"
                      : "bg-green-100 text-green-500"
                    }`}
                >
                  {invoice.status}
                </p>
              </td>
            </tr>
          ))
          .reverse()}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
