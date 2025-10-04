const TaskStatus = ({ inProgressTickets, onComplete }) => {
    return (
        <div className="">
            <h2 className="text-2xl font-bold text-gray-800">Task Status</h2>
            <div className="mt-4 bg-[#FFFFFF] border-1 border-gray-400 p-2 rounded-md">
                {inProgressTickets.length === 0 ? (
                    <p className="text-gray-500 italic">No tickets currently in progress.</p>
                ) : (
                    <ul className="space-y-3">
                        {inProgressTickets.map(ticket => (
                            <li
                                key={ticket.id}
                                className="p-3 space-y-2 bg-indigo-50 rounded-md border border-indigo-200"
                            >
                                <p className="text-sm font-medium text-gray-800 truncate text-center" title={ticket.title}>
                                    {ticket.id} - {ticket.title}
                                </p>
                                <button
                                    onClick={() => onComplete(ticket.id)}
                                    className="w-full cursor-pointer px-3 py-1 text-xs font-semibold rounded-full text-white bg-green-500 hover:bg-green-600 transition duration-150"
                                >
                                    Complete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;