export interface MenuItem {
  id: number;
  name: string;
  price: string;
  desc: string;
  category: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  desc: string;
  icon: string;
}
