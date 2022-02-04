import "./style/Main.css"
import Main_logo from "./style/Main_logo.png"
import { useNavigate } from "react-router-dom";
import cook1 from "../picture/cook/cook1.png"
const Main=({isLogin,setIsLogin})=>{
    let navigate = useNavigate();
    const onLogin =()=>{
        if(isLogin===true){
            setIsLogin(false)
        }
        else{
            navigate("/login")
        }
        
    }
    const onSignup =()=>{
        navigate("/signup")
    }
    return (
        <div className="App">
            <div className="header">
                <div className="button">
                    <div className="login_button">
                        <button className="log_button" onClick={onLogin}>
                            {isLogin? "로그아웃":"로그인"}</button>
                    </div>
                    <div className="sign_button">
                        <button className="si_button" onClick={onSignup}>회원가입</button>
                    </div>
                </div>
            </div>
            <div className="medium">
                <div className="middle">
                    <div className="medium_img">
                        <img className="img" src={Main_logo} width="300px" height="100%"></img>
                    </div>
                    <div className="header_title">
                        <h1>노인을 위한 교육!</h1>
                        <h1>원하는 분류를 눌러 다양한 영상을 보세요~!</h1>
                    </div>
                </div>
            </div>
            <div className="subject">
                <div className="subject-inline1">
                    <div className="name1">
                        <div className="sizeup">요리</div>
                        <h2> - 손자와 함께 하기 좋은 요리</h2>
                        <h2> - 가족들과 함께 하고 싶은 요리</h2>
                        <button>보러가기</button>
                    </div>
                    <div className="image">
                        <img src={cook1} width="100%" hegiht="100%"></img>   
                    </div>
                </div>
            </div>
            <div className="subject">
                <div className="subject-inline2">
                    <div className="image1">
                        <img src={cook1} width="100%" hegiht="100%"></img>   
                    </div>
                    <div className="name">
                        <div className="sizeup">건강</div>
                        <h2> - 치매 예방이 도움이 되는 강의</h2>
                        <h2> - 집에서 따라하기 좋은 스트레칭</h2>
                        <button>보러가기</button>
                    </div>
                </div>
            </div>
            <div className="subject">
                <div className="subject-inline3">
                    <div className="name1">
                        <div className="sizeup">언어</div>
                        <h2> - 매일매일 하나씩 알아가는 언어</h2>
                        <h2> - 바른 한글 길잡이</h2>
                        <button>보러가기</button>
                    </div>
                    <div className="image">
                        <img src={cook1} width="100%" hegiht="100%"></img>   
                    </div>
                </div>
            </div>
            <div className="subject">
                <div className="subject-inline">
                    <div className="image1">
                        <img src={cook1} width="100%" hegiht="100%"></img>   
                    </div>
                    <div className="name">
                        <div className="sizeup">음악</div>
                        <h2> - 그 시절 우리의 노래</h2>
                        <h2> - 어르신들을 위한 음악교실</h2>
                        <button>보러가기</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Main;
