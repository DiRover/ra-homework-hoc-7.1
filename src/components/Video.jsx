import React from 'react';
import { DateTimePretty } from './DateTimePretty';

export default function Video(props) {
    return (
        <div className="video">
            <iframe title="Video about animals" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}