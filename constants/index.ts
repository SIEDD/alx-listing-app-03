interface Address {
    state: string;
    city: string;
    country: string;
  }
  
  interface Offers {
    bed: string;
    shower: string;
    occupants: string;
  }
  
  interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
  }
  
  export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
      name: "Villa Ocean Breeze",
      address: {
        state: "Seminyak",
        city: "Bali",
        country: "Indonesia",
      },
      rating: 4.89,
      category: ["Luxury Villa", "Pool", "Free Parking"],
      price: 3200,
      offers: {
        bed: "3",
        shower: "3",
        occupants: "4-6",
      },
      image: "https://example.com/image1.jpg",
      discount: "",
    },
    {
      name: "Mountain Escape Chalet",
      address: {
        state: "Aspen",
        city: "Colorado",
        country: "USA",
      },
      rating: 4.7,
      category: ["Mountain View", "Fireplace", "Self Checkin"],
      price: 1800,
      offers: {
        bed: "4",
        shower: "2",
        occupants: "5-7",
      },
      image: "https://example.com/image2.jpg",
      discount: "30",
    },
    {
      name: "Cozy Desert Retreat",
      address: {
        state: "Palm Springs",
        city: "California",
        country: "USA",
      },
      rating: 4.92,
      category: ["Desert View", "Pet Friendly", "Self Checkin"],
      price: 1500,
      offers: {
        bed: "2",
        shower: "1",
        occupants: "2-3",
      },
      image: "https://example.com/image3.jpg",
      discount: "",
    },
    {
      name: "City Lights Penthouse",
      address: {
        state: "New York",
        city: "New York",
        country: "USA",
      },
      rating: 4.85,
      category: ["City View", "Free WiFi", "24h Checkin"],
      price: 4500,
      offers: {
        bed: "2",
        shower: "2",
        occupants: "2-4",
      },
      image: "https://example.com/image4.jpg",
      discount: "15",
    },
    // (More property listings follow...)
  ];
  