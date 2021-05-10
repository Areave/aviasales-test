import React, { Component } from 'react'

export default class TransferFilter extends Component{
    render() {

        const {changeTransfer} =  this.props;

        return (
            <>
                <div className="filter round shadow">
                    <div className="filter-title">
                        <h3>Количество пересадок</h3>
                    </div>
                    <div className="filter-body">
                        <label><input type="checkbox" onChange={changeTransfer} name="checkbox" value="-1" />Все</label>
                        <label><input type="checkbox" onChange={changeTransfer} name="checkbox" value="0" />Без пересадок</label>
                        <label><input type="checkbox" onChange={changeTransfer}name="checkbox" value="1" />1 пересадка</label>
                        <label><input type="checkbox" onChange={changeTransfer} name="checkbox" value="2" />2 пересадки</label>
                        <label><input type="checkbox" onChange={changeTransfer} name="checkbox" value="3" />3 пересадки</label>
                    </div>
                </div>
            </>
        )
    }
}