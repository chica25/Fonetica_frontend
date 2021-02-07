import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux'

// function LanguageList(props) {

const LanguageList = (props) => {
   
        return(
            <div className="language">
                {props.languages.map(lang => {
                    return (
                        <div key={lang.id}>
                            <h3>{lang.language_name}</h3>
                            <img className="flag-img" src={lang.flag_image} width={80} height={60} mode='fit' />
                            
                        </div>
                    )
                })}
            </div>
           
        )
    
    
}

// const mapStateToProps = (state) => ({
//     languages: state.languages
// })


const mapStateToProps = ({ languages }) => ({ languages })
    

export default connect(mapStateToProps)(LanguageList);


