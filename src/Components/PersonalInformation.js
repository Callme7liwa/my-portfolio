import Images from "../Images"

const PersonalInformation = ({mode}) => {

    const myInformations = [
        {
          name : "Birthday",
          image : Images.birthday_icon,
          value : "01-11-2000",
        },
        {
          name : "Natonality",
          image : Images.nationality_icon,
          value : "Moroccan",
        },
        {
          name : "Country - City",
          image : Images.city_icon,
          value  : "France - Aubiere" , 
        },
        {
          name : "Location",
          image : Images.location_icon,
          value : "15 rue roche genes",
        },
        {
          name : "Civil State",
          image : Images.formation_icon,
          value : "Single"
        }
      ]

    const listFormations = [
    {
        universityImage : Images.isima_logo,
        universityName  : "Higher Institute of Computer Science, Modeling, and their Applications - France",
        title           : "Double Degree in Engineering - Software Engineering",
        period          : "sept. 2023 - sept. 2025",
        comptences      : ["html","php","java","c#","software architectures","systems design", "dockers", "kubernetes", "git"]
    },
    {
        universityImage : Images.ensias_logo,
        universityName  : "National School of Computer Science and Systems Analysis - Maroc",
        title           : "Engineering degree - IDSIT: DATA SCIENCE & IOT",
        period          : "sept. 2021 - juil. 2024",
        comptences      : ["html","php","java",".net","android","data structure","jee","js","uml","merise","sql","sql server","oracle database","windows administration" , "unix administration","agile methods","data analysis","data warehouse","Git"]
    },
    {
        universityImage : Images.logo_fst,
        universityName : "Faculty of Sciences and Techniques - Maroc ",
        title : "bachelor's degree - computer engineering",
        period          : "sept. 2021 - juil. 2024",
        comptences : ["html", "css","js","php","java","C++","Swing","sql","Uml","merise","tcp/ip","unix"],
    },
    {
        universityImage : Images.logo_fst,
        universityName : "Faculty of Sciences and Techniques - Maroc",
        title : "Diploma of scientific and technical university studies (DEUST) - Mathematics, Computer Science, and Physics",
        period          : "sept. 2021 - juil. 2024",
        comptences      : ["Algorithms" , "C" , "Mathematical Analysis" , "Linear algebra" , "Arduino"]
    }
    ]

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
        <div className="formation-item">
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
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
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
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Formations </span>
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