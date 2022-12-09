
const distance = 0;
const days = 0;

export default function useLanguage(langKey){
    let selectedLanguage = lang.languages.find(x => x.lang === langKey);
    if(selectedLanguage == undefined){
        selectedLanguage = lang.languages[0];
    }
    return {selectedLanguage};
}

const lang = {
    "languages":[
       {
          "lang":"en",
          "words":{
             "generateButton":"Generate Joke",
             "backButton":"Back",
             "whereIsSantaButton":"Where is Santa",
             "distanceSanta":"Santa is at {0} from you",
             "daysBeforeChristmas":"{0} before Christmas"
          }
       },
       {
          "lang":"us",
          "words":{
             "generateButton":"Generate Joke",
             "backButton":"Back",
             "whereIsSantaButton":"Where is Santa",
             "distanceSanta":"Santa is at {0} from you",
             "daysBeforeChristmas":"{0} before Christmas"
          }
       },
       {
          "lang":"fr",
          "words":{
             "generateButton":"Generer Blague",
             "backButton":"Retour",
             "whereIsSantaButton":"Ou est le Pere Noel",
             "distanceSanta":"Le Pere Noel est a {0} de vous",
             "daysBeforeChristmas":"{0} restant avant Noel"
          }
       }
    ]
 };