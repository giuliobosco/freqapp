export default class Config {
    public static getApiBase(api?: string): string {
        const baseUrl = "http://10.8.16.155:8080/";

        return api != null ? baseUrl + api : baseUrl;
    }

    public static getHeaders(requestType: string, body?: object): object {

        return {
            method: requestType,
            headers: {
                'Content-Type': 'application/json',
            },
            body: (body != null ? JSON.stringify(body) : null),
        }
    }
}

const Colors = {
    WHITE: '#FFFFFF',
    LLLIGHT_GRAY: '#efefef',
    WIDE_GRAY: '#dddddd',
    LLIGHT_GRAY: '#BBBBBB',
    LIGHT_GRAY: '#CCCCCC',
    GRAY: '#777777',
    LLIGHT_BLUE: '#2196F3',
    LIGHT_BLUE: '#2F80ED',
    BLUE: '#0090c2',
    WHITE07: 'rgba(255,255,255,0.7)',
    RED: '#cc0000',
}

const Permissions = {
    ADMIN: 'admin',
    USER: 'user',
}

const FreqlineValueConfig = {
    frequence: {
        min: 0,
        max: 25000,
        unitMeasure: 'Hz',
    },
    micTimer: {
        min: 0,
        max: 1000000,
        unitMeasure: 's',
    },
    decibel: {
        min: 0,
        max: 200,
        unitMeasure: 'db',
    }
}

export { Colors, Permissions, FreqlineValueConfig };