import { initialTickets } from "@/data";
import React from "react";

type TicketpageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketpageProps) => {
  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(params.ticketId)
  );

  if (!ticket) {
    return (
      <div>
        <h2 className="text-lg">Ticket not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket?.title}</h2>
      <h2 className="text-sm">{ticket?.description}</h2>
      {params.ticketId}
    </div>
  );
};

export default TicketPage;
