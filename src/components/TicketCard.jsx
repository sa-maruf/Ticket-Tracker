// src/components/TicketCard.js

import React from 'react';
import { toast } from 'react-toastify';

const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Critical': return 'text-red-700 bg-red-100';
        case 'High': return 'text-yellow-700 bg-yellow-100';
        case 'Medium': return 'text-blue-700 bg-blue-100';
        case 'Low': return 'text-green-700 bg-green-100';
        default: return 'text-gray-700 bg-gray-100';
    }
};

const TicketCard = ({ ticket, onAdd, isInProgress }) => {
    const handleCardClick = () => {
        if (isInProgress) {
            toast.warn(`Ticket #${ticket.id} is already in the 'In Progress' list.`);
            return;
        }
        onAdd(ticket.id);
    };

    return (
        <div
            className={`bg-white rounded-lg shadow-lg p-5 border-l-4 cursor-pointer`}
            onClick={handleCardClick}
            title={isInProgress ? "Already in progress" : "Click to add to 'In Progress'"}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 truncate">#{ticket.id}: {ticket.title}</h3>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ticket.description}</p>

            <div className="flex justify-between items-center text-xs text-gray-500">
                <p>Customer: <span className="font-medium text-gray-700">{ticket.customer}</span></p>
                <p>Created: <span className="font-medium text-gray-700">{ticket.createdAt}</span></p>
            </div>
            {isInProgress && (
                <div className="mt-3 text-sm font-semibold text-indigo-600">
                    ➡️ Already being worked on
                </div>
            )}
        </div>
    );
};

export default TicketCard;