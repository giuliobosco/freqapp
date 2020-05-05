export default class Config {
    public static getApiBase():string {
        return "http://10.8.16.155:8080/"
    }

    public static getHeaders(requestType:string, body?:object):object {
        
        return {
            method: requestType,
            headers: {
                'Content-Type': 'application/json',
            },
            body: (body!=null?JSON.stringify(body):null),
        }
    }
}