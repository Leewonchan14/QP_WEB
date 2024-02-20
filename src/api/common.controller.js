import axios from "axios";

export class Api {
    base_url = process.env.REACT_APP_BASE_URL;
    axiosInstance;


    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.base_url,
        });

        // error 인터 셉터 처리
        // this.axiosInstance.interceptors.response.use(
        //     response => ({isSuccess: true, ...response}),
        //     (error) => {
        //         error = error.toJSON()
        //         let message= ""
        //         switch (error.status){
        //             case 400:
        //                 message = "잘못된 요청입니다.";
        //                 break;
        //             case 404:
        //                 message = "요청한 자료가 존재하지 않습니다."
        //                 break;
        //             case 500:
        //             case 502:
        //             case 503:
        //             case 504:
        //                 message = "서버측 오류입니다."
        //                 break;
        //             default:
        //                 message = `에러 발생 : ${error.message}`;
        //                 break;
        //         }
        //         return Promise.resolve({
        //             isSuccess: false,
        //             message: message,
        //             status : error.status,
        //             data: []
        //         });
        //     }
        // );
    }

    async sendRequest(options) {
        const {method, url, data, content_type} = options;

        const config = {
            headers: {
                'Content-Type': content_type,
            },
        };

        return await this.axiosInstance[method](url, data, config);
    }

    async get(url, {data, content_type = 'application/json'} = {}) {
        return await this.sendRequest({method: 'get', url, data, content_type});
    }

    async post(url, {data, content_type = 'application/json'} = {}) {
        return await this.sendRequest({method: 'post', url, data, content_type});
    }
}