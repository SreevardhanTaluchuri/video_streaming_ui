import { io } from 'socket.io-client';

let socket;
let isSocketConnected = false;

export const initiateSocket = () => {
    console.log(process.env)
    socket = io(process.env.REACT_APP_WEB_SOCKET_URL, {
        transports: ["websocket"]
    });
    console.log('Connecting socket...', socket);
    socket.on('connect', () => {
        isSocketConnected = true;
        console.log("Socket", isSocketConnected)
    });
    socket.on('disconnect', () => {
        isSocketConnected = false;
        console.log('disconnected.......', socket.id);
        console.log("Socket", isSocketConnected)
    });
};

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket) socket.disconnect();
};

export const subscribeToSocketStatus = (cb) => {
    socket.on('connect', () => {
        isSocketConnected = true;
        console.log("Socket", isSocketConnected)
        cb(isSocketConnected)
    });
    socket.on('disconnect', () => {
        isSocketConnected = false;
        console.log('disconnected.......', socket.id);
        console.log("Socket", isSocketConnected)
        cb(isSocketConnected)
    });
};

export const subscribeToLiveData = (cb) => {
    if (!socket) return (true);
    socket.on('LIVE_DATA', msg => {
        return cb(null, msg);
    });
};

export const requestLiveData = (obj) => {
    socket.emit('LIVE_DATA', obj);
};

export const updateDeviceStatus = (cb) => {
    socket.on('DEVICE_ACTIVE', msg => {
        return cb(null, 'active', msg);
    })

    socket.on('DEVICE_NOT_ACTIVE', msg => {
        return cb(null, 'not active', msg)
    })
}

export const requestAllData = (msg) => {
    socket.emit('ALL_DATA', msg);
}

export const requestDataFromTime = (time, deviceId) => {
    socket.emit('TIME_DATA', { time, deviceId });
}

export const getDataFromTimeSocket = (cb) => {
    socket.on('TIME_DATA', data => {
        cb(null, data);
    })
}

export const getAllData = (cb) => {
    socket.on('ALL_DATA', data => {
        return cb(null, data);
    })
}



