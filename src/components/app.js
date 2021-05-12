import React, { useState, useEffect } from 'react'
import service from './service'
import TransferFilter from './transferFilter'
import Tickets from './tickets'

const App = () => {

    // create number array for storage of transfer info (1 is 1 transfer, 2-2, 3-3, -1 is all)
    const [transfer, setTransfer] = useState([]);
    // create string array for storage of filter ('fast' or 'cheap')
    const [filter, setFilter] = useState('fast');
    // create array for tickets to render
    const [tickets, setTickets] = useState([])


    const changeTicketFilter = (event) => {
        // take data from target and set it
        const target = event.target;
        const ticketFilter = target.getAttribute('data-filter');
        setFilter(ticketFilter);

        // change styles
        const items = document.querySelectorAll('.tickets-filter-item');
        items.forEach(item => {
            item.classList.remove('active');
        })
        target.classList.add('active');
    }

    const changeTransfer = (event) => {
        // get value of transfers from checkboxes and set it
        let newTransfer;
        const value = +event.target.value;
        if (event.target.checked) {
            newTransfer = [...transfer, value]
        }
        else {
            newTransfer = transfer.filter(item => item !== value)
        }
        setTransfer(newTransfer);
    }

    useEffect(() => {
        service.getTicketsData()
            .then((data) => setTickets(service.filterData(transfer, filter, data.tickets)))
    }, [filter, transfer])


    return (
        <>
            <TransferFilter changeTransfer={changeTransfer} />
            <Tickets tickets={tickets} changeTicketFilter={changeTicketFilter} />
        </>
    )
}

export default App
