import { Component } from 'react'
import TicketsCardsRoute from './ticketsCardsRoute'
import TicketsCardsHeader from './ticketsCardsHeader'
import Error from './error'

class Card extends Component {

    render() {

        const { ticket } = this.props;
        const { price, carrier } = ticket;

        return (
            <>
                <div className="ticket round shadow">
                    <TicketsCardsHeader price={price} carrier={carrier} />
                    <TicketsCardsRoute info={ticket.segments[0]} />
                    <TicketsCardsRoute info={ticket.segments[1]} />
                </div>
            </>
        )
    }
}

const returnCards = (View) => {
    return class extends Component {

        render() {

            const { tickets } = this.props;

            // if fetch go wrong here a cute error cat for customer
            if (tickets === undefined) return [<Error />]

            const cards = (tickets.length) ? tickets.map((ticket, index) => <View ticket={ticket} key={index}/>) : null

            return cards
        }
    }
}

export default returnCards(Card)