import React from 'react';
import Video from './Video';
import { v4 as uuidv4 } from 'uuid';

export default function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key = { uuidv4()} />);
}