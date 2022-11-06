import React, { useEffect } from "react";
import { useTechnicalTest } from "../../../../contexts/technicalTestContexts";
import { postsTableColumns } from "./columns.constants";
import ProviderGenericDataGrid from "../../grids/ProviderGenericDataGrid";

export const PostsTable = () => {
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

  const props = {
    dataTable: {
      isLoading: isLoading,
      error: error,
      rows: sliceData,
      columns: postsTableColumns,
    },
    input: {
      value: countPosts,
      onChange: handleChangeInput,
      label: "How many posts you want to show?",
      type: "number",
      size: "small",
    },
  };

  return <ProviderGenericDataGrid data={props} />;
};
