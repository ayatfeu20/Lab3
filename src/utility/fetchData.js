export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '86bfb5b783msh8cefdf2e33275bep1481acjsnedec9c50cf25',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '86bfb5b783msh8cefdf2e33275bep1481acjsnedec9c50cf25',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
