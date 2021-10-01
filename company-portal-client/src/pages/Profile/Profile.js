import axios from 'axios';
import React,{useState,useEffect} from 'react';
import styles from '../../styles/NewsArticle.module.css';
import Calend from "../../components/Calendar/Calend";
import Calend2 from "../../components/Calendar/Calend2";

const Profile = (props) => {

  const [user,setUser] = useState({})
  useEffect(()=>{
   
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  return (
    <div className="container">
    
        <div>
          <div style={{display:"flex",alignItems:"center",border:"1px solid #ccc",background:"rgba(255,255,255,.9)",padding:"4%",borderRadius:"25px"}}>
            <img style={{width:"13vw",height:"25vh",borderRadius:"51%"}} src={user.imgUrl}></img>
            <div style={{textAlign:"left",marginLeft:"2rem"}}>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            <p>{user.department}</p>
            <span>{user.address}</span>
            </div>
            
          </div>

         
          <div style={{marginTop:"3%",display:"flex",alignItems:"center",border:"1px solid #ccc",background:"rgba(255,255,255,.9)",padding:"4%",borderRadius:"25px",minHeight:"45vh"}}>
            <div className="row"> 
          <div className="card text-center"  >
            <div className="card-body">
                <h5 className={styles.card_text}>Calendrier des vacanaces</h5>
                <div>  <Calend className={styles.calend} /></div>
            </div>
        </div>
        <div className="card text-center"  >
            <div className="card-body">
                <h5 className={styles.card_text}>Calendrier des deadlines</h5>
                <div>  <Calend2 className={styles.calend} /></div>
            </div>
        </div>
        </div>
          </div>
        </div>
        
    </div>
  )
}
export default Profile;