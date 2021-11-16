const config = {
  url: 'https://api.giphy.com/v1/gifs/',
  apiKey: '?api_key=aR2IsjLqbMhlyyIsmd2o6QXOiyYGvZNQ',
};

export const getGalleryUrl = (pageNum: number): string => {
  const perPage = 5;
  const url = `${config.url}trending${config.apiKey}&limit=${perPage}&offset=${
    perPage * (pageNum - 1)
  }`;

  return url;
};
