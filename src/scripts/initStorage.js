export const STORAGE_NAMES = {
    source: 'utm_source',
    campaign: 'utm_campaign',
    referrer: 'referrer',
}

export const initStorage = () => {
    const host = window.location.host;
    const referrer = document.referrer;
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get(STORAGE_NAMES.source);
    const utmCampaign = urlParams.get(STORAGE_NAMES.campaign);
    if (utmSource && utmCampaign) {
        saveToStorage(STORAGE_NAMES.source, utmSource);
    } else if (!referrer.includes(host)) {
        saveToStorage(STORAGE_NAMES.referrer, referrer);
    }
}

const saveToStorage = (name, value) => {
    const stored = localStorage.getItem(`${name}`);
    const timeStamp = localStorage.getItem(`${name}Timestamp`);
    const now = new Date().getTime();

    // Если еще не сохранен или прошло более 24 часов
    if (!stored || (+now - timeStamp) > (24 * 60 * 60 * 1000)) {
        // Сохранение в localStorage
        localStorage.setItem(`${name}`, value);
        localStorage.setItem(`${name}Timestamp`, `${now}`);
    }
}