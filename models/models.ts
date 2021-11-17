export interface GifType {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  username: string;
  userImage: string;
}

export interface GifDetailsType extends GifType {
  rating: string;
  giphyUrl: string;
  importDate: string;
  gotTrendingDate: string;
  isVerified: boolean;
  profileUrl: string;
}

export interface CommentType {
  id: string;
  text: string;
  date: string;
}
