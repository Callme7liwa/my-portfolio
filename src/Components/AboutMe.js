import Images from "../Images"

const AboutMe = ({mode}) => {

  const listInfoAboutMe = [
    {
      image: Images.apprentissage,
      title: "Progrès dans l'apprentissage",
      description: "Je suis passionné par l'apprentissage continu et la croissance personnelle. Je cherche constamment de nouvelles compétences et connaissances que je peux acquérir pour améliorer mes capacités. J'aime relever de nouveaux défis et travailler dur pour les surmonter. Je crois que la clé du succès est la persévérance et la détermination. C'est pourquoi j'essaie de maximiser chaque instant de mon temps en restant productif et en apprenant quelque chose de nouveau chaque jour. Pour moi, il est important de rester engagé dans l'apprentissage continu et de rester à jour avec les dernières tendances et technologies pour améliorer mes compétences et offrir la meilleure qualité possible à mes projets."
    },
    {
      image: Images.design,
      title: "Passionné par la conception mobile et web",
      description: "Je suis passionné par la création d'interfaces utilisateur qui sont non seulement esthétiquement plaisantes, mais qui améliorent également l'expérience utilisateur. Ma démarche de conception consiste à créer des interfaces à partir de zéro pour chaque projet. Je crois que chaque projet est unique et mérite une attention particulière dans sa conception. Plutôt que d'utiliser des modèles préfabriqués, j'aime prendre le temps de comprendre les besoins et les préférences des utilisateurs pour créer une interface utilisateur unique et personnalisée qui répond à leurs exigences spécifiques. En travaillant de cette manière, je suis convaincu que je peux créer des interfaces utilisateur innovantes, élégantes et fonctionnelles."
    },
    {
      image: Images.reseaux_sociaux,
      title: "Réseaux sociaux",
      description: "EN PLUS DE MES COMPÉTENCES EN CONCEPTION ET DÉVELOPPEMENT WEB, JE SUIS ÉGALEMENT PASSIONNÉ PAR LE MARKETING NUMÉRIQUE ET LA GESTION DES RÉSEAUX SOCIAUX. J'AI UNE PAGE INSTAGRAM AVEC PLUS DE 60K ABONNÉS QUE J'AI CONSTRUITE À PARTIR DE ZÉRO. GRÂCE À CETTE EXPÉRIENCE, J'AI ACQUIS UNE SOLIDE COMPRÉHENSION DES STRATÉGIES DE MARKETING SUR LES RÉSEAUX SOCIAUX ET COMMENT CRÉER ET PROMOUVOIR UN CONTENU ENGAGEANT. JE SUIS FIÈRE DE MA CAPACITÉ À CRÉER DES CAMPAGNES PUBLICITAIRES RÉUSSIES ET À UTILISER LES DONNÉES ANALYTIQUES POUR AMÉLIORER LES PERFORMANCES DE MES COMPTES SUR LES RÉSEAUX SOCIAUX."
    },
  ];
  
    
    
    const RenderInformations = () => {
      
    const RenderInformationItem = ({item}) => {
      return (
        <div className={`${mode==1 ? 'project-item-light' : ''} project-item`}>
            <div className="image-container">
              <img src={item.image} />
            </div> 
            <div className="project-information">
                <div className={`${mode==1 ? 'text-light' : ''} project-name `}><img src={Images.title_icon} /><span>{item.title}</span></div> 
                <div className="project-description">
                  <img src={Images.more_icon} />
                  <span className={`${mode==1 ? 'text-light' : ''} `}>
                     {item.description}
                  </span>
                  <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
                </div>   
            </div> 
        </div>
      )
    }

      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.project_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> More About me    </span>
                </div>
                <div className="list-projects"> 
                  {
                    listInfoAboutMe.map(item=>(
                      <RenderInformationItem item={item} />
                    ))
                  }
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }

    return (
      <div className="body-container bodysecond-container">
        {/*  */}
        <RenderInformations />
      </div>
    )
  }

export default AboutMe;