import axios from "axios";

export const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data } = await axios.get(url);
  const promises = data.map(async (user) => {
    return {
      name: user.name,
      email: user.email,
      numberOfPosts: await getNumberPosts(user.id),
      id: user.id,
    };
  });
  return Promise.all(promises);
};

export const getPosts = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const { data } = await axios.get(url);
  const promises = data.map(async (post) => {
    return {
      title: post.title,
      id: post.id,
      author: await getAuthor(post.userId),
      numberOfComments: await getNumberComments(post.id),
    };
  });
  return Promise.all(promises);
};

export const getAlbumns = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const { data } = await axios.get(url);
  const promises = data.map(async (album) => {
    return {
      id: album.id,
      author: await getAuthor(album.userId),
      numberOfPhotos: await getNumberPhotos(album.id),
    };
  });
  return Promise.all(promises);
};

const getAuthor = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;
  const { data } = await axios.get(url);
  return data[0].name;
};

const getNumberPosts = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};

const getNumberComments = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};

const getNumberPhotos = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};
