import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { getUsers, getPosts, getAlbumns } from "../api/index";

const initialState = {
  usersList: { isLoading: false, data: undefined, error: "" },
  postsList: { isLoading: false, data: undefined, error: "" },
  countPosts: "20",
  albumnsList: { isLoading: false, data: undefined, error: "" },
  countAlbumns: "20",
};

const TechnicalTest = createContext(initialState);

export const useTechnicalTest = () => useContext(TechnicalTest);

export const TechnicalTestContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState(initialState.usersList);
  const [postsList, setPostsList] = useState(initialState.postsList);
  const [countPosts, setCountPosts] = useState(initialState.countPosts);
  const [albumnsList, setAlbumnsList] = useState(initialState.albumnsList);
  const [countAlbumns, setCountAlbumns] = useState(initialState.countAlbumns);

  const fetchUsersList = async () => {
    setUsersList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getUsers();
      setUsersList({ isLoading: false, data: data });
    } catch (err) {
      setUsersList({ isLoading: false, error: "error setting users" });
    }
  };

  const fetchPostsList = async () => {
    setPostsList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getPosts();
      setPostsList({ isLoading: false, data: data });
    } catch (err) {
      setPostsList({ isLoading: false, error: "error setting users" });
    }
  };

  const fetchAlbumnsList = async () => {
    setAlbumnsList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getAlbumns();
      setAlbumnsList({ isLoading: false, data: data });
    } catch (err) {
      setAlbumnsList({ isLoading: false, error: "error setting users" });
    }
  };

  useEffect(() => {
    fetchUsersList();
    fetchPostsList();
    fetchAlbumnsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useMemo(
    () => ({
      usersList,
      postsList,
      countPosts,
      setCountPosts,
      albumnsList,
      countAlbumns,
      setCountAlbumns,
    }),
    [
      usersList,
      postsList,
      countPosts,
      setCountPosts,
      albumnsList,
      countAlbumns,
      setCountAlbumns,
    ]
  );

  return (
    <TechnicalTest.Provider value={state}>{children}</TechnicalTest.Provider>
  );
};

export default TechnicalTest;
