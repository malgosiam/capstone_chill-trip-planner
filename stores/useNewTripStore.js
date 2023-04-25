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
      mapsUrl: "https://goo.gl/maps/8QQ38R1YhL9siCtF6",
      description:
        "A unique elevated park built on a former railroad line, with great views and interesting art installations.",
    },
    {
      id: 2,
      tripId: "642864256e025655967af08b",
      name: "The Empire State Building",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/EKHFWRuveCX4Yoxb7",
      description:
        "One of the most famous skyscrapers in the world, with breathtaking views from the top.",
    },
    {
      id: 3,
      tripId: "642864256e025655967af08b",
      name: "The Metropolitan Museum of Art",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/3Bx4LoAEh5nGd3CQ7",
      description:
        "One of the world's largest and most comprehensive art museums, with an extensive collection of works from all over the world.",
    },
    {
      id: 4,
      tripId: "642864256e025655967af08b",
      name: "Central Park",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/L17mAhDZaoxRtXR49",
      description:
        "One of the most famous parks in the world, with plenty of outdoor activities and attractions.",
    },
    {
      id: 5,
      tripId: "642864256e025655967af08b",
      name: "Little Island",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/BErp1G8A7eTWNna7A",
      description:
        "A new public park built on top of the Hudson River, featuring scenic views, live performances, and unique architecture.",
    },
    {
      id: 5,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Todoroki Valley",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/j9jm7v5CpynQ4Frh8",
      description:
        "A peaceful nature retreat in Tokyo with a walking trail alongside a flowing river and picturesque waterfalls.",
    },
    {
      id: 6,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Sensoji Temple",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/e4qJLvoaioXqB4Cy5",
      description:
        "A historic Buddhist temple in Tokyo with a bustling shopping street leading up to it.",
    },
    {
      id: 7,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Shibuya Crossing",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/Ft9aBvb6LvPUxufs5",
      description:
        "One of the busiest pedestrian intersections in the world, known for its neon lights and crowds.",
    },
    {
      id: 8,
      tripId: "3efb4c4b9a8bbf37155d63ee",
      name: "Meiji Shrine",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/4U789TMJ2Bet6V577",
      description:
        "A peaceful Shinto shrine surrounded by a forested park in the heart of Tokyo.",
    },
    {
      id: 9,
      tripId: "d00e856e1d5e61c20258281b",
      name: "Erasmusbrug",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/ktE6c97dYVqzaMZZ6",
      description:
        "A beautiful bridge with great views of the city and the river.",
    },
    {
      id: 10,
      tripId: "d00e856e1d5e61c20258281b",
      name: "Het Park",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/xWwBsVnaYjnxPPLJ9",
      description:
        "A large park located in the south of Rotterdam, with gardens, walking paths, and a lake with rowing boats.",
    },
    {
      id: 11,
      tripId: "d00e856e1d5e61c20258281b",
      name: "Museum Boijmans Van Beuningen",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/D1Rm9VZimM4HA7TV7",
      description: "A museum with an extensive collection of art and design.",
    },
    {
      id: 12,
      tripId: "d00e856e1d5e61c20258281b",
      name: "Cube Houses",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/QRbRS44Keb7arEhQ9",
      description:
        "A set of unique and quirky cube-shaped houses in Rotterdam, designed by Dutch architect Piet Blom.",
    },

    {
      id: 13,
      tripId: "b357634f399c0e56d99c8756",
      name: "Casa da Música",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/ANMtW1tkEnAqvqUM9",
      description:
        "A modern concert hall designed by Dutch architect Rem Koolhaas, which hosts a wide variety of concerts and cultural events.",
    },
    {
      id: 14,
      tripId: "b357634f399c0e56d99c8756",
      name: "Ponte Dom Luís I",
      rating: "not",
      mapsUrl: "https://goo.gl/maps/1qC4LXHoQhBHRpT5A",
      description:
        "A double-deck metal arch bridge that spans the Douro River, offering stunning views of Porto and the surrounding area.",
    },
    {
      id: 15,
      tripId: "b357634f399c0e56d99c8756",
      name: "Livraria Lello",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/cdwVHGGgocPT6nZ77",
      description:
        "A stunning bookstore that dates back to 1906, with a grand wooden staircase, stained glass, and books in multiple languages.",
    },
    {
      id: 16,
      tripId: "b357634f399c0e56d99c8756",
      name: "Parque da Cidade do Porto",
      rating: "chill",
      mapsUrl: "https://goo.gl/maps/w5qXhABRyyGJk2z59",
      description:
        "A large urban park with gardens, lakes, and sports facilities.",
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

  packingLists: {
    "642864256e025655967af08b": [
      { id: 10001, name: "T-shirts", quantity: 5, checked: false },
      { id: 10002, name: "Pants", quantity: 3, checked: true },
      { id: 10003, name: "Socks", quantity: 7, checked: false },
      { id: 10004, name: "Toothbrush", quantity: 1, checked: true },
      { id: 10005, name: "Toothpaste", quantity: 1, checked: true },
      { id: 10006, name: "Underwear", quantity: 5, checked: false },
      { id: 10007, name: "Shoes", quantity: 2, checked: false },
      { id: 10008, name: "Jacket", quantity: 1, checked: true },
      { id: 10009, name: "Hat", quantity: 1, checked: false },
      { id: 10010, name: "Gloves", quantity: 1, checked: false },
      { id: 10011, name: "Scarf", quantity: 1, checked: false },
      { id: 10012, name: "Phone charger", quantity: 1, checked: false },
      { id: 10013, name: "Flip flops", quantity: 1, checked: false },
      { id: 10014, name: "Sunscreen", quantity: 1, checked: false },
      { id: 10015, name: "Sunglasses", quantity: 1, checked: true },
    ],
  },
}));
