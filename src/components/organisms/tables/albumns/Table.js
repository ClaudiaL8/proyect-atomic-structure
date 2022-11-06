import React, { useEffect } from "react";
import { useTechnicalTest } from "../../../../contexts/technicalTestContexts";
import { albumnsTableColumns } from "./columns.constant";
import ProviderGenericDataGrid from "../../grids/ProviderGenericDataGrid";

export const AlbumnsTable = () => {
  const { fetchAlbumnsList, albumnsList, countAlbumns, setCountAlbumns } =
    useTechnicalTest();
  const { isLoading, error, data } = albumnsList;

  const sliceData = data?.slice(data.length - countAlbumns);

  useEffect(() => {
    if (!data) {
      fetchAlbumnsList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeInput = ({ target }) => {
    const value = target.value;
    setCountAlbumns(value);
  };

  const props = {
    dataTable: {
      isLoading: isLoading,
      error: error,
      rows: sliceData,
      columns: albumnsTableColumns,
    },
    input: {
      value: countAlbumns,
      onChange: handleChangeInput,
      label: "How many albumns you want to show?",
      type: "number",
    },
  };
  return <ProviderGenericDataGrid data={props} />;
};
