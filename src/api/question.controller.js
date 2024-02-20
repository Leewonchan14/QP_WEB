import {Api} from "./common.controller";

class QuestionController extends Api {
    findAllBySearch = async ({page = 0, size = 10, search = ""}) => {
        return await this.get(`/questions?page=${page}&size=${size}&search=${search}`);
    }
    findById = async ({questionId=""}) => {
        return await this.get(`/questions/${questionId}`);
    }
}

export default new QuestionController();