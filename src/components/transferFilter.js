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
                        <input type="checkbox" onChange={changeTransfer} name="checkbox"  id='label1' value="-1" /><label htmlFor='label1'>Все</label>
                        <input type="checkbox" onChange={changeTransfer} name="checkbox"  id='label2' value="0" /><label htmlFor='label2'>Без пересадок</label>
                        <input type="checkbox" onChange={changeTransfer} name="checkbox"  id='label3' value="1" /><label htmlFor='label3'>1 пересадка</label>
                        <input type="checkbox" onChange={changeTransfer} name="checkbox"  id='label4' value="2" /><label htmlFor='label4'>2 пересадки</label>
                        <input type="checkbox" onChange={changeTransfer} name="checkbox"  id='label5' value="3" /><label htmlFor='label5'>3 пересадки</label>
                    </div>
                </div>
            </>
        )
    }
}