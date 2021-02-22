import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguagePhrases, selectLanguage , fetchLanguages} from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';
import language_page_img from '../images/language_page_img.png'

    class LanguageList extends React.Component {
        // constructor(props){
        //     super(props)

        // state = {
        //     // count: 
        //     sortArray: []
        // }
        
    
        handleClick = (e) => {     
            // console.log(e.target.id, "hello!")
        this.props.fetchLanguagePhrases(e.target.id)
        this.props.selectLanguage(e.target.id)  //notes - this.props.selectLanguage comes from the reudx store
        // debugger
        //when user clicks on a flag 
        // it will fetch the phrases of the language
        // connect the info to the redux store
        // it'll direct them to the phrases of that language

        }

        // Sort -----------
        // handleSort = () => {
        //     // debugger
        //     let copySort = this.props.languages
            // debugger
            // this.setState({ 
            //     sortArray: copySort.sort((a, b) => (a.language_name > b.language_name) ? -1 : 1)
            //     })
            // }
      // end -----------
            // store the copySort in the sort array
            // in the render - render the state
            // add an if and else statement 

            // increment = () => {
            //     this.setState((prevState) => {
            //         return { count: prevState.count - 1}
            //     })
            // }

            // decrement = () => {
            //     this.setState((prevState) => {
            //         return { count: prevState.count + 1}
            //     })
            // }
        
        render(){
        //     const sorted = languages.sort( (a, b) =>  {
        //         const isReversed = (sortType === 'desc') ? 1 :-1;
        //         return isReversed = a.language_name(b.language_name) 
        //     });

            // if/else statement add here
           
            // sort iteration ----- const languages = this.state.sortArray.map((lang, i) => 
         
            const languages = this.props.languages.map((lang, i) => 
                <div className="language-list" key={i}> <h4 style={{ }}>{lang.language_name}</h4>
                    <Link to={`/languages/phrases/${lang.language_name}`}>
                        <br/>
                        <button className="language-list-button" onClick={this.handleClick}>
                            <img className="language-imgs" src={lang.flag_image} id={lang.id} alt="languages"  mode='fit'/>     
                        </button>
                    </Link>
                </div>)
            return(
              
                <div className="languages-title" id="lang">
                     <img className="languages-page-img" src={language_page_img} alt="image"></img>
                     <h3>ALL LANGUAGES</h3>
                       <div className="language-name">{languages}</div> 

            {/* sort onclick ----- */}
                    {/* <button onClick={this.handleSort}>sort button</button>  */}
                 {/* {this.props.languages}  */}
              
                </div>
               
            )
        }
    }

const mapStateToProps = (state) => {  //notes - MapStateToProps gets the state from the redux store
    return {

        languages: state.languages,
        selectedLanguage: state.selectedLanguage
    }
  
    // add this.drops on a debugger
}


export default connect(mapStateToProps, { fetchLanguagePhrases, selectLanguage, fetchLanguages })(LanguageList);
// notes - connecting a higher order component to the redux store
// Redux Thunk actions - fetchLanguagePhrases, selectLanguage, fetchLanguages 
// Thunk is a middleware - Passes through the dis