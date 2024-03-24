import Images from "../Images";

const Experiences = ({mode}) => {
    
    const listExepriences = [
        {
          image: Images.logo_ge,
          name: "General Electric Vernova",
          title: "DEVSECOPS Engineering Intern - France",
          mission: "Web Development and Release Automation",
          description: "Setting up a CI/CD build pipeline in accordance with central team recommendations, and documenting the process to facilitate maintenance and evolution of the CI/CD pipeline. Participating in the development of applications (backend and frontend).",
          period: "Mar. 2024 - Present · 1+ month",
        },
        {
          image : Images.bk_logo,
          name  : "Burger King",
          title : "Versatile Team Member - France",
          mission : "Enhancing customer experience through efficient transactions and precise order preparation as a versatile team member",
          description : "elivering exceptional customer service by efficiently handling transactions, preparing accurate orders, and maintaining a clean work environment as a versatile team member. Committed to ensuring a seamless and positive experience for customers, contributing to the overall success of the team.",
          period : "Sept. 2023 - Feb. 2024 · 5 month",
        },
        {
          image : Images.alkhayam_cars,
          name  : "Alkhaym Cars",
          title : "Full Stack Enginner Intern- Maroc",
          mission : "Design and Implementation of a platform to manage all aspects of reservation projects, from planning to delivery.",
          description : "Developing a mobile application for a car rental agency, streamlining the reservation process, and providing quick access to a variety of vehicles.",
          period : "Jul. 2022 - Aug 2023 · 2 month",
          technologies : ["figma","flutter","laravel","redux","git","github","uml"]
        },
        {
          image : Images.elr12_logo,
          name  : "Elr12",
          title : "Full Stack Enginner Intern - Maroc",
          mission : "Design and Implementation of a Project Management Application.",
          description : "I developed a custom web-based project management application for a company, providing an end-to-end solution for planning, collaborating, and overseeing projects. With an intuitive and user-friendly interface, team members can easily track tasks, deadlines, and budgets while staying informed of real-time updates. This application has enabled productivity optimization and improved communication among team members, resulting in more efficient and effective project delivery.",
          period : "Jul. 2022 - Aug 2022 · 2 month",
          technologies : ["java","spring boot","mongodb","react js","redux","git","github","uml"]
        },
        {
          image : Images.logo_fst,
          name  : "Faculty of Sciences and Techniques of Fes - Maroc",
          title : "Full Stack Enginner Intern",
          mission : "Development and design of a web platform for Moroccan heritage management",
          description : "This end-of-studies project, carried out within the LSIA (laboratory Intelligent Systems and applications), had as its objective , the implementation of a management system for the  Moroccan cultural heritage. This system aims to automate the registration, querying and accessing information mainly concerning the categories of the following heritage: historic buildings, archaeological sites and cultural objects. " ,
          period : "mai 2021 - Jun 2021 · 2 month",
          technologies : ["php","laravel","js","jquery","mysql","uml"]
        },
        {
          image : Images.macdo_logo,
          name  : "Macdonald's",
          title : "Versatile Team Member - Maroc",
          mission : "Enhancing customer experience through efficient transactions and precise order preparation as a versatile team member",
          description : "elivering exceptional customer service by efficiently handling transactions, preparing accurate orders, and maintaining a clean work environment as a versatile team member. Committed to ensuring a seamless and positive experience for customers, contributing to the overall success of the team.",
          period : "Jun. 2019 - Sept. 2020 · 3+ months",
        },
      ];

    const RenderExperience = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title ">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.image}  className=""/>
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.name} | {item.title}
                    </span>
                    <span>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
             
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.mission}
                  </span>
                  <div className={`${mode==1 ? 'text-light' : ''} experience-description  `}>
                     {item.description}
                  </div>
                  <div className="list-specialities">
                      {
                        item?.technologies?.map((technoogy,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{technoogy}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderExperiences = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title item-title">
                    <img src={Images.experience_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Experiences  </span>
                </div>
                <div className="list-formations">
                  {
                    listExepriences.map((item,index)=>(
                      <RenderExperience item={item} key={index}/>
                    ))
                  }
                </div>
            </div>
      )
    }

    return (
      <div id="experiences" className="body-container bodysecond-container">
            {/*  */}
            <RenderExperiences />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    )
  }

  export default Experiences ; 