import React, { useEffect } from "react";
import { useTechnicalTest } from "../../../../contexts/technicalTestContexts";
import { usersTableColumns } from "./columns.constants";
import ProviderGenericDataGrid from "../../grids/ProviderGenericDataGrid";

export const UsersTable = () => {
  const { fetchUsersList, usersList } = useTechnicalTest();
  const { isLoading, data, error } = usersList;

  useEffect(() => {
    if (!data) {
      fetchUsersList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = {
    dataTable: {
      isLoading: isLoading,
      error: error,
      rows: data,
      columns: usersTableColumns,
    },
  };

  return <ProviderGenericDataGrid data={props} />;
};
