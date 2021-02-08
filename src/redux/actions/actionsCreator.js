
export const fetchLanguages = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/languages')
            .then(response => response.json())
            .then(languages => dispatch({
                type: 'SET_LANGUAGES',
                payload: languages }))
           }
    }

    export const fetchLanguagePhrases = () => {
        return dispatch => {
            fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`)
            .then(response => response.json())
            .then(languageId => dispatch({
                type: 'SET_PHRASES_BY_LANGUAGE',
                payload: languageId }))
        }
    }
