import {useEffect, useState} from "react";

const useFetchQuestion = ({size=10}) => {
    const testQuestion = {
        "user": {
            "userId": 0,
            "profileImage": "string",
            "role": "USER"
        },
        "questionId": 0,
        "title": "string",
        "hit": 0,
        "answerCount": 0,
        "expertCount": 0,
        "childStatus": "ACTIVE",
        "createdAt": "2024-02-18T13:01:13.496Z",
        "updatedAt": "2024-02-18T13:01:13.496Z",
        "hashtags": [
            {
                "hashtagId": 0,
                "hashtag": "string"
            }
        ]
    }

    const [questionState, setQuestionState] = useState({
        "questions": [
            ...Array(size).fill(testQuestion)
        ],
        "listSize": size,
        "totalPage": 0,
        "totalElements": 0,
        "first": true,
        "last": true
    });

    const fetchQuestions = async () => {
        // const response = await QuestionController.findAllBySearch({page: 0, size: 10, search: ""});
        // console.log(response);
        // setQuestionState(response.data.result);
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return [questionState, setQuestionState];
}

export default useFetchQuestion;