const config = {
  url: 'https://api.giphy.com/v1/gifs/',
  apiKey: '?api_key=aR2IsjLqbMhlyyIsmd2o6QXOiyYGvZNQ',
};

export const getGalleryUrl = (pageNum: number): string => {
  const perPage = 6;
  const url = `${config.url}trending${config.apiKey}&limit=${perPage}&offset=${
    perPage * (pageNum - 1)
  }`;

  return url;
};

export const getGifDetailsUrl = (id: string) => {
  return config.url + id + config.apiKey;
};

export const getSearchUrl = (input: string): string => {
  return `${config.url}search${config.apiKey}&q=${input}&limit=10`;
};
