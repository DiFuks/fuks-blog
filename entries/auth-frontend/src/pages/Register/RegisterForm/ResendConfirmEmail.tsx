import { styled } from '@linaria/react';
import { Button, Card, Space, Typography } from 'antd';
import { FC, useCallback } from 'react';

import { useAuthApi } from 'auth-frontend/utils/api';
import { useRedirectFromContext } from 'auth-frontend/hooks/useRedirectFrom';
import { useDifferenceInterval } from 'auth-frontend/hooks/useDifferenceInterval';

interface IProps {
  email: string;
}

/**
 * Компонент для повторной отправки кода подтверждения.
 */
export const ResendConfirmEmail: FC<IProps> = ({ email }) => {
  const [resendConfirm, , status] = useAuthApi('registerResendConfirm');

  const redirectFrom = useRedirectFromContext();

  const { humanTimeout, isRunning } = useDifferenceInterval({ status });

  const onResendClick = useCallback(async () => {
    if (isRunning) {
      return;
    }

    await resendConfirm({ email, redirectFrom });
  }, [email, isRunning, redirectFrom, resendConfirm]);

  return (
    <SCard title='Регистрация'>
      <Space direction='vertical' size='small'>
        <Typography.Text>
          Письмо с кодом подтверждения отправлено вам на email. Код не пришел?
        </Typography.Text>
        <Button onClick={onResendClick} disabled={isRunning}>
          {isRunning ? <>До повторной отправки {humanTimeout}</> : 'Отправить'}
        </Button>
      </Space>
    </SCard>
  );
};

const SCard = styled(Card)`
  max-width: 400px;
`;
