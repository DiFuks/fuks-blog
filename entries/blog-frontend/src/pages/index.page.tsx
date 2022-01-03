import Link from 'next/link';
import { Button } from '@fuks/ui/src/components/Button/Button';

import { IPage } from '../common/types/page/IPage';
import { getSsp } from '../common/utils/next/getSsp';
import { IPageProps } from '../common/types/page/IPageProps';

/**
 * Пропсы для главной страницы.
 */
export interface IIndexPageProps extends IPageProps {
  /**
   * Сообщения для отображения.
   */
  message: string;
}

const Index: IPage<IIndexPageProps> = ({ message }) => (
  <div>
    {message}
    <Link href='/categories'>To Categories</Link>
    <Button>Hello</Button>
  </div>
);

export const getServerSideProps = getSsp();

/**
 * Главная страница.
 */
export default Index;
