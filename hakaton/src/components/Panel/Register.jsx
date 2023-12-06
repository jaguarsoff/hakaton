import logo from '../../img/logo_auth.png'
import back_auth from '../../img/back_auth.png'
function Register(){
    const nameStyle = {
        fontSize: '50px',
        marginLeft: "20px",
        fontWeight: "500"
      };
      const Header = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em"
    }
    const main = {
        margin:"0px 140px 140px 140px",
        backgroundColor:"#E672B6",
        height:"100%",
        borderRadius:"40px"
    }
    return (
        <div className="register">
            <header style={Header} className="flex justify-center">
                <img src={logo} alt="" width="100"/>
                <h2 style={nameStyle}>Monorts</h2>
            </header>
            <main style={main}>
<img src={back_auth} alt="" />
            </main>
        </div>
    )

}

export default Register