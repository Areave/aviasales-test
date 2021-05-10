class Service {

    requestURL = 'https://front-test.beta.aviasales.ru';

    state = {
        id: null,
        err: false
    }

    getProperTicketData = (ticket) => {
        let { origin, destination, date, duration, stops } = ticket;

        const timeStampStart = Date.parse(date);
        const timeStampEnd = timeStampStart + (duration * 60000);
        const dateStart = new Date(timeStampStart);
        const dateEnd = new Date(timeStampEnd);
        const timeStart = dateStart.getHours + ':' + dateStart.getMinutes;
        const timeEnd = dateEnd.getHours + ':' + dateEnd.getMinutes;
        const time = timeStart + ' ' + timeEnd;


        const durHour = Math.floor(duration / 60);
        const durMins = duration % 60;        
        const stringDuration = (durHour) ? durHour + 'ч ' + durMins + 'м' : durMins + 'м';

        const stringStops = stops.join(', ');

        let stopsText;
        const length = stops.length
        switch (length) {
            case 0: stopsText = 'нет пересадок';
                break;
            case 1: stopsText = length + ' пересадка';
                break;
            case 2:
            case 3:
            case 4: stopsText = length + ' пересадки';
                break;
            default: stopsText = length + ' пересадок';
        }

        return { origin, destination, time, stringDuration, stringStops, stopsText, };
    }

    getTick = async () => {
        const request = await fetch(this.requestURL + '/search')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.state.id = data.searchId
            })
            .then(() =>
                fetch(this.requestURL + '/tickets?searchId=' + this.state.id))
            .then(data => {
                return data.json()
            })
            .catch((err) => {
                this.state.err = true
                console.log(err.message)
            })

        return await request;
    }

    getTickets = () => {
        fetch(this.requestURL + '/tickets?searchId=' + this.state.id)
            .then(data => {
                return data.json()
            })
            .then(data => console.log(data));
    }

}

const service = new Service();

export default service;