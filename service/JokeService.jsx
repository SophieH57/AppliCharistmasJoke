
const christmasApiRequest = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Christmas';
const addLanguageApi = '?lang=';
const blackList = '?blacklistFlags=nsfw'

export const fetchJoke = async (setJoke, setLoading, country) => {
          try {
            setLoading(true);
            let query = christmasApiRequest;
            if(country != 'eng' && country != 'us'){
                query += addLanguageApi+RNLocalize.getCountry().toLowerCase();
            }
            query += blackList;
            const response = await fetch(query);
            const json = await response.json();
            setJoke(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
