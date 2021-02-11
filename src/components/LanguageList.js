import React from 'react';
import { connect } from 'react-redux';

    const LanguageList = (props) => {
//    console.log("Hi", props)
        const languages = props.languages.map((lang, i) =>  <div key={i}> <h3>{lang.language_name}</h3>
        <img src={lang.flag_image} alt="languages" width={80} height={60} mode='fit' /></div>)
        return(
            <div className="language">
            {/* //     {props.languages.map(lang => { */}
            {/* //         return(
            //             <div key={lang.id}>
            //                 <h3>{lang.language_name}</h3>
            //                 <img src={lang.flag_image} alt="languages" width={80} height={60} mode='fit' />
            //             </div>
            //             )
                    // })} */}
                    {languages}
                </div>
               
            )
        
        
    }

const mapStateToProps = ({ languages }) => ({ languages })

export default connect(mapStateToProps)(LanguageList);
