import { Component } from 'react'
import TicketsCardsRoute from './ticketsCardsRoute'
import TicketsCardsHeader from './ticketsCardsHeader'

class Card extends Component {

    render() {
        const {ticket} = this.props;
        const {price, carrier} = this.props.ticket;

        return (
            <>
                <div className="ticket round shadow">
                    <TicketsCardsHeader price={price} carrier={carrier} />
                    <TicketsCardsRoute info={ticket.segments[0]}/>
                    <TicketsCardsRoute info={ticket.segments[1]}/>
                </div>

            </>
        )
    }
}

const returnCards = (View) => {

    return class extends Component {        

        render() {

            const tickets = this.props.tickets;
            console.log(tickets[0].carrier)
            const ticket = tickets[0];

            const cards = tickets.map(ticket => <View ticket={ticket} />)

            

            // const compArray = [<View ticket={ticket} />, <View />, <View />, <View />];
        
                return cards
                // return <View/>
         
        }


    }


}

export default returnCards(Card)