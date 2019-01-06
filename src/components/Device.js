import React from 'react';
import { observer } from 'mobx-react';
import Iframe from 'react-iframe';
import './Device.css'

const Device = (props) => {
    const { name, width, height } = props.device;

    return (
        <div className="Device">
            <h4 className="title">{name}</h4>

            <Iframe url={props.url}
                width={width + 'px'}
                height={height + 'px'}
                position="initial"
                className="myClassname"
                styles={{border: '1px solid rgba(45, 45, 45, 0.3)'}}
                allowFullScreen />
        </div>
    )
}


export default observer(Device);
