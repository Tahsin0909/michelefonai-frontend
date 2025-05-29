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
