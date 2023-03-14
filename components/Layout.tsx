import { ReactNode, useEffect, useState } from 'react';
import { MainMenuQuery } from '../generated/graphql';
import { GET_MAIN_MENU } from '../graphql/queries';
import { client } from '../libs/apollo-client';
import { Navbar } from './Navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [menu, setMenu] = useState<MainMenuQuery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query({
        query: GET_MAIN_MENU,
      });

      setMenu(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar menu={menu} />
      <main>{children}</main>
    </>
  );
}
