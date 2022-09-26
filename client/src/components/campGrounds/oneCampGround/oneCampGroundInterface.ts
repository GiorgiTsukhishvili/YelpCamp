export interface Comments {
  name: string;
  comment: string;
}

export interface OneCampGroundInterface {
  title: string;
  price: number;
  description: string;
  location: string;
  image: string;
  comments: Comments[];
  __v: number;
  _id: string;
}
