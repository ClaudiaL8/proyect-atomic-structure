import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { getUsers, getPosts, getAlbumns } from "../api/index";

const initialState = {
  usersList: { isLoading: false, data: undefined, error: "" },
  postsList: { isLoading: false, data: undefined, error: "" },
  albumnsList: { isLoading: false, data: undefined, error: "" },
  countPosts: "20",
  countAlbumns: "20",
};

const TechnicalTest = createContext(initialState);

export const useTechnicalTest = () => useContext(TechnicalTest);

export const TechnicalTestContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState(initialState.usersList);
  const [postsList, setPostsList] = useState(initialState.postsList);
  const [albumnsList, setAlbumnsList] = useState(initialState.albumnsList);
  const [countPosts, setCountPosts] = useState(initialState.countPosts);
  const [countAlbumns, setCountAlbumns] = useState(initialState.countAlbumns);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUsersList = useCallback(async () => {
    setUsersList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getUsers();
      setUsersList({ isLoading: false, data: data });
    } catch (err) {
      setUsersList({ isLoading: false, error: err.message });
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPostsList = useCallback(async () => {
    setPostsList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getPosts();
      setPostsList({ isLoading: false, data: data });
    } catch (err) {
      setPostsList({ isLoading: false, error: err.message });
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAlbumnsList = useCallback(async () => {
    setAlbumnsList({ ...initialState.usersList, isLoading: true });
    try {
      const data = await getAlbumns();
      setAlbumnsList({ isLoading: false, data: data });
    } catch (err) {
      setAlbumnsList({ isLoading: false, error: err.message });
    }
  });

  const state = useMemo(
    () => ({
      fetchUsersList,
      usersList,
      fetchPostsList,
      postsList,
      countPosts,
      setCountPosts,
      fetchAlbumnsList,
      albumnsList,
      countAlbumns,
      setCountAlbumns,
    }),
    [
      fetchUsersList,
      usersList,
      fetchPostsList,
      postsList,
      countPosts,
      setCountPosts,
      fetchAlbumnsList,
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
