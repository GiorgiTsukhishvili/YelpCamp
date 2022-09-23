export interface NewCampGround {
  title: string;
  price: number;
  description: string;
  location: string;
  image: string;
}

export interface UpdateData {
  title?: string;
  price?: number;
  description?: string;
  location?: string;
  image?: string;
  __v: number;
  _id: string;
}
