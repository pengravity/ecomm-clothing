const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/BB8dJ93/Hats.png",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/JtCHQSL/Jacket.jpg",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/j9KZX3s/Shoes.jpg",
      id: 3,
      linkUrl: "shoes",
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/1dGZkdM/women.jpg",
      size: "large",
      id: 4,
      linkUrl: "women",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/JQygTsy/Men.jpg",
      size: "large",
      id: 5,
      linkUrl: "men",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
