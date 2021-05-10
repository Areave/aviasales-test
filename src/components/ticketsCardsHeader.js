import { Component } from 'react'

export default class TicketsCardsHeader extends Component {

    render() {
        const {price, carrier} = this.props;
        const picUrl = "http://pics.avs.io/99/36/"+ carrier + ".png";
        
        return (
            <>
                <div className="ticket-header">
                    <div className="ticket-price">{price} Р</div>
                    <div className="ticket-logo">
                        <img src={picUrl} alt="" className="ticket-logo-img" />
                    </div>
                </div>

            </>
        )
    }
}