import { Component } from 'react'
import service from './service'

export default class TicketsCardsRoute extends Component {

    render() {

        const {origin, destination, time, stringDuration, stringStops, stopsText,} = service.getProperTicketData(this.props.info);
 
        return (
            <>
                <div className="ticket-route">

                    <div className="ticket-route-scedule route-item">
                        <div className="ticket-route-title">
                            {origin} - {destination} </div>
                        <div className="ticket-route-info">
                            {time} </div>
                    </div>
                    <div className="ticket-route-time  route-item">
                        <div className="ticket-route-title">
                            В ПУТИ</div>
                        <div className="ticket-route-info">
                            {stringDuration}</div>
                    </div>

                    <div className="ticket-route-transfer route-item">
                        <div className="ticket-route-title">
                            {stopsText} </div>
                        <div className="ticket-route-info">
                            {stringStops} </div>
                    </div>

                </div>

            </>
        )
    }
}