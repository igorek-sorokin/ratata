import {STORAGE_NAMES} from "./initStorage.js";

export const getTrafficSource = () => {
    let trafficSource = 'Прямой переход';
    const source = localStorage.getItem(STORAGE_NAMES.source);
    const referrer = localStorage.getItem(STORAGE_NAMES.referrer);
    if (source) {
        trafficSource = `Реклама ${source}`;
    } else if (referrer) {
        trafficSource = `Переход был с сайта ${referrer}`;
    }
    return trafficSource;
}