import React from "react";
import { useTechnicalTest } from "../contexts/technicalTestContexts";
import { usersListColumns } from "./listsColumns";
import ProviderGenericDataGrid from "./ProviderGenericDataGrid";

const UsersList = () => {
  const { usersList } = useTechnicalTest();
  const { isLoading, data, error } = usersList;

  return (
    <ProviderGenericDataGrid
      isLoading={isLoading}
      data={data}
      error={error}
      columns={usersListColumns}
    />
  );
};

export default UsersList;
