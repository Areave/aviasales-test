import { Component } from 'react'

export default class TicketsFilter extends Component {



    render() {
        return (
            <>
                <div className="tickets-filter round">
                    <div onClick={this.props.changeTicketFilter} data-filter="fast" className="tickets-filter-fast tickets-filter-item active">Самый быстрый</div>
                    <div onClick={this.props.changeTicketFilter} data-filter="cheap" className="tickets-filter-cheap tickets-filter-item">Самый дешевый</div>
                </div>

            </>
        )
    }
}