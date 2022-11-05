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

const getNumberPosts = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};

export const getPosts = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const { data } = await axios.get(url);
  const promises = data.map(async (post) => {
    return {
      title: post.title,
      id: post.id,
      author: await getAuthor(post.userId),
      numberOfComments: await getNumberComments(post.postId),
    };
  });
  return Promise.all(promises);
};

const getAuthor = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;
  const { data } = await axios.get(url);
  return data[0].name;
};

const getNumberComments = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments?userId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};

export const getAlbumns = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums`;
  const { data } = await axios.get(url);
  const promises = data.map(async (album) => {
    return {
      id: album.id,
      author: await getAuthor(album.userId),
      numberOfPhotos: await getNumberPhotos(album.albumId),
    };
  });
  return Promise.all(promises);
};

const getNumberPhotos = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments?userId=${id}`;
  const { data } = await axios.get(url);
  return data.length;
};
