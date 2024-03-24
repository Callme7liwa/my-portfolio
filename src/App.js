import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Experiences from "./Components/Experiences";
import PersonalInformation from "./Components/PersonalInformation";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import Images from "./Images";
import Footer from "./Components/Footer";

function App() {

  const emailAddress = 'ayoubseddiki132@gmail.com'

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };

  const [mode , setMode] = useState(1);

  const navBarNavigations = [
    {
      name : "Formations",
      href : "#formations"
    },
    {
      name : "experiences",
      href : "#experiences"
    },
    {
      name : "projects",
      href : "#projects"
    },
  ]


  const Header = () => {

    const RenderItemNavBar = ({item}) => {
      return (
        <li className={`${mode==1 ? 'text-light' : ''}`}>
          <a className={`${mode==1 ? 'text-blue' : ''}operator`}>&lt; </a>
          <a href={item.href} className={`${mode==1 ? 'text-light' : 'text-white'}`}> {item.name} </a>
          <a className="operator text-blue"> / &gt; </a>
        </li>
      )
    }

    return (
      <div className="page_header-container">
        <div className="header_left-container">
          <span className={`${mode==1 ? 'text-blue' : ''}`}>&lt; / </span>
          <span className={`${mode==1 ? 'text-light' : ''}`}> Ayoub Seddiki </span>
          <span className={`${mode==1 ? 'text-blue' : ''}`}> &gt; </span>
        </div>
        <div className="header_center-container">
          {
            navBarNavigations.map((item,index)=>
                <RenderItemNavBar  item={item} key={index} />
              )
          }
        </div>
        <div className="header_right-container">
          <a href="https://github.com/Callme7liwa"><i className={`${mode==1 ? 'light-blue' : ''} fa fa-github `}></i></a>
          <span ><i onClick={handleSendEmail} className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope `}></i></span>
          <a href="https://twitter.com/callme7liwa"><i className={`${mode==1 ? 'light-blue' : ''} fa fa-twitter `}></i></a>
          <a href="https://www.linkedin.com/in/seddiki--ayoub/"><i className={`${mode==1 ? 'light-blue' : ''} fa fa-linkedin `}></i></a>
        </div>
        <div className="header-switch-mode"> 
          <div className="switch-content">
            <span className={`${mode===1 ? "light-active" : ""}`} onClick={()=>setMode(1)}>L</span>
            <span className={`${mode===0 ? "dark-active" : ""}`} onClick={()=>setMode(0)}>D</span>
          </div>
        </div>
      </div>
    );

  };



  return (
    <div className={`${mode===1 ? 'light-background' : ''} page-container`}>
      <Header />
      <div className="list-body">
        <Welcome handleClick={handleSendEmail} mode={mode}  emailAddress={emailAddress} />
        <PersonalInformation mode={mode} />
        <Experiences mode={mode}/>
        <Projects mode={mode}/>
        <AboutMe mode={mode}/>
        <Footer mode={mode} />
      </div>
    </div>
  );

}

export default App;
