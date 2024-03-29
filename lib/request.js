
export const exerciseOptions = {
    method: 'GET',
    url : 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10',
     headers: {
      'X-RapidAPI-Key':  '86bfb5b783msh8cefdf2e33275bep1481acjsnedec9c50cf25',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':  '86bfb5b783msh8cefdf2e33275bep1481acjsnedec9c50cf25',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    console.log('Response:', response); 
    const data = await response.json();
    return data;
  };
  

  export const getExerciseDetailData = async (id) => {
    const res = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
    const data = await res.json();
    return data;
  };
  
  
  export const getYoutubeDetailData = async (name) => {
    const res = await fetchData(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`,
      youtubeOptions
    );
    const data = await res.json();
    return data;
  };
  