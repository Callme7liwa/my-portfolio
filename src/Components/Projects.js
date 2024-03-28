import { useState } from "react"
import Images from "../Images"

const Projects = ({mode}) => {

    const [showMoreInfo , setShowMoreInfo] = useState(false);
    const [showImage , setShowImage] = useState(false);
    const [currentImage , setCurrentImage] = useState(null);
    const [currentProject , setCurrentProject] = useState(null);


    const listProjects = [
      {
        image: Images.web_dev_12,
        name: "DoneIt",
        description: "Une petite application pour gérer les tâches de ses utilisateurs. L'objectif de ce projet est de se familiariser avec l'environnement .NET et d'explorer comment implémenter des microservices en utilisant cette technologie. De même, pour la partie frontend, j'ai saisi l'occasion pour voir comment fonctionnent les animations 3D avec Three.js.",
        technologies: ["ASP.NET", "REACTJS", "THREE JS", "Java", "Microservices", "JWT", "git", "github"],
        duration: "Janv. 2024 - Fév. 2024",
        images: [Images.tasks_1, Images.tasks_2, Images.tasks_3, Images.tasks_4, Images.tasks_5, Images.tasks_6, Images.tasks_7]
      },
      {
        image: Images.web_dev_11,
        name: "DeliverEase",
        description: "L'objectif principal est de tirer parti de cette opportunité en développant une application mobile innovante qui connecte les expéditeurs de colis avec des particuliers voyageant vers la même destination où le colis doit être livré. Cette approche améliorera l'efficacité et la rapidité des livraisons tout en réduisant les coûts.",
        technologies: ["Flutter", "Spring Boot", "Dart", "Java", "Jira", "git", "github"],
        duration: "Janv. 2024 - Fév. 2024",
        images: [Images.deliver_1, Images.deliver_2, Images.deliver_3, Images.deliver_4, Images.deliver_5, Images.deliver_6, Images.deliver_7, Images.deliver_9, Images.deliver_10, Images.deliver_11]
      },
      {
        image: Images.web_dev_10,
        name: "TeamUp",
        description: "Développement d'une application mobile révolutionnaire visant à rassembler les équipes de football de rue et les joueurs. L'application simplifie le processus de recherche d'adversaires pour les équipes et offre aux joueurs un moyen facile de trouver des équipes à rejoindre. Les principales fonctionnalités incluent les demandes de match initiées par l'équipe et la possibilité pour les équipes d'annoncer des ouvertures auxquelles les joueurs intéressés peuvent s'inscrire. Cette plateforme dynamique transforme l'organisation des matchs et renforce la communauté des passionnés de football de rue.",
        technologies: ["Flutter", "Spring Boot", "Dart", "Java", "Jira", "git", "github"],
        duration: "Travail en cours",
        images: [Images.foot_10, Images.foot_11]
      },
      {
        image: Images.web_dev_6,
        name: "Streaming Pro",
        description: "Dans le cadre de mon développement professionnel continu, je travaille sur une nouvelle itération d'un projet de développement web full-stack que j'ai déjà réalisé. Le projet implique la création d'une plateforme de streaming audio avec des capacités de marketing avancées, en utilisant un ensemble de technologies différent de la version précédente. Je développe la plateforme en utilisant une variété de langages et de frameworks, dont React.js, Spring Boot et MongoDB, et j'incorpore de nouvelles fonctionnalités telles que l'analyse utilisateur, des options de branding personnalisées et de la publicité ciblée. Ce projet est entrepris en parallèle de mes autres travaux universitaires et professionnels, et témoigne de mon engagement continu à rester à jour avec les dernières tendances et technologies en développement web.",
        duration: "Travail en cours",
        technologies: ["java", "spring boot", "react js", "redux", "mongodb", "dockers", "git", "github"],
        images: [Images.rap_1, Images.rap_2, Images.rap_3, Images.rap_4, Images.rap_5, Images.rap_6, Images.rap_7, Images.rap_8, Images.rap_9, Images.rap_10]
      },
      {
        image: Images.mobil_dev_1,
        name: "Baby Monitoring",
        description: "Travail en cours sur un projet de surveillance des bébés utilisant Android Studio, l'apprentissage automatique (ML) et les technologies Internet des objets (Io    T). L'objectif de ce projet est de développer un système de surveillance des bébés capable de détecter les comportements des bébés à l'aide de capteurs de mouvement et de température, et d'envoyer des alertes en temps réel à une application mobile. Ce projet offre une excellente opportunité de renforcer nos compétences en développement d'applications Android, en ML et en IoT, tout en contribuant à améliorer la sécurité et le bien-être des bébés.",
        duration: "Fév. 2023 - Juin 2023",
        technologies: ["java", "android", "arduino", "redux", "git", "github"],
        images: [Images.baby_1, Images.baby_2, Images.baby_3, Images.baby_4, Images.baby_5, Images.baby_6]
      },
      {
        image: Images.web_dev_4,
        name: "School Mate",
        description: "J'ai conçu et développé une application de gestion scolaire basée sur le web qui offre une solution centralisée pour gérer les données des élèves, les informations des enseignants, les notes et les absences. Mon application a permis à l'école de gérer efficacement ses processus académiques, d'améliorer la communication entre les élèves et les enseignants, et de suivre les progrès des élèves en temps réel. J'ai travaillé en étroite collaboration avec les administrateurs de l'école pour comprendre leurs besoins, ce qui m'a permis de concevoir une interface conviviale et intuitive répondant à leurs exigences spécifiques.",
        duration: "Oct. 2022 - Janv. 2023",
        technologies: ["java", "Jee", "Servlets", "Jsp", "js", "git", "github"],
        images: [Images.school_1, Images.school_2, Images.school_3, Images.school_4, Images.school_5, Images.school_6, Images.school_7, Images.school_8, Images.school_9, Images.school_10, Images.school_11, Images.school_12]
      },
      {
        image: Images.web_dev_1,
        name: "Project Vision",
        description: "J'ai conçu et développé une application de gestion de projet basée sur le web pour une entreprise, offrant une solution centralisée pour la planification, la collaboration et le suivi des projets. Mon application a permis à l'entreprise de gérer efficacement ses projets, d'améliorer la communication et la collaboration entre les membres de l'équipe, et de suivre les progrès en temps réel. J'ai travaillé en étroite collaboration avec les membres de l'équipe pour comprendre leurs besoins, ce qui m'a permis de concevoir une interface conviviale et intuitive répondant à leurs exigences spécifiques.",
        duration: "Juill. 2022 - Août 2022",
        technologies: ["java", "spring boot", "react js", "redux", "git", "github"],
        images: [Images.project_1, Images.project_2, Images.project_3, Images.project_4, Images.project_5, Images.project_6, Images.project_7, Images.project_8, Images.project_9, Images.project_10, Images.project_11, Images.project_12, Images.project_13, Images.project_14, Images.project_15, Images.project_16, Images.project_17, Images.project_18, Images.project_19, Images.project_20, Images.project_21, Images.project_22, Images.project_23, Images.project_24, Images.project_25, Images.project_26, Images.project_27, Images.project_28, Images.project_29]
      },
      {
        image: Images.web_dev_3,
        name: "Stream Merch",
        description: "J'ai travaillé sur un projet ambitieux visant à créer une plateforme de streaming pour les artistes qui inclut également une boutique en ligne pour vendre des produits liés à l'artiste. Mon projet a permis aux artistes de diffuser en direct leur musique, d'atteindre un public plus large et de vendre leurs produits directement à leurs fans. J'ai collaboré avec une équipe multidisciplinaire pour concevoir une interface conviviale qui offre une expérience utilisateur optimale tout en permettant aux artistes de gérer facilement leur contenu et leurs ventes. Mon projet a été un grand succès, permettant aux artistes de générer des revenus supplémentaires grâce à la vente de produits liés à leur musique tout en offrant aux fans une expérience de streaming musical unique.",
        duration: "Mars 2022 - Juin 2022",
        technologies: ["php", "laravel", "react js", "redux", "mysql", "git", "github"],
        images: [Images.stream_1, Images.stream_2, Images.stream_3, Images.stream_4, Images.stream_5, Images.stream_6, Images.stream_8, Images.stream_9, Images.stream_10, Images.stream_11, Images.stream_12, Images.stream_13, Images.stream_14, Images.stream_15, Images.stream_16]
      },
      {
        image: Images.web_dev_2,
        name: "Patrimoine Maghreb",
        description: "J'ai eu l'honneur de travailler sur un projet axé sur la gestion du patrimoine culturel marocain, visant à préserver et à promouvoir les trésors culturels du pays. En tant que développeur web, j'ai travaillé en étroite collaboration avec des experts du patrimoine culturel pour créer une plateforme interactive et éducative pour les visiteurs du monde entier. Cette plateforme permettait aux utilisateurs d'explorer les sites historiques, les musées et les événements culturels à travers des photos, des vidéos et des descriptions détaillées. Elle fournissait également des informations pratiques pour aider les visiteurs à planifier leurs voyages. Grâce à ce projet, j'ai pu contribuer à la préservation du patrimoine culturel du Maroc et à la promotion du tourisme culturel à travers le monde.",
        technologies: ["php", "laravel", "react js", "redux", "mysql", "git", "github"],
        duration: "Mai 2021 - Juin 2021",
        images: [Images.patri_1, Images.patri_2, Images.patri_3, Images.patri_4, Images.patri_5, Images.patri_6, Images.patri_7, Images.patri_8, Images.patri_9, Images.patri_10, Images.patri_11, Images.patri_12, Images.patri_13, Images.patri_14, Images.patri_15, Images.patri_16, Images.patri_17, Images.patri_18]
      },
      {
        image: Images.web_dev_8,
        name: "IT Equipment Keeper",
        description: "Le projet de gestion de l'équipement du département informatique implique le développement d'une application de bureau pour gérer l'inventaire et les opérations d'un entrepôt stockant divers équipements informatiques tels que des ordinateurs, des imprimantes, des serveurs et d'autres dispositifs matériels. L'application vise à fournir une solution efficace pour gérer l'inventaire des équipements, suivre l'utilisation des équipements, les calendriers de maintenance et commander de nouveaux équipements si nécessaire. L'application est conçue pour être conviviale, avec des fonctionnalités telles que la catégorisation des équipements, la recherche et des capacités de reporting pour permettre au personnel du département informatique de gérer facilement les opérations de l'entrepôt. L'objectif du projet est d'optimiser les processus de gestion de l'équipement du département informatique, de réduire les temps d'arrêt de l'équipement et d'assurer le bon fonctionnement de l'infrastructure informatique de l'organisation.",
        technologies: ["php", "laravel", "Html", "css pure", "jquery", "js", "git", "github"],
        duration: "Fév. 2021 - Mars 2021",
      },
      {
        image: Images.web_dev_9,
        name: "GeoHeritage",
        description: "Ce projet implique le développement d'une application web qui présentera l'histoire, la géographie et les monuments d'une région, d'un pays ou même du monde entier. L'application fournira des informations détaillées sur chaque monument historique ou site touristique, des cartes interactives pour aider les utilisateurs à localiser les sites, et des images pour illustrer les monuments et leur histoire. Elle permettra également aux utilisateurs de planifier des visites guidées, de partager des commentaires et des photos, et de découvrir des informations supplémentaires sur les sites présentés. L'objectif est de fournir une plateforme éducative et engageante pour les amateurs d'histoire et les touristes.",
        technologies: ["php", "Html", "css pure", "jquery", "js", "git", "github"],
        duration: "Oct. 2020 - Janv. 2021",
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
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Projets  </span>
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