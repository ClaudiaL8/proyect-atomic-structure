import axios from "axios";
import {
  USERS_URL,
  POSTS_URL,
  COMMENTS_URL,
  ALBUMNS_URL,
  PHOTOS_URL,
} from "./paths";

export const getUsers = async () => {
  const { data } = await axios.get(USERS_URL);
  const promises = data.map(async (user) => {
    return {
      name: user.name,
      email: user.email,
      numberOfPosts: await getNumberOff(user.id, "posts"),
      id: user.id,
    };
  });
  return Promise.all(promises);
};

export const getPosts = async () => {
  const { data } = await axios.get(POSTS_URL);
  const promises = data.map(async (post) => {
    return {
      title: post.title,
      id: post.id,
      author: await getAuthor(post.userId),
      numberOfComments: await getNumberOff(post.id, "comments"),
    };
  });
  return Promise.all(promises);
};

export const getAlbumns = async () => {
  const { data } = await axios.get(ALBUMNS_URL);
  const promises = data.map(async (album) => {
    return {
      id: album.id,
      author: await getAuthor(album.userId),
      numberOfPhotos: await getNumberOff(album.id, "photos"),
    };
  });
  return Promise.all(promises);
};

const getAuthor = async (id) => {
  const url = `${USERS_URL}?id=${id}`;
  const { data } = await axios.get(url);
  return data[0].name;
};

const getNumberOff = async (id, type) => {
  let url;
  switch (type) {
    case "posts":
      url = `${POSTS_URL}?userId=${id}`;
      break;
    case "photos":
      url = `${PHOTOS_URL}?albumId=${id}`;
      break;
    case "comments":
      url = `${COMMENTS_URL}?postId=${id}`;
      break;
    default:
      return;
  }

  const { data } = await axios.get(url);
  return data.length;
};
