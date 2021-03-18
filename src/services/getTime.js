import moment from 'moment';

export default function getTime(date) {
    const time = moment(`${date}`, "YYYY-MM-DD HH:mm").fromNow();
    return {date: time};
}
