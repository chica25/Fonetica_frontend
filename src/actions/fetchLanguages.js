export function fetchLanguages(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/languages')
        .then(response => response.json())
        .then(languages => dispatch({
            type: 'FETCH_LANGUAGES',
            payload: languages
        }))
    }
}
