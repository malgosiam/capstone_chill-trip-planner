import { create } from "zustand";

export const useNewTripStore = create((set) => ({
  trips: [
    {
      id: "642864256e025655967af08b",
      townName: "New York",
      startDate: "2023-04-01",
      endDate: "2023-04-07",
    },
    {
      id: "3efb4c4b9a8bbf37155d63ee",
      townName: "Tokyo",
      startDate: "2020-03-25",
      endDate: "2020-03-31",
    },
    {
      id: "d00e856e1d5e61c20258281b",
      townName: "Rotterdam",
      startDate: "2019-06-20",
      endDate: "2019-06-26",
    },
    {
      id: "b357634f399c0e56d99c8756",
      townName: "Porto",
      startDate: "2018-03-15",
      endDate: "2018-03-21",
    },
  ],

  places: [
    {
      id: 1,
      tripId: "642864256e025655967af08b",
      name: "The High Line",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=the+high+line",
      description:
        "A unique elevated park built on a former railroad line, with great views and interesting art installations.",
    },
    {
      id: 2,
      tripId: "642864256e025655967af08b",
      name: "The Empire State Building",
      rating: "not",
      mapsUrl: "https://www.google.com/maps?q=the+empire+state+building",
      description:
        "One of the most famous skyscrapers in the world, with breathtaking views from the top.",
    },
    {
      id: 3,
      tripId: "642864256e025655967af08b",
      name: "The Metropolitan Museum of Art",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=the+metropolitan+museum+of+art",
      description:
        "One of the world's largest and most comprehensive art museums, with an extensive collection of works from all over the world.",
    },
    {
      id: 4,
      tripId: "642864256e025655967af08b",
      name: "Central Park",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=central+park",
      description:
        "One of the most famous parks in the world, with plenty of outdoor activities and attractions.",
    },
    {
      id: 5,
      tripId: "642864256e025655967af08b",
      name: "Little Island",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=little+island+on+new+york",
      description:
        "A new public park built on top of the Hudson River, featuring scenic views, live performances, and unique architecture.",
    },
    {
      id: 5,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Todoroki Valley",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=todoroki+valley",
      description:
        "A peaceful nature retreat in Tokyo with a walking trail alongside a flowing river and picturesque waterfalls.",
    },
    {
      id: 6,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Sensoji Temple",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=sensoji+temple",
      description:
        "A historic Buddhist temple in Tokyo with a bustling shopping street leading up to it.",
    },
    {
      id: 7,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Shibuya Crossing",
      rating: "not",
      mapsUrl: "https://www.google.com/maps?q=shibuya+crossing",
      description:
        "One of the busiest pedestrian intersections in the world, known for its neon lights and crowds.",
    },
    {
      id: 8,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Meiji Shrine",
      rating: "chill",
      mapsUrl: "https://www.google.com/maps?q=meiji+shrine",
      description:
        "A peaceful Shinto shrine surrounded by a forested park in the heart of Tokyo.",
    },
  ],

  addTrip: (trip) => set((state) => ({ trips: [...state.trips, trip] })),
  deleteTrip: (id) =>
    set((state) => ({ trips: state.trips.filter((trip) => trip.id !== id) })),
  updateTripDates: (id, startDate, endDate) =>
    set((state) => ({
      trips: state.trips.map((trip) =>
        trip.id === id ? { ...trip, startDate, endDate } : trip
      ),
    })),

  updatePlaceRating: (id, rating) =>
    set((state) => ({
      places: state.places.map((place) =>
        place.id === id ? { ...place, rating } : place
      ),
    })),
}));
