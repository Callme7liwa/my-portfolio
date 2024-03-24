import { useState } from "react"
import Images from "../Images"

const Projects = ({mode}) => {

    const [showMoreInfo , setShowMoreInfo] = useState(false);
    const [showImage , setShowImage] = useState(false);
    const [currentImage , setCurrentImage] = useState(null);
    const [currentProject , setCurrentProject] = useState(null);


    const listProjects = [
        {
          image : Images.web_dev_12, 
          name  : "DoneIt",
          description :  "A small application for managing tasks for its users. The objective of this project is to become familiar with the .NET environment and to explore how to implement microservices using this technology. Similarly, for the frontend part, I took the opportunity to see how 3D animations work with Three.js.",
          technologies : ["ASP.NET","REACTJS","THREE JS","Java","Microservices","JWT","git","github"],
          duration : "Jan.2024 - Feb.2024",
          images : [Images.tasks_1,Images.tasks_2,Images.tasks_3,Images.tasks_4,Images.tasks_5,Images.tasks_6,Images.tasks_7]
        },
        {
          image : Images.web_dev_11 , 
          name  : "DeliverEase",
          description : "The main objective is to leverage this opportunity by developing an innovative mobile application that connects parcel senders with individuals traveling to the same destination where the parcel needs to be delivered. This approach will improve the efficiency and speed of deliveries while reducing costs.",
          technologies : ["Flutter","Spring Boot","Dart","Java","Jira","git","github"],
          duration : "Jan.2024 - Feb.2024",
          images : [Images.deliver_1,Images.deliver_2,Images.deliver_3,Images.deliver_4,Images.deliver_5,Images.deliver_6,Images.deliver_7,Images.deliver_9,Images.deliver_10,Images.deliver_11]
        },
        {
          image : Images.web_dev_10 , 
          name  : "TeamUp",
          description : "Developed a groundbreaking mobile application aimed at bringing together street football teams and players. The app streamlines the process of finding opponents for teams and provides players with an easy way to discover teams to join. Key features include team-initiated match requests and the ability for teams to announce openings that interested players can sign up for. This dynamic platform transforms match organization and strengthens the community of street football enthusiasts.",
          technologies : ["Flutter","Spring Boot","Dart","Java","Jira","git","github"],
          duration : "Current Working",
          images : [Images.foot_10,Images.foot_11]
        },
      
       
        {
          image : Images.web_dev_6,
          name : "Streaming Pro",
          description : "As part of my ongoing professional development, I am working on a new iteration of a full-stack web development project that I previously completed. The project involves creating an audio streaming platform with advanced marketing capabilities, using a different set of technologies than the previous version. I am developing the platform using a variety of languages and frameworks, including React.js, Spring boot and MongoDB, and incorporating new features such as user analytics, custom branding options, and targeted advertising. This project is being undertaken in conjunction with my other coursework and professional commitments, and is a testament to my ongoing dedication to staying up-to-date with the latest trends and technologies in web development .",
          duration : "Currently Working",
          technologies : ["java","spring boot","react js" , "redux" , "mongodb","dockers" , "git" , "github"],
          images : [Images.rap_1 , Images.rap_2,Images.rap_3,Images.rap_4,Images.rap_5,Images.rap_6,Images.rap_7,Images.rap_8,Images.rap_9,Images.rap_10]
        },
        {
          image : Images.mobil_dev_1,
          name : "Baby Monitoring",
          description : 
          "currently working on a baby monitoring project that utilizes Android Studio, Machine Learning (ML), and Internet of Things (IoT) technologies. The aim of this project is to develop a baby monitoring system that can detect baby behaviors using motion and temperature sensors, and send real-time alerts to a mobile application. This project provides an excellent opportunity for us to deepen our skills in Android app development, ML, and IoT, while contributing to improving the safety and well-being of babies",
          duration : "Feb.2023 - Jun.2023",
          technologies : ["java","android","arduino" , "redux" , "git" , "github"],
          images : [Images.baby_1,Images.baby_2,Images.baby_3,Images.baby_4,Images.baby_5,Images.baby_6]
        },
        {
          image : Images.web_dev_4,
          name : "School Mate",
          description : "I designed and developed a web-based school management application that provides a centralized solution for managing student data, teacher information, grades, and absences. My application allowed the school to effectively manage their academic processes, improve communication between students and teachers, and track student progress in real-time. I worked closely with the school administrators to understand their needs, which enabled me to design a user-friendly and intuitive interface that met their specific requirements.",
          duration : "oct.2022 - jan.2023",
          technologies : ["java","Jee","Servlets","Jsp","js" , "git" , "github"],
          images : [Images.school_1,Images.school_2,Images.school_3,Images.school_4,Images.school_5,Images.school_6,Images.school_7,Images.school_8,Images.school_9,Images.school_10,Images.school_11,Images.school_12]
        },
        {
          image : Images.web_dev_1,
          name : "Project Vision",
          description : "I designed and developed a web-based project management application for a company, offering a centralized solution for project planning, collaboration, and tracking. My application enabled the company to efficiently manage projects, improve communication and collaboration among team members, and track progress in real-time. I worked closely with team members to understand their needs, which allowed me to design a user-friendly and intuitive interface that met their specific requirements.",
          duration : "Jul.2022 - Aug.2022",
          technologies : ["java","spring boot","react js" , "redux" ,"git" , "github"],
          images : [Images.project_1,Images.project_2,Images.project_3,Images.project_4,Images.project_5,Images.project_6,Images.project_7,Images.project_8,Images.project_9,Images.project_10,Images.project_11,Images.project_12,Images.project_13,Images.project_14,Images.project_15,Images.project_16,Images.project_17,Images.project_18,Images.project_19,Images.project_20,Images.project_21,Images.project_22,Images.project_23,Images.project_24,Images.project_25,Images.project_26,Images.project_27,Images.project_28,Images.project_29]
        },
        {
          image : Images.web_dev_3,
          name : "Stream Merch",
          description : "I worked on an ambitious project to create a streaming platform for artists that also includes an online store for selling artist-related products. My project enabled artists to live stream their music, reach a wider audience, and sell their products directly to their fans. I collaborated with a multidisciplinary team to design a user-friendly interface that provides an optimal user experience while allowing artists to easily manage their content and sales. My project was a great success, allowing artists to generate additional revenue through the sale of products related to their music while offering fans a unique music streaming experience.",
          duration : "march.2022 - Jun.2022",
          technologies : ["php","laravel","react js" , "redux" , "mysql", "git" , "github"],
          images : [Images.stream_1,Images.stream_2,Images.stream_3,Images.stream_4,Images.stream_5,Images.stream_6,Images.stream_8,Images.stream_9,Images.stream_10,Images.stream_11,Images.stream_12,Images.stream_13,Images.stream_14,Images.stream_15,Images.stream_16]
        },
        {
          image : Images.web_dev_2,
          name : "Patrimoine Maghreb",
          description : "i had the honor of working on a project that focused on the management of moroccan cultural heritage, aiming to preserve and promote the country's cultural treasures. as a web developer, i worked closely with experts in cultural heritage to create an interactive and educational platform for visitors from around the world. this platform allowed users to explore historical sites, museums, and cultural events through photos, videos, and detailed descriptions. it also provided practical information to help visitors plan their trips. through this project, i was able to contribute to the preservation of morocco's cultural heritage and promote its cultural tourism across the globe.",
          technologies : ["php","laravel","react js" , "redux" , "mysql", "git" , "github"],
          duration : "may.2021 - jun.2021",
          images : [Images.patri_1,Images.patri_2,Images.patri_3,Images.patri_4,Images.patri_5,Images.patri_6,Images.patri_7,Images.patri_8,Images.patri_9,Images.patri_10,Images.patri_11,Images.patri_12,Images.patri_13,Images.patri_14,Images.patri_15,Images.patri_16,Images.patri_17,Images.patri_18]
        },
        {
          image : Images.web_dev_8 , 
          name  : "IT Equipment Keeper",
          description : "The IT Department Equipment Management project involves the development of a desktop application to manage the inventory and operations of a warehouse that stores various IT equipment such as computers, printers, servers, and other hardware devices. The application aims to provide an efficient solution for managing the equipment inventory, tracking equipment usage, maintenance schedules, and ordering new equipment as necessary. The application is designed to be user-friendly, with features such as equipment categorization, search, and reporting capabilities to allow IT department staff to easily manage the warehouse operations. The goal of the project is to optimize the IT department's equipment management processes, reduce equipment downtime, and ensure the smooth functioning of the organization's IT infrastructure.",
          technologies : ["php","laravel","Html" , "css pure" , "jquery", "js", "git" , "github"],
          duration : "feb.2021 - march.2021",
        },
        {
          image : Images.web_dev_9 , 
          name  : "GeoHeritage",
          description : "This project involves developing a web application that will showcase the history, geography, and monuments of a region, country, or even the entire world. The application will provide detailed information on each historical monument or tourist site, interactive maps to help users locate the sites, and images to illustrate the monuments and their history. It will also allow users to plan guided tours, share comments and photos, and discover additional information about the featured sites. The goal is to provide an educational and engaging platform for history enthusiasts and tourists.",
          technologies : ["php","Html" , "css pure" , "jquery", "js", "git" , "github"],
          duration : "oct. 2020 - jan. 2021",
        },
    ]

    const ShowImage = () => {
        return(
            <div className="pop-up-image-container">
                <div className="pop-up-image-content">
                    <i className="fa fa-times" onClick={()=>setShowImage(!showImage)}></i>
                    <img src={currentImage} />
                </div>
            </div>
        )
    }
      
    const ShowMoreInfo = () => {
        return (
            <>
               {showImage == true ?  <ShowImage /> : <> </>}
                <div className="pop-up-moreinfo-container">
                    <div className="pop-up-moreinfo-content">
                        <i className="fa fa-times" onClick={()=>setShowMoreInfo(!showMoreInfo)}></i>
                        <div className="list-technologies">
                            <div className="title"><img  src={Images.flash_back_icon}/> <span>List of technologies</span> </div>
                            {
                                currentProject?.technologies?.map(technologie=>(
                                    <span > {technologie} </span>
                                ))
                            }
                        </div>
                        <div className="list-technologies list-images-container">
                            <div className="title" ><img  src={Images.images_icon}/> <span>Images</span> </div>
                            <div className="list-images-content">
                                {
                                    currentProject?.images?.map(image=>(
                                        <img src={image}  onClick={()=>{setShowImage(!showImage);setCurrentImage(image)}}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    const RenderProject = ({item}) => {
        return (
          <div className={`${mode==1 ? 'project-item-light' : ''} project-item`}>
              <div className="image-container">
                <img src={item.image} />
              </div>
              <div className="project-information">
                <div className={`${mode==1 ? 'text-light' : ''} project-name `}><img src={Images.project_name_icon} /><span>{item.name}</span></div>
                <div className="project-description">
                  <img src={Images.flash_back_icon} />
                  <span className={`${mode==1 ? 'text-light' : ''} `}>
                    {item.description}
                  </span>
                  <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
                </div>
                <div className="project-duration">
                  <img src={Images.period_icon} />
                  <div>
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.duration}
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="project-action">
                <span className={`${mode==1 ? 'light-blue' : ''} clickable`} onClick={()=>{setCurrentProject(item);setShowMoreInfo(true)}}><i className="fa fa-angle-right"></i> More </span>
              </div>
          </div>
        )
    }

    const RenderProjects = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title" >
                    <img src={Images.project_icon}  className={`${mode==1 ? 'light-border-blue' : ''} `}/>
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Projects  </span>
                </div>
                <div className="list-projects">
                    {listProjects.map((item,index)=>(
                      <RenderProject item={item} key={index} />
                    ))}
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }


    return (
        <>
        {showMoreInfo === true ? <ShowMoreInfo /> : <></>}
        <div id="projects" className="body-container bodysecond-container ">
            {/*  */}
            <RenderProjects />
        </div>
        </>
    )
  }

  export default Projects;