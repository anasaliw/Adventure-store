import React, { useContext, useState, createContext } from "react";
export const DataProvider = createContext(null);

const ContextApi = ({ children }) => {
  // ! We can use simple variable to store static data
  // ! But as per guidance i have to use hooks, that's why I approached this trick
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/assets/2.jpg",
      title: "Bike",
      price: "358",
      animation: "fade-right",
      description: "A Bike is very good for City work in Pakistan",
    },
    {
      id: 2,
      image: "/assets/3.jpg",
      title: "Mountains",
      animation: "fade-up",
      price: "358",
      description:
        "This is description of the Mountains. These Mountains are very attractive",
    },
    {
      id: 3,
      image: "/assets/5.jpg",
      title: "Cycle",
      price: "358",
      animation: "fade-left",
      description: "Cycling is very good for physical Health",
    },
    {
      id: 4,
      image: "/assets/pic1.jpg",
      title: "Truck",

      price: "358",
      animation: "fade-right",
      description:
        "This is monster truck which is used for off-roading and for loading",
    },
    {
      id: 5,
      image: "/assets/pic2.jpg",
      title: "Galaxy",
      animation: "fade-up",
      price: "358",
      description:
        "This is the image galaxy where we can see other galaxies , planet and falling stars",
    },
    {
      id: 6,
      image: "/assets/pic3.jpg",
      title: "Technology",
      price: "358",
      animation: "fade-left",
      description: "This is human who is interacting with virtual technology",
    },
    {
      id: 7,
      image: "/assets/pic4.jpg",
      title: "Girl",
      animation: "fade-right",
      price: "358",
      description:
        "This is the girl interacting with her friends through internet.",
    },
    {
      id: 8,
      image: "/assets/pic5.jpg",
      title: "Astronaut",
      animation: "fade-up",
      price: "358",
      description:
        "This is Astronaut who is representing his success for exploring other planet.",
    },
    {
      id: 9,
      image: "/assets/pic6.jpg",
      title: "Astronauts Love",
      price: "358",
      animation: "fade-left",
      description: "Astronauts loves exploring other planets.",
    },
    {
      id: 10,
      image: "/assets/pic7.jpg",
      title: "Floating Astronauts",
      price: "358",
      animation: "fade-right",
      description: "This is a Astronauts who is floating in the space.",
    },
    {
      id: 11,
      image: "/assets/pic8.jpg",
      title: "Posing Astronauts",
      price: "358",
      animation: "fade-up",
      description: "This Astronauts is posing.",
    },
    {
      id: 12,
      image: "/assets/pic9.jpg",
      title: "Earth",
      price: "358",
      animation: "fade-left",
      description: "This is the picture of earth where humans live..",
    },
  ]);
  return (
    <DataProvider.Provider value={{ products, setProducts }}>
      {children}
    </DataProvider.Provider>
  );
};

export default ContextApi;
