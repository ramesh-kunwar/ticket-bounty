import { initialTickets } from "@/data";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => {
        return (
          <div key={ticket.id} className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{ticket.title}</h2>
            <Link href={`/tickets/${ticket.id}`} className="text-sm underline">
              View
            </Link>
            <p>{ticket.description}</p>
            <p className="text-gray-500">Status: {ticket.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
