import React from 'react';
import { connect } from 'react-redux'

function LanguageList(props) {
   
        return(
            <div className="language">
                {props.languages.map(lang => {
                    return (
                        <img src={lang.flag_image} />
                    )
                })}
            </div>
           
        )
    
    
}
const mapStateToProps = (state) => ({
    languages: state.languages
})
export default connect(mapStateToProps)(LanguageList);