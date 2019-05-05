import experiences from "../data/experiences.json";
import formations from "../data/formations.json";

export default {
  sections: [{
      title: {
        fr: "À propos",
        en: "About"
      },
      icon: "fas fa-info-circle",
      key: "apropos",
      body: {
        fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla nisl. Pellentesque massa dolor, imperdiet a sodales id, elementum non lacus. Aenean blandit enim felis, eu condimentum enim euismod at. Nulla gravida mi quis mauris tincidunt viverra. Curabitur egestas, mauris in suscipit scelerisque, orci erat tempus felis, nec commodo tortor magna at ipsum.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla nisl. Pellentesque massa dolor, imperdiet a sodales id, elementum non lacus. Aenean blandit enim felis, eu condimentum enim euismod at. Nulla gravida mi quis mauris tincidunt viverra. Curabitur egestas, mauris in suscipit scelerisque, orci erat tempus felis, nec commodo tortor magna at ipsum."
      },
      cards: []
    },
    {
      title: {
        fr: "Portfolio",
        en: "Portfolio"
      },
      icon: "fas fa-folder",
      key: "projects",
      body: {
        fr: "<a href='#'>Mon portfolio</a>",
        en: "<a href='#'>My portfolio</a>"
      },
      cards: []
    },
    {
      title: {
        fr: "Expériences professionnelles",
        en: "Profesional experiences"
      },
      icon: "fas fa-check-square",
      key: "experiences",
      body: "",
      cards: experiences
    },
    {
      title: {
        fr: "Formations",
        en: "Formations"
      },
      icon: "fas fa-graduation-cap",
      key: "formations",
      body: "",
      cards: formations
    }
  ]
};