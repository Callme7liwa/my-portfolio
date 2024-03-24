import Images from "../Images";

const Welcome = ({mode,handleClick,emailAddress}) => {

    const BodyLeft = () => {

      // const emailAddress = 'ayoubseddiki132@gmail.com'

      // const handleEmailClick = () => {
      //   const mailtoLink = `mailto:${emailAddress}`;
      //   window.open(mailtoLink);
      // };

      return(
        <div className="body_left-container">
          <div className="left_content-first">
            <div>
              <span className={`${mode===1 ? "light-blue" : ""} function`}> /* Software Enginner */ </span>
            </div>
            <div>
              <span className={`${mode==1 ? 'text-light' : ''}`}> Talk is cheap .</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}>
                Show me the code &nbsp;
                <span className={`${mode==1 ? 'text-blue' : ''} operator`}>&lt; /&gt; .</span>
              </span>
              <span className={`${mode==1 ? 'light-bare' : 'dark-bare'} `}>
                I am passionate about software development and design, and enjoy
                creating simple and elegant solutions that meet the needs of
                users. I am constantly striving to improve my skills and
                expertise in development and design to deliver high-quality
                software products.
              </span>
            </div>
            <div className="contact-me-container">
               <span className={`${mode==1 ? 'light' : ''} contact-me-content`}>
                  <span ><i className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope`}/></span>
                  <span className={`${mode==1 ? 'text-light' : ''} email`}> 
                    <i className="fa fa-long-arrow-right"></i>
                     {emailAddress}
                    <i className="fa fa-long-arrow-left"></i>
                  </span>
                  <span onClick={handleClick} className={`${mode==1 ? 'light-blue' : ''}`}>contact me  <i className="fa fa-angle-right"></i></span>
               </span>
            </div>
          </div>
        </div>
      )
    }

    const BodyRight = () => {
      return (
        <div className="body_right-container">
          <div className="image-container">
              <img src={Images.image_principal} />
          </div>
          <div className="list-technos">
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.post_man} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.git_hub} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
          </div>
        </div>
      )
    }

    return (
      <div className="page_body-container">
        <BodyLeft />
        <BodyRight />
        <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    );
  };

  export default Welcome; 