const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/BB8dJ93/Hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/JtCHQSL/Jacket.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/j9KZX3s/Shoes.jpg",
      id: 3,
      linkUrl: "shop/shoes",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/1dGZkdM/women.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/JQygTsy/Men.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
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
