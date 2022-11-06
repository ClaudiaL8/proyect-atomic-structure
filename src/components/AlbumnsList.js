import React, { useEffect } from "react";
import { useTechnicalTest } from "../contexts/technicalTestContexts";
import { albumnsListColumns } from "./listsColumns";
import NumberInput from "./NumberInput";
import ProviderGenericDataGrid from "./ProviderGenericDataGrid";

const AlbumnsList = () => {
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

  return (
    <ProviderGenericDataGrid
      isLoading={isLoading}
      data={sliceData}
      error={error}
      columns={albumnsListColumns}
    >
      <NumberInput value={countAlbumns} onChange={handleChangeInput} />
    </ProviderGenericDataGrid>
  );
};

export default AlbumnsList;
