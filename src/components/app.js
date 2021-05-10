import React, { Component, useState, useEffect } from 'react'
import service from './service'
import TransferFilter from './transferFilter'
import Tickets from './tickets'

export default class App extends Component {

    state = {
        transfer: [],
        ticketFilter: 'fast'
    }

    tickets;


    componentDidMount = () => {
        this.loadData();

    }


    componentDidUpdate = () => {
        this.loadData();

    }


    loadData = () => {
        console.log('load!!!')
        service.getTick()
            .then(data => this.filterData(data.tickets))
            .then(tickets => { this.tickets = tickets })
            .then(()=>{this.render()})
    }

    filterData = (data) => {
        const { transfer, ticketFilter } = this.state;
        const newData = data.filter(ticket => {

            if (ticketFilter.includes(-1)) {
                return true;
            }

            else {
                const transfersTo = ticket.segments[0].stops.length;
                const transfersBack = ticket.segments[1].stops.length;
                if (ticketFilter.includes(transfersTo) && (ticketFilter.includes(transfersBack))) {
                    return true;
                }
            }
        })

        newData.sort((prev, next) => {

            if (transfer === 'cheap') {
                return prev.price - next.price
            }
            else {
                const prevDuration = prev.segments[0].duration + prev.segments[1].duration;
                const nextDuration = next.segments[0].duration + next.segments[1].duration;
                return prevDuration - nextDuration;
            }

        });

        return newData.slice(0, 5);

    }

    changeTicketFilter = (event) => {
        const target = event.target;
        const ticketFilter = target.getAttribute('data-filter');
        this.setState({ ticketFilter });

        const items = document.querySelectorAll('.tickets-filter-item');
        items.forEach(item => {
            item.classList.remove('active');
        })
        target.classList.add('active');

    }

    changeTransfer = (event) => {
        let transfer;
        const value = event.target.value;
        if (event.target.checked) {
            transfer = [...this.state.transfer, value]
        }
        else {
            transfer = this.state.transfer.filter(item => item !== value)
        }
        this.setState({ transfer });
    }

    render() {

        // this.loadData()

        if (!this.tickets) {
            return <h1> no tickets! </h1>
        }

        else {
            console.log(this.state)
            return (
                <>
                    <TransferFilter changeTransfer={this.changeTransfer} />
                    <Tickets tickets={this.tickets} changeTicketFilter={this.changeTicketFilter} />
                </>
            )
        }


    }


}

