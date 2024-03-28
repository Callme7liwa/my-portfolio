import Images from "../Images"

const PersonalInformation = ({mode}) => {

  const myInformations = [
    {
      name: "Anniversaire",
      image: Images.birthday_icon,
      value: "01-11-2000",
    },
    {
      name: "Nationalité",
      image: Images.nationality_icon,
      value: "Marocaine",
    },
    {
      name: "Pays - Ville",
      image: Images.city_icon,
      value: "France - Aubière",
    },
    {
      name: "Adresse",
      image: Images.location_icon,
      value: "15 rue Roche Genès",
    },
    {
      name: "État civil",
      image: Images.formation_icon,
      value: "Célibataire"
    }
    
  ];
  
  const listFormations = [
    {
      universityImage: Images.isima_logo,
      universityName: "Institut Supérieur d'Informatique, de Modélisation et de leurs Applications - France",
      title: "Double d'Ingénieur d'etat - Génie Logiciel et systemes informatiques",
      period: "sept. 2023 - sept. 2025",
      comptences: ["html", "php", "java", "c#", "architectures logicielles", "conception de systèmes", "Docker", "Kubernetes", "Git"]
    },
    {
      universityImage: Images.ensias_logo,
      universityName: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes - Maroc",
      title: "Diplôme d'Ingénieur d'etat - IDSIT: DATA SCIENCE & IOT",
      period: "sept. 2021 - juil. 2025",
      comptences: ["html", "php", "java", ".net", "android", "structures de données", "jee", "js", "uml", "merise", "sql", "sql server", "oracle database", "administration Windows", "administration Unix", "méthodes agiles", "analyse de données", "entrepôt de données", "Git"]
    },
    {
      universityImage: Images.logo_fst,
      universityName: "Faculté des Sciences et Techniques - Maroc ",
      title: "Licence en Génie Informatique",
      period: "sept. 2020 - juil. 2021",
      comptences: ["html", "css", "js", "php", "java", "C++", "Swing", "sql", "Uml", "merise", "tcp/ip", "unix"]
    },
    {
      universityImage: Images.logo_fst,
      universityName: "Faculté des Sciences et Techniques - Maroc",
      title: "Diplôme d'Études Universitaires Scientifiques et Techniques (DEUST) - Mathématiques, Informatique et Physique",
      period: "sept. 2018 - juil. 2020",
      comptences: ["Algorithmes", "C", "Analyse mathématique", "Algèbre linéaire", "Arduino"]
    }
  ];
  

    const RenderItemInfo = ({item}) => {
      return (
        <>
            <div className={`${mode==1 ? 'line-light' : ''} line`}></div>
            <div className="info-item">
              <span className={`${mode==1 ? 'text-light' : ''}`}> <img src={item.image}/> {item.name}</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}> {item.value}</span>
            </div>
        </>
      )
    }

    const ListInfo = () => {
      return (
        <div className="list-info">
          {
            myInformations.map((item,index)=>(
              <RenderItemInfo item={item} key={index} />
            ))
          }
        </div>
      )
    }

    const RenderMyInfo = () => {
      return (
        <div className="bodysecond-left">
            <div className={`${mode==1 ? 'light-border-blue' : ''} image-container `}>
              <img src={Images.profile_image} />
            </div>
            <ListInfo />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
        </div>
      )
    }

    const RenderFormation = ({item}) => {
      return (
        <div className="formation-item exp-item">
              <div className="item-title">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.universityImage} />
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.universityName}
                    </span>
                    <span className={`${mode==1 ? 'period-light' : ''} `}>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    {/* <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i> */}
                    <img src={Images.logo_education} className="logo-education" />
                    {item.title}
                  </span>
                  <div className="list-specialities">
                      {
                        item?.comptences?.map((competence,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{competence}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderFormations = () => {
      return (
            <div id="formations" className="body-container bodysecond-right">
                <div className="body-title">
                    <img src={Images.formation_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Formation </span>
                </div>
                <div className="list-formations">
                  {
                    listFormations.map(item=>
                      <RenderFormation item={item} />
                    )
                  }
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderMyInfo />
            <RenderFormations  />
      </div>
    )
  }

  export default PersonalInformation; 