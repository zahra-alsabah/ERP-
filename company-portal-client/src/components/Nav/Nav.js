import React , {useState,useEffect} from 'react'
import './Nav.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Nav = () => {

  const [coutner,setCounter ] = useState(1)

  const refresh=() => {
    setCounter(coutner+1)
  }

  useEffect(()=>{
    refresh()
  },[])

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Company-Portal
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              {localStorage.getItem('loggedIn') == 'true' ?
              <NavLink className="nav-link" to={`/profile/${JSON.parse(localStorage.getItem("user"))._id}`} exact>
              <i 
              className="far fa-clone">
              </i>Profile
            </NavLink>
            :
            <div></div>
            }
              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>
            <li className="nav-item">
              {localStorage.getItem('loggedIn') == 'true' ?
              <button className="nav-link" to="/login" style={{marginTop:".5rem",background:"none",color:"white",border:"none"}} exact onClick={()=>{
                localStorage.setItem('user',JSON.stringify({}))
                localStorage.setItem('loggedIn' , "fasle")
                localStorage.setItem('token','')
                window.location='http://localhost:3000/login'
              }}>
              <i 
              className="far fa-user">
              </i>Logout
            </button>  :
              <button className="nav-link" to="/login" exact style={{marginTop:".5rem",background:"none",color:"white",border:"none"}} onClick={()=>{
                window.location = 'http://localhost:3000/login'
              }}>
                <i 
                className="far fa-user">
                </i>Login
              </button> }
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Nav;