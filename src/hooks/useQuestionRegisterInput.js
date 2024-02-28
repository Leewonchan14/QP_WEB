import {useEffect, useState} from "react";

const useQuestionRegisterInput = () => {

    const [inputs, setInputs] = useState({
        title: "",
        content: "",
        hashtag: "",
        isChild: false,
        isCheck: false,
    })

    const [hashTags, setHashTags] = useState([]);

    const addHashTag = (e) => {
        // 엔터, 스페이스바 입력 시 해시태그 추가
        if (e.key === " " || e.key === "Enter") {
            // 3개 이상 해시태그 입력 시 추가 불가
            if (hashTags.length >= 3) {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            setHashTags([...hashTags, inputs.hashtag]);
            setInputs({
                ...inputs,
                hashtag: ""
            });
        }
    }

    const deleteHashTag = (index) => {
        setHashTags(hashTags.filter((_, i) => i !== index));
    }

    const onHashTagChange = (e) => {
        setInputs({
            ...inputs,
            hashtag: e.target.value
        });
    }

    const onCheckChange = () => {
        setInputs({
            ...inputs,
            isCheck: !inputs.isCheck
        });
    }

    const onChildChange = () => {
        setInputs({
            ...inputs,
            isChild: !inputs.isChild
        });
    }

    // 최소 5자 정규 표현식
    const minLeast5 = new RegExp("^.{5,}$");

    // 최대 50자 정규 표현식
    const maxGreat50 = new RegExp("^.{0,50}$");

    // 최소 10자 정규 표현식
    const minLeast10 = new RegExp("^.{10,}$");

    // 최대 300자 정규 표현식
    const maxGreat300 = new RegExp("^.{0,300}$");

    // ?로 끝나는 정규 표현식
    const endWithQuestion = new RegExp(".*\\?$");

    const [validated, setValidated] = useState({
        isTitleMinValidate: minLeast5.test(inputs.title),
        isContentMinValidate: minLeast10.test(inputs.content),
        isTitleMaxValidate: maxGreat50.test(inputs.title),
        isContentMaxValidate: maxGreat300.test(inputs.content),
        isTitleQuestionValidate: endWithQuestion.test(inputs.title),
    })

    const onTitleChange = (e) => {
        setInputs({
            ...inputs,
            title: e.target.value
        })

        setValidated({
            ...validated,
            isTitleMinValidate: minLeast5.test(e.target.value),
            isTitleMaxValidate: maxGreat50.test(e.target.value),
            isTitleQuestionValidate: endWithQuestion.test(e.target.value)
        })
    };

    const onContentChange = (e) => {
        setInputs({
            ...inputs,
            content: e.target.value
        });

        setValidated({
            ...validated,
            isContentMinValidate: minLeast10.test(e.target.value),
            isContentMaxValidate: maxGreat300.test(e.target.value)
        });
    };

    const validator = () => {
        return validated.isTitleMinValidate && validated.isContentMinValidate
            && validated.isTitleMaxValidate && validated.isContentMaxValidate
            && validated.isTitleQuestionValidate;
    }

    const [isValid, setIsValid] = useState(validator())

    useEffect(() => {
        setIsValid(validator());
    }, [inputs]);

    return {
        inputs,
        hashTags,
        validated,
        isValid,
        onTitleChange,
        onContentChange,
        onHashTagChange,
        onCheckChange,
        onChildChange,
        addHashTag,
        deleteHashTag,
    }
}

export default useQuestionRegisterInput;