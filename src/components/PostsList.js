import React, { useEffect } from "react";
import { useTechnicalTest } from "../contexts/technicalTestContexts";
import { postsListColumns } from "./listsColumns";
import NumberInput from "./NumberInput";
import ProviderGenericDataGrid from "./ProviderGenericDataGrid";

const PostsList = () => {
  const { fetchPostsList, postsList, countPosts, setCountPosts } =
    useTechnicalTest();
  const { isLoading, error, data } = postsList;
  const sliceData = data?.slice(data.length - countPosts);

  useEffect(() => {
    if (!data) {
      fetchPostsList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeInput = ({ target }) => {
    const value = target.value;
    setCountPosts(value);
  };

  return (
    <ProviderGenericDataGrid
      isLoading={isLoading}
      data={sliceData}
      error={error}
      columns={postsListColumns}
    >
      <NumberInput value={countPosts} onChange={handleChangeInput} />
    </ProviderGenericDataGrid>
  );
};

export default PostsList;
