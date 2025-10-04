import { useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initialTickets } from './data';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;
  const pendingTickets = useMemo(() => tickets.filter(t => t.status === "Pending"), [tickets]);

  const handleAddToProgress = (ticketId) => {
    const ticketToAdd = pendingTickets.find(t => t.id === ticketId);

    if (inProgress.some(t => t.id === ticketId)) {
      toast.warn(`Ticket #${ticketId} already in progress.`);
      return;
    }

    setInProgress(prev => [...prev, ticketToAdd]);
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: "In Progress" } : t));
    toast.info(`Ticket #${ticketId} added to In Progress!`);
  };

  const handleCompleteTask = (ticketId) => {
    const ticketToComplete = inProgress.find(t => t.id === ticketId);

    setInProgress(prev => prev.filter(t => t.id !== ticketId));
    setResolved(prev => [...prev, { ...ticketToComplete, status: "Resolved", completedAt: new Date().toLocaleDateString() }]);
    setTickets(prev => prev.filter(t => t.id !== ticketId));
    toast.success(`Ticket #${ticketId} Resolved!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="bg-[#F5F5F5] min-h-screen">
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
        <section className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 mt-8">
          {/* Main Section - Ticket Cards (Left Column) */}
          <div className=" md:col-span-4 lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-800">Customer Tickets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
              {pendingTickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAdd={handleAddToProgress}
                  isInProgress={inProgress.some(t => t.id === ticket.id)}
                />
              ))}
            </div>
          </div>
          {/* Task Status Section (Right Column) */}
          <div className=" md:col-span-2 lg:col-span-1">
            <TaskStatus
              inProgressTickets={inProgress}
              onComplete={handleCompleteTask}
            />
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;