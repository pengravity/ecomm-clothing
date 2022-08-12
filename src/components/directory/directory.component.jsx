import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
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
          title: "women",
          imageUrl: "https://i.ibb.co/1dGZkdM/women.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/women",
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/JQygTsy/Men.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
