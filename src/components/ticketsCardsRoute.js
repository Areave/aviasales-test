import { Component } from 'react'
import service from './service'

export default class TicketsCardsRoute extends Component {


    // date: "2021-06-08T03:13:00.000Z"
    // destination: "MOW"
    // duration: 836
    // origin: "HKT"
    // stops: (3)["IST", "HKG", "SIN"]





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