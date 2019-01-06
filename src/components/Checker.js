import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Device from './Device';
import './Checker.css';

class Checker extends Component {
    componentDidMount() {
        const params = (new URL(window.location.href)).searchParams;
        const url = params.get('url');

        if (!url || !this.props.store.isURL(url)) {
            return;
        }

        this.props.store.load(url);
    }

    loadLink = (e) => {
        const value = e.target.value;

        if (e.which !== 13 || !value) {
            return;
        }

        if (!this.props.store.isURL(value)) {
            return;
        }

        this.props.store.load(value);
    }

    render() {
        const { devices, url } = this.props.store
        let loadDevices = [];

        if (url) {
            loadDevices = devices.map(device => (
                <Device key={device.name} device={device} url={url} />
            ))
        }

        const devicesList = devices.map(device => (
            <li key={device.name}>{device.name}</li>
        ))

        return (
            <div>
                <div className="Header">
                    <div className="url" align="center">
                        <label>URL</label>
                        <input className="create" placeholder="//aaa.com (enter)" onKeyPress={this.loadLink} />
                    </div>

                    <ul className="devices">
                        {devicesList}
                    </ul>
                </div>

                <div className="Devices">
                    {loadDevices}
                </div>
            </div>
        )
    }
}

export default observer(Checker);
