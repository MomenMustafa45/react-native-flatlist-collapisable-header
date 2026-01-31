export interface ListItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: string;
  isFavorite: boolean;
  timestamp: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  itemsCount: number;
}
