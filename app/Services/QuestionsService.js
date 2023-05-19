import { Question } from "../Models/Question.js";
import { hpApi } from "./AxiosService.js";

class QuestionsService {
        async goGetTheQuestions(){
            const response = await hpApi.get('/api/questions')
        }

}


export const questionsService = new QuestionsService()