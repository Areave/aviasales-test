import { Component } from 'react'

export default class TicketsCardsHeader extends Component {

    render() {
        const {price, carrier} = this.props;
        const picUrl = "http://pics.avs.io/99/36/"+ carrier + ".png";
        const priceTemp = price.toString();
        const priceStr = priceTemp.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        
        return (
                <div className="ticket-header">
                    <div className="ticket-price">{priceStr} Р</div>
                    <div className="ticket-logo">
                        <img src={picUrl} alt="" className="ticket-logo-img" />
                    </div>
                </div>
        )
    }
}