import type { Category, ListItem, UserProfile } from './types';

export const dummyData: ListItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: `item-${index}`,
  title: `Item ${index + 1}`,
  description: `This is a detailed description for item ${
    index + 1
  }. It contains more information about this particular item.`,
  image: `https://picsum.photos/seed/${index}/200/200`,
  category: index % 3 === 0 ? 'Tech' : index % 3 === 1 ? 'Food' : 'Travel',
  price: `$${(Math.random() * 100).toFixed(2)}`,
  rating: (Math.random() * 5).toFixed(1),
  isFavorite: Math.random() > 0.5,
  timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
}));

// Categories for filtering
export const categories: Category[] = [
  { id: 'all', title: 'All Items' },
  { id: 'tech', title: 'Technology' },
  { id: 'food', title: 'Food & Drinks' },
  { id: 'travel', title: 'Travel' },
  { id: 'favorites', title: 'Favorites' },
];

// User profile data
export const userProfile: UserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  joinDate: '2023-01-15',
  itemsCount: 47,
};
