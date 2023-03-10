
export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const isNull = (value) => {
    return value === null;
};

export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
};


export const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};


export const clearItems = () => {
    return localStorage.clear();
};

export const removeItem = (key) => {
    return localStorage.removeItem(key);
};



/*
 * This is the basic function vastly used in in reducers to update or concatinate
 * their old object with new properties
 */

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const convertDateFormat = (date) => {
    date = new Date(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${date.getFullYear()}-${month}-${day}`;
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isEqual = (item1, item2) => {
    if (typeof (item1) === 'number' && typeof (item2) === 'number') {
        return item1 === item2;
    }
    if (typeof (item1) === 'string' && typeof (item2) === 'string') {
        return item1.toLowerCase() === item2.toLowerCase();
    }
};

export const create_UUID = (name) => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid.concat(name);
};

export const convertToTimestamp = (date) => {
    return new Date(date).getTime();
};

export const convertToHtml = (html) => {
    return {
        __html: html
    };
};

export const getShortDate = (date) => {
    const _date = new Date(date);
    const options = { dateStyle: 'long' };
    return _date.toLocaleString('en', options);
}