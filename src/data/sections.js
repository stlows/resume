import experiences from "../data/experiences.json";
import formations from "../data/formations.json";

export default{
    "sections":[
        {
            "title":{
                "fr":"À propos",
                "en":"About"
            },
            "icon":"fas fa-info-circle",
            "key":"apropos",
            "body":{
                "fr":"Après l’obtention de son diplôme de l’Université de Montréal en actuariat, la passion de Vincent pour la technologie le rattrape et le fait changer de domaine. Sa curiosité, sa rigueur et son désir de vouloir trouver des solutions efficaces et simples font de lui un excellent programmeur. Vincent aime profiter de la vie. Entre deux lignes de code, vous le trouverez en randonnée à l’autre bout du monde, en chute libre dans le ciel, au chalet avec sa famille ou autour d’une bière avec des amis.",
                "en":"After graduating from the University of Montreal in Actuarial Science, Vincent's passion for technology caught up with him and changed his field. His curiosity, his rigor and his desire to find effective and simple solutions make him an excellent programmer. Vincent likes to enjoy life. Between two lines of code, you'll find him hiking on the other side of the world, free falling in the sky, at the cottage with his family or around a beer with friends."
            },
            "cards":[]   
        },
        {
            "title":{
                "fr":"Expériences et projets",
                "en":"Experiences and projects"
            },
            "icon":"fas fa-check-square",
            "key":"experiences",
            "body":"",
            "cards": experiences
        },
        {
            "title":{
                "fr":"Formations",
                "en":"Formations"
            },
            "icon":"fas fa-graduation-cap",
            "key":"formations",
            "body":"",
            "cards": formations
        }
    ]
}
