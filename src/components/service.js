class Service {

    requestURL = 'https://front-test.beta.aviasales.ru';

    state = {
        id: null,
        err: false
    }

    getProperTicketData = (ticket) => {

        let { origin, destination, date, duration, stops } = ticket;

        // format time of flight
        const timeStampStart = Date.parse(date);
        const dateStart = new Date(timeStampStart);
        const timeStart = dateStart.getHours() + ':' + dateStart.getMinutes();


        const timeStampEnd = Date.parse(date) + (duration * 60000);
        const dateEnd = new Date(timeStampEnd);
        const timeEnd = dateEnd.getHours() + ':' + dateEnd.getMinutes();

        const time = timeStart + ' - ' + timeEnd;

        // format duration of flight
        const durHour = Math.floor(duration / 60);
        const durMins = duration % 60;
        const stringDuration = (durHour) ? durHour + 'ч ' + durMins + 'м' : durMins + 'м';

        // formats stops
        const stringStops = stops.join(', ');

        // format stops describe
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

    getTicketsData = () => {
        return fetch(this.requestURL + '/search')
            .then(data => data.json())
            .then(data => data.searchId)
            .then((id) => fetch(this.requestURL + '/tickets?searchId=' + id))
            .then(data => {
                if (!data.ok) {
                    return []
                }
                else {
                    return data.json()
                }
            })
            .catch(e => {
                console.log('catch')
                console.log(e);
            })
    }

    filterData = (transfer, filter, data) => {

        // if fetch error happens
        if (!data||!data.length) return data;

        // filter by transfers
        const newData = data.filter(ticket => {


            if (transfer.includes(-1) || transfer.length === 0) {
                return true;
            }

            const transfersTo = ticket.segments[0].stops.length;
            const transfersBack = ticket.segments[1].stops.length;

            if (transfer.includes(transfersTo) && (transfer.includes(transfersBack))) {
                return true;
            }

            else { return false }

        })

        // sort by filter
        newData.sort((prev, next) => {

            if (filter === 'cheap') {
                return prev.price - next.price
            }
            else {
                const prevDuration = prev.segments[0].duration + prev.segments[1].duration;
                const nextDuration = next.segments[0].duration + next.segments[1].duration;
                return prevDuration - nextDuration;
            }

        });

        return newData.slice(0, 5);

    }

}

const service = new Service();

export default service;