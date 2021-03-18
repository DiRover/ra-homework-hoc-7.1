import DateTime from './DateTime';
import getTime from '../services/getTime';

function dateFrom(Component) {
    return function(props) {
        const time = getTime(props.date);
        return Component(time)
    }
}

export const DateTimePretty = dateFrom(DateTime);
