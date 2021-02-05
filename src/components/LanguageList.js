import React from 'react';
import { connect } from 'react-redux'

function LanguageList(props) {
   
        return(
            <div className="language">
                {props.languages.map(lang => {
                    return (
                        <div>
                            <h3>{lang.language_name}</h3>
                            <img src={lang.flag_image} />
                            
                        </div>
                    )
                })}
            </div>
           
        )
    
    
}
const mapStateToProps = (state) => ({
    languages: state.languages
})
export default connect(mapStateToProps)(LanguageList);