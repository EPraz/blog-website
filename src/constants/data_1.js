import images from "./images";

export let blog_data = [
    {
      title: "The brand new arholma green",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 1,
      url: "the-brand-new-arholma-green",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
    {
      title: "Winter Madness Price Reduction",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 2,
      url: "winter-madness-price-reduction",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
    {
      title: "The brand new arholma green",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 3,
      url: "the-brand-new-arholma-green",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
    {
      title: "The brand new arholma green",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 4,
      url: "the-brand-new-arholma-green",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
    {
      title: "The brand new arholma green",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 5,
      url: "the-brand-new-arholma-green",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
    {
      title: "The brand new arholma green",
      date: "November 10, 2011",
      feature_image: images.image_1,
      id: 6,
      url: "the-brand-new-arholma-green",
      excerpt: "Quisque nec nibh sit amet sapien ultrices congue eu vitae sapien. Quisque pretium molestie sapien in pretium. Praesent dolor velit, iaculis quis augue id, porttitor fermentum nunc. Nulla condimentum sit amet ligula ac varius. Donec a erat sollicitudin, dignissim lorem et, consequat dolor. Sed ullamcorper vitae felis id egestas. Morbi tincidunt diam vitae augue ultrices, vitae dictum dui tincidunt. Phasellus sit amet feugiat nibh. Aliquam rutrum pretium odio eu bibendum. Curabitur elementum risus et ante pharetra hendrerit. Donec nec arcu purus. Pellentesque in leo odio. Morbi convallis nec quam non.",
    },
  ];
  
  export function getData() {
    return blog_data;
  }

  export function getDataID(id) {
      return blog_data.find(
          (data) => data.number === id
      )
  }
  // export function getTitleID(id) {
  //     let info =  blog_data.find(
  //         (data) => data.id === id
  //     );
      // info.title = info.title.replace(/\s+/g, ' ').trim();
      // console.log(info.title)
      // return info.title;
  // }

  export function deleteData(number) {
    deleteData = blog_data.filter(
      (data) => data.number !== number
    );
  }

  // function getID(string) {
  //   const id_text = string.replace(/\s+/g, ' ').trim();
  //   console.log(id_text)
  //   return id_text;

  // }