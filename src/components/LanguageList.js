import React from 'react';
import { connect } from 'react-redux'
function LanguageList() {
   
        return(
            <div className="language">languages</div>
           
        )
    
    
}
const mapStateToProps = (state) => ({
    languages: state.languages
})
export default connect(mapStateToProps)(LanguageList);