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

  addTrip: (trip) => set((state) => ({ trips: [...state.trips, trip] })),
  deleteTrip: (id) =>
    set((state) => ({ trips: state.trips.filter((trip) => trip.id !== id) })),
  updateTripDates: (id, startDate, endDate) =>
    set((state) => ({
      trips: state.trips.map((trip) =>
        trip.id === id ? { ...trip, startDate, endDate } : trip
      ),
    })),
}));
