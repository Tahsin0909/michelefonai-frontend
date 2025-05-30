export interface Property {
  id: string;
  image: string;
  propertyType: string;
  status: string;
  location: string;
  title: string;
  area: number;
  rooms: number;
  bathrooms: number;
  price: number;
  capRate: number;
  yearlyIncome: number;
  isFavorite?: boolean;
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    location: string;
    date: string;
    avatar: string;
  };
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
