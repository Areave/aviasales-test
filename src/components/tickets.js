import { Component } from 'react'
import TicketsFilter from './ticketsFilter'
import TicketsCards from './ticketsCards'

export default class Tickets extends Component {


    render() {
        
        return (
            <>
                <div className="tickets">
                    <TicketsFilter changeTicketFilter={this.props.changeTicketFilter}/>
                    <div className="ticket-wrapper">
                        <TicketsCards tickets={this.props.tickets}/>
                    </div>
                </div>

            </>
        )
    }
}

