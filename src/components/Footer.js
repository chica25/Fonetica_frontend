import sm_icons from './public/images/sm_icons.png'


function Footer() {
//   const style = {
//     textAlign: "center",
//     fontFamily: "HelveticaNeue-Light",
//     fontStyle: "normal", 
//     color: "LightSteelBlue"
// } 
    return(
        <div className="footer" >
          <img className="SM" src={sm_icons} alt={"SM"} />
          <h5>Copyright© 2021 | Fonetica. All rights reserved</h5>
          
        </div>
      )
}


export default Footer;