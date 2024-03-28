import Images from "../Images";

const Experiences = ({mode}) => {
    
  const listExepriences = [
    {
      image: Images.logo_ge,
      name: "General Electric Vernova",
      title: "Stagiaire en Ingénierie DEVSECOPS - France",
      mission: "Développement Web et Automatisation des Livraisons",
      description: "Mise en place d'un pipeline de construction CI/CD conformément aux recommandations de l'équipe centrale et documentation du processus pour faciliter la maintenance et l'évolution du pipeline CI/CD. Participation au développement d'applications (backend et frontend).",
      period: "Mars 2024 - Présent · 1+ mois",
      technologies: ["githubaction", "aqua trivy", "kubernetes","terrafom", "aws", "sonarqube", "docker", "spring boot", "angular"]
    },
    {
      image: Images.bk_logo,
      name: "Burger King",
      title: "Membre Polyvalent de l'Équipe - France",
      mission: "Amélioration de l'expérience client grâce à des transactions efficaces et une préparation de commandes précise en tant que membre polyvalent de l'équipe",
      description: "Fournir un service client exceptionnel en traitant efficacement les transactions, en préparant des commandes précises et en maintenant un environnement de travail propre en tant que membre polyvalent de l'équipe. Engagé à assurer une expérience fluide et positive pour les clients, contribuant ainsi au succès global de l'équipe.",
      period: "Septembre 2023 - Février 2024 · 5 mois",
    },
    {
      image: Images.alkhayam_cars,
      name: "Alkhaym Cars",
      title: "Stagiaire Ingénieur Full Stack - Maroc",
      mission: "Conception et Implémentation d'une plateforme pour gérer tous les aspects des projets de réservation, de la planification à la livraison.",
      description: "Développement d'une application mobile pour une agence de location de voitures, rationalisant le processus de réservation et offrant un accès rapide à une variété de véhicules.",
      period: "Juillet 2022 - Août 2023 · 2 mois",
      technologies: ["figma", "flutter", "laravel", "redux", "git", "github", "uml"]
    },
    {
      image: Images.elr12_logo,
      name: "Elr12",
      title: "Stagiaire Ingénieur Full Stack - Maroc",
      mission: "Conception et Implémentation d'une Application de Gestion de Projets.",
      description: "Développement d'une application web sur mesure pour la gestion de projet, permettant une planification, une collaboration et un suivi efficaces. L'interface intuitive facilite le suivi des tâches, des délais et des budgets en temps réel, favorisant ainsi une productivité accrue et une meilleure communication au sein de l'équipe.",
      period: "Juillet 2022 - Août 2022 · 2 mois",
      technologies: ["java", "spring boot", "mongodb", "react js", "redux", "git", "github", "uml"]
    },
    {
      image: Images.logo_fst,
      name: "Faculté des Sciences et Techniques de Fès - Maroc",
      title: "Stagiaire Ingénieur Full Stack",
      mission: "Développement et conception d'une plateforme web pour la gestion du patrimoine marocain",
      description: "Ce projet de fin d'études, réalisé au sein du LSIA (laboratoire Systèmes Intelligents et applications), avait pour objectif la mise en œuvre d'un système de gestion du patrimoine culturel marocain. Ce système vise à automatiser l'enregistrement, la recherche et l'accès aux informations concernant principalement les catégories du patrimoine suivantes : bâtiments historiques, sites archéologiques et objets culturels.",
      period: "Mai 2021 - Juin 2021 · 2 mois",
      technologies: ["php", "laravel", "js", "jquery", "mysql", "uml"]
    },
    {
      image: Images.macdo_logo,
      name: "Macdonald's",
      title: "Membre Polyvalent de l'Équipe - Maroc",
      mission: "Amélioration de l'expérience client grâce à des transactions efficaces et une préparation de commandes précise en tant que membre polyvalent de l'équipe",
      description: "Fournir un service client exceptionnel en traitant efficacement les transactions, en préparant des commandes précises et en maintenant un environnement de travail propre en tant que membre polyvalent de l'équipe. Engagé à assurer une expérience fluide et positive pour les clients, contribuant ainsi au succès global de l'équipe.",
      period: "Juin 2019 - Septembre 2020 · 3+ mois",
    },
  ];
  
    const RenderExperience = ({item}) => {
      return (
        <div className="formation-item exp-item">
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
             
                  <span  className={`${mode==1 ? 'text-light' : ''} `}> 
                     <img src={Images.logo_intern} className="logo-education"/>
                     <span className={`${mode==1 ? 'text-light' : ''} `}>{item.mission}</span>
                  </span>
                  <div className={`${mode==1 ? 'text-light' : ''} experience-description  `}>
                     <div className="line"> </div>
                     <div>{item.description}</div>
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