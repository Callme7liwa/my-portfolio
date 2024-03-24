import Images from "../Images";

const Footer = ({mode}) => {

    return (
        <div className="bodysecond-container footer-section">
            <div className="footer-section_top">
                <div className="element element_first">
                    <div className={`title ${mode==1 ? 'text-light light-title' : ''}`}>About</div>
                    <div className="list_info">
                        <a href="#formation"> 
                            <div> 
                                <img src={Images.checked} /> 
                                <span  className={`${mode==1 ? 'text-light light-title' : ''} `}>formation</span>
                            </div> 
                        </a>
                        <a href="#experiences"> 
                            <div> 
                                <img src={Images.checked} /> 
                                <span  className={`${mode==1 ? 'text-light light-title' : ''} `}>experiences</span>
                            </div> 
                        </a>
                        <a  href="#projects"> 
                            <div> 
                                <img src={Images.checked} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>projets</span>
                            </div> 
                        </a>
                    </div>
                </div>
                <div className="line-vertical-container">
                    <div className="line"></div>
                </div>
                <div className="element element_second">
                    <div className={` ${mode==1 ? 'text-light light-title' : ' '} title`}>Contact us</div>
                    <div className="list_info">
                        <a> 
                            <div> 
                                <img src={Images.icon_env} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>ayoubseddiki132@gmail.com</span>
                            </div> 
                        </a>
                        <a> 
                            <div> 
                                <img src={Images.icon_tele} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>+33 7 63 19 02 35</span>
                            </div> 
                        </a>
                        <a> 
                            <div> 
                                <img src={Images.location_icon} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>15 rue roche genes, 63170 aubiere</span>
                            </div> 
                        </a>
                    </div>
                </div>
                <div className="line-vertical-container">
                    <div className="line"></div>
                </div>
                <div className="element element_third">
                    <div className={`${mode==1 ? 'text-light light-title' : ' '} title`}>Technologies</div>
                    <div className="list_info">
                        <a> 
                            <div> 
                                <img src={Images.react_icon} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>React Js</span>
                            </div> 
                        </a>
                        <a> 
                            <div> 
                                <img src={Images.icon_css} /> 
                                <span className={`${mode==1 ? 'text-light light-title' : ''} `}>Css</span>
                            </div> 
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-section_bottom">
                <div className="section_left">
                    <img src={Images.copyright} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> &lt; Developped By Ayoub Seddiki /&gt; </span>
                </div>
            </div>
        </div>
    )
}

export default Footer ; 