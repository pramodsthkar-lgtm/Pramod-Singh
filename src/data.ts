import { MenuItem, Review, Service } from "./types";

export const menuItems: MenuItem[] = [
  { id: 1, name: "Paneer Butter Masala", price: "₹250", desc: "Rich and creamy curry made with paneer, spices, onions, tomatoes, and butter.", category: "Vegetarian", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Chicken Biryani", price: "₹350", desc: "Classic fragrant rice dish cooked with tender chicken and aromatic spices.", category: "Non-Vegetarian", image: "https://images.unsplash.com/photo-1563379091339-03b2184f4f4d?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Tandoori Roti", price: "₹30", desc: "Traditional Indian flatbread, baked perfectly in a clay oven.", category: "Breads", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Veg Thali", price: "₹200", desc: "A complete meal consisting of dal, paneer curry, mix veg, rice, and roti.", category: "Thali", image: "https://images.unsplash.com/photo-1546833999-b14be263b65e?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Chicken Curry", price: "₹320", desc: "Spicy and flavorful chicken curry slow-cooked in royal authentic style.", category: "Non-Vegetarian", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Fried Rice", price: "₹180", desc: "Wok-tossed rice with fresh seasonal vegetables and light soy sauce.", category: "Chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Noodles", price: "₹160", desc: "Hakka style noodles tossed with crisp veggies, garlic, and sauces.", category: "Chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Burger", price: "₹120", desc: "Crispy patty, fresh lettuce, and our secret sauce in a toasted bun.", category: "Fast Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
  { id: 9, name: "Pizza", price: "₹450", desc: "Wood-fired pizza topped with mozzarella and premium ingredients.", category: "Fast Food", image: "https://images.unsplash.com/photo-1513104890138-7c04986ca398?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Cold Drinks", price: "₹60", desc: "Refreshing mocktails and sodas to complement your royal meal.", category: "Beverages", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1585937421606-afa5c5f082e6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?auto=format&fit=crop&w=800&q=80",
];

export const reviews: Review[] = [
  { id: 1, name: "Rahul Sharma", rating: 5, text: "Absolutely phenomenal! The Paneer Butter Masala took me right back to the flavors of Delhi. Beautiful ambience as well.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Priya Patel", rating: 5, text: "The presentation and the authentic taste of the Chicken Biryani are unmatched. A premium experience from start to finish.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: "Amit Kumar", rating: 4, text: "Great service and luxurious atmosphere. The Veg Thali had so many rich flavors. Highly recommended for family dinners.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
];

export const services: Service[] = [
  { id: 1, title: "Dine-In", desc: "Experience royal ambience with exceptional table service and premium decor.", icon: "UtensilsCrossed" },
  { id: 2, title: "Takeaway", desc: "Grab your favorite authentic meals beautifully packed for your convenience.", icon: "ShoppingBag" },
  { id: 3, title: "Home Delivery", desc: "Fast and reliable doorstep delivery to enjoy Zaika in your own comfort.", icon: "Bike" },
  { id: 4, title: "Online Booking", desc: "Reserve your table seamlessly through our reliable booking portal.", icon: "CalendarCheck" },
];
