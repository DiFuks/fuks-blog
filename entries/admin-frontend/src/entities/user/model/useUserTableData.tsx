import { Components } from '@difuks/auth-backend';
import { useMemo } from 'react';

import { IEnumOption, TColumnTypes } from 'admin-frontend/shared/ui/Table';
import { userApi } from 'admin-frontend/entities/user/model/userApi';

const getColumns = (
  roles: IEnumOption[],
): TColumnTypes<Components.Schemas.UserResponse> => [
  {
    title: 'Email',
    dataIndex: 'email',
    editable: true,
    metadata: {
      type: 'string',
    },
  },
  {
    title: 'Role',
    dataIndex: 'role',
    metadata: {
      type: 'enum',
      options: roles,
    },
    editable: true,
  },
  {
    title: 'Is confirmed',
    dataIndex: 'isConfirmed',
    metadata: {
      type: 'boolean',
    },
    editable: true,
  },
];

interface IResult {
  columns: TColumnTypes<Components.Schemas.UserResponse>;
  dataSource: Array<Components.Schemas.UserResponse & { key: string }>;
}

/**
 * Возвращает данные для отрисовки таблицы пользователей.
 */
export const useUserTableData = (roles: IEnumOption[]): IResult => {
  const { data } = userApi.useUserListQuery();

  const dataSource = useMemo(
    () => data?.map((item) => ({ ...item, key: item.id })) || [],
    [data],
  );

  const columns = useMemo(() => getColumns(roles), [roles]);

  return { columns, dataSource };
};
