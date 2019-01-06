import { observable, action, decorate } from 'mobx';

class CheckerStore {
    url = ''
    devices = [
        {
            name: "Device S 320px (Iphone 5/SE)",
            width: 320,
            height: 405
        },
        {
            name: "Device M 375px (Iphone 6/7/8)",
            width: 375,
            height: 405
        },
        {
            name: "Device L 425px",
            width: 425,
            height: 405
        }, {
            name: "Iphone 6/7/8 Plus",
            width: 414,
            height: 736
        }, {
            name: "Ipad Pro",
            width: 768,
            height: 1024
        }, {
            name: "Tablet 768px",
            width: 768,
            height: 405
        },
    ]

    load(value) {
        this.url = value
    }

    isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?'+ // port
            '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
            '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

        const test = pattern.test(str);

        if (!test) {
            alert('Please enter a valid URL.');
        }

        return test;
    }
}

decorate(CheckerStore, {
    devices: observable,
    url: observable,
    load: action,
    isURL: action,
})

var store = window.store = new CheckerStore();

export default store;
